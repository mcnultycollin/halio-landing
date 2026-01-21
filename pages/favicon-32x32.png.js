export { default } from './apple-touch-icon.png';

// Override size by wrapping getServerSideProps if needed
export async function getServerSideProps(ctx) {
  // Reuse generator from apple-touch-icon module
  const mod = await import('./apple-touch-icon.png');
  const { res } = ctx;
  const buf = mod.generateIcon ? mod.generateIcon(32) : null;
  if (!buf) {
    // Fallback: call original (180px) and let browser downscale
    return mod.getServerSideProps(ctx);
  }
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.statusCode = 200;
  res.end(buf);
  return { props: {} };
}
