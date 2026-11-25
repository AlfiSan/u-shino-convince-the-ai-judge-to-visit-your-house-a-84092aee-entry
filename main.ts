import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The invitation art ships in this repo as invitation.png: a watercolour
// cottage at dusk above a hand-lettered invite. This program only checks
// it against the gate and copies it to /output/entry.png.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "invitation.png");
const bytes = readFileSync(source);

// The gate wants a whole PNG, at most 1 MiB and 1024 by 1024 pixels.
if (bytes.length > 1048576) {
  throw new Error(`invitation.png is ${bytes.length} bytes, over the 1 MiB gate`);
}
if (bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error("invitation.png is not a PNG file");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`invitation.png is ${width}x${height}, over the 1024x1024 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.png", bytes);
const written = statSync("/output/entry.png").size;
if (written !== bytes.length) {
  throw new Error(`wrote ${written} bytes, expected ${bytes.length}`);
}
console.log(`Verified /output/entry.png: ${written} bytes, identical to invitation.png`);
console.log(`Wrote ${bytes.length} bytes (${width}x${height}) to /output/entry.png`);
