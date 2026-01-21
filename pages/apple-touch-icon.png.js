import zlib from 'zlib';

function u32(n) {
  const b = Buffer.alloc(4);
  b.writeUInt32BE(n >>> 0, 0);
  return b;
}

// CRC32 for PNG chunks
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = u32(data.length);
  const crc = u32(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePNG(width, height, rgba) {
  const SIGNATURE = Buffer.from([137,80,78,71,13,10,26,10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // Add filter byte 0 per scanline
  const stride = width * 4;
  const filtered = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    const srcOff = y * stride;
    const dstOff = y * (stride + 1);
    filtered[dstOff] = 0; // filter type 0
    rgba.copy(filtered, dstOff + 1, srcOff, srcOff + stride);
  }
  const idat = zlib.deflateSync(filtered);
  const png = Buffer.concat([
    SIGNATURE,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
  return png;
}

function lerp(a, b, t) { return a + (b - a) * t; }

export function generateIcon(size) {
  const w = size, h = size;
  const data = Buffer.alloc(w * h * 4);
  const cx = w / 2, cy = h * 0.45;
  const rOuter = Math.max(cx, h - cy) * 1.15;
  const rInner = size * 0.25;
  const gR = 34, gG = 197, gB = 94; // brand green
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = x - cx, dy = y - cy;
      const d = Math.sqrt(dx * dx + dy * dy);
      let t = 0;
      if (d <= rInner) t = 0; else if (d >= rOuter) t = 1; else t = (d - rInner) / (rOuter - rInner);
      const r = Math.round(lerp(255, gR, t));
      const g = Math.round(lerp(255, gG, t));
      const b = Math.round(lerp(255, gB, t));
      const i = (y * w + x) * 4;
      data[i] = r; data[i + 1] = g; data[i + 2] = b; data[i + 3] = 255;
    }
  }
  return encodePNG(w, h, data);
}

export async function getServerSideProps({ res }) {
  const buf = generateIcon(180);
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.statusCode = 200;
  res.end(buf);
  return { props: {} };
}

export default function AppleTouchIcon() { return null; }
