import { catbox, litterbox, zeroX0 } from "..";
import { readFile } from "fs/promises";

async function main() {
  /* Load image from file */
  const filename = "image.png";
  const buf = await readFile(filename);
  const blob = new Blob([buf]);

  /* Upload on catbox, litterbox and 0x0 */
  await Promise.all([
    catbox(blob, filename).then(console.log).catch(console.error),
    litterbox(blob, filename).then(console.log).catch(console.error),
    zeroX0(blob, filename).then(console.log).catch(console.error),
  ]);
}

main();
