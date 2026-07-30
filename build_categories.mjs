import fs from 'fs';

const bundle = fs.readFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\bundle.js', 'utf8');

const chunk = bundle.substring(215000, 315953);

// Find all `var XYZ="data:image/png;base64,...`
const varRegex = /([A-Za-z0-9_$]+)="(data:image\/png;base64,[^"]+)"/g;
let match;
const imgMap = {};
while ((match = varRegex.exec(chunk)) !== null) {
  imgMap[match[1]] = match[2];
}

console.log('Total base64 images extracted:', Object.keys(imgMap).length);

// Also let's find the CATEGORIES array structure near 302207
const catChunk = bundle.substring(300000, 315000);
fs.writeFileSync('C:\\Users\\HTC\\.gemini\\antigravity\\scratch\\catChunk.txt', catChunk);

// Replace variable references in catChunk with actual base64 strings
let catCode = catChunk;
for (const [varName, base64Str] of Object.entries(imgMap)) {
  catCode = catCode.replace(new RegExp(`img:${varName}\\b`, 'g'), `img:"${base64Str}"`);
}

fs.writeFileSync('C:\\Users\\HTC\.gemini\\antigravity\\scratch\\catCode.txt', catCode);
