export { default } from './apple-touch-icon.png';

export async function getServerSideProps(ctx) {
  const mod = await import('./apple-touch-icon.png');
  const { res } = ctx;
  const buf = mod.generateIcon(16);
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.statusCode = 200;
  res.end(buf);
  return { props: {} };
}

