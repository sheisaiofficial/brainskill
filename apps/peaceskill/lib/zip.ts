import JSZip from 'jszip';

export async function buildSkillZip(files: { name: string; content: string }[]): Promise<Buffer> {
  const zip = new JSZip();
  for (const f of files) {
    zip.file(f.name, f.content);
  }
  return zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
}
