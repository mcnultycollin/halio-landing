import { generateIcon } from './apple-touch-icon.png';

function buildICO(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(count, 4); // count

  const entries = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count; // header + entries
  images.forEach((img, i) => {
    const size = img.size;
    const data = img.data;
    const entry = entries.subarray(i * 16, i * 16 + 16);
    entry[0] = size >= 256 ? 0 : size; // width
    entry[1] = size >= 256 ? 0 : size; // height
    entry[2] = 0; // colors
    entry[3] = 0; // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(data.length, 8); // bytes in res
    entry.writeUInt32LE(offset, 12); // image offset
    offset += data.length;
  });

  const blobs = [header, entries, ...images.map((i) => i.data)];
  return Buffer.concat(blobs);
}

export async function getServerSideProps({ res }) {
  const png16 = generateIcon(16);
  const png32 = generateIcon(32);
  const ico = buildICO([
    { size: 16, data: png16 },
    { size: 32, data: png32 },
  ]);
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.statusCode = 200;
  res.end(ico);
  return { props: {} };
}

export default function FaviconICO() { return null; }

