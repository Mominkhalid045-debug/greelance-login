import fs from 'fs';

const bundle = fs.readFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle.js', 'utf8');

let pos = 0;
for (let i = 0; i < 5; i++) {
  pos = bundle.indexOf('data:image', pos);
  if (pos === -1) break;
  console.log(`--- Match ${i} at ${pos} ---`);
  console.log(bundle.substring(Math.max(0, pos - 150), Math.min(bundle.length, pos + 100)));
  pos += 10;
}
