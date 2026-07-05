// Thin wrapper around pdf-parse. Lazy-loaded because pdf-parse runs file IO
// at import time and breaks Next.js's static analysis otherwise.

export async function extractPdfText(buffer: Buffer): Promise<string> {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const pdfParse = (await import('pdf-parse')).default;
  const result = await pdfParse(buffer);
  return result.text || '';
}
