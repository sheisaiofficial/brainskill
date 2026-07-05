// Flodesk subscribe helper.
//
// Amanda supplied two API keys ("free" + "pro") — likely two separate
// Flodesk accounts/workspaces. We route the free/pro tier to its own key
// and its own segment id. If you actually have one account with two segments,
// just set FLODESK_API_KEY_FREE == FLODESK_API_KEY_PRO.
//
// Flodesk API docs: https://developers.flodesk.com
// Auth is HTTP Basic with the API key as the username, empty password.

type Tier = 'free' | 'pro';

type Customisations = Record<string, string | undefined>;

function keyFor(tier: Tier): string | undefined {
  return tier === 'pro' ? process.env.FLODESK_API_KEY_PRO : process.env.FLODESK_API_KEY_FREE;
}

function segmentFor(tier: Tier): string | undefined {
  return tier === 'pro' ? process.env.FLODESK_SEGMENT_PRO : process.env.FLODESK_SEGMENT_FREE;
}

function authHeader(apiKey: string): string {
  // HTTP Basic: base64("apiKey:")
  const token = Buffer.from(`${apiKey}:`).toString('base64');
  return `Basic ${token}`;
}

async function flodeskFetch(
  apiKey: string,
  path: string,
  init: RequestInit
): Promise<Response> {
  const res = await fetch(`https://api.flodesk.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: authHeader(apiKey),
      'Content-Type': 'application/json',
      'User-Agent': 'peaceskill.sheisai.ai',
      ...(init.headers || {}),
    },
  });
  return res;
}

export async function subscribeToFlodesk(params: {
  tier: Tier;
  email: string;
  name?: string;
  stripeCustomerId?: string;
}): Promise<{ ok: boolean; reason?: string }> {
  const apiKey = keyFor(params.tier);
  const segmentId = segmentFor(params.tier);

  if (!apiKey) {
    return { ok: false, reason: `Flodesk API key for "${params.tier}" not set.` };
  }

  const [firstName, ...rest] = (params.name || '').trim().split(/\s+/);
  const lastName = rest.join(' ');

  const customFields: Customisations = {
    skill_generated_at: new Date().toISOString(),
  };
  if (params.tier === 'pro' && params.stripeCustomerId) {
    customFields.stripe_customer_id = params.stripeCustomerId;
  }

  // Upsert subscriber.
  const subscriberRes = await flodeskFetch(apiKey, '/subscribers', {
    method: 'POST',
    body: JSON.stringify({
      email: params.email,
      first_name: firstName || undefined,
      last_name: lastName || undefined,
      custom_fields: customFields,
      status: 'active',
    }),
  });

  if (!subscriberRes.ok) {
    const text = await subscriberRes.text().catch(() => '');
    return { ok: false, reason: `Flodesk subscriber upsert failed: ${subscriberRes.status} ${text}` };
  }

  // Add to segment, if configured.
  if (segmentId) {
    const segmentRes = await flodeskFetch(
      apiKey,
      `/subscribers/${encodeURIComponent(params.email)}/segments`,
      {
        method: 'POST',
        body: JSON.stringify({ segment_ids: [segmentId] }),
      }
    );
    if (!segmentRes.ok) {
      const text = await segmentRes.text().catch(() => '');
      return { ok: false, reason: `Flodesk segment add failed: ${segmentRes.status} ${text}` };
    }
  }

  return { ok: true };
}
