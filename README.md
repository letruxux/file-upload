# @letruxux/file-upload

Zero dependencies package to upload anonymous files to different hosting sites easily.
Currently supports:

- [catbox](https://catbox.moe)
- [litterbox](https://litterbox.moe)
- [0x0](https://0x0.st)

## Installation

```bash
npm install @letruxux/file-upload
bun add @letruxux/file-upload
pnpm add @letruxux/file-upload
yarn add @letruxux/file-upload
```

## Usage

```js
import { catbox, litterbox, zeroX0 } from "@letruxux/file-upload";

/* Load image from file */
const filename = "image.png";
const buf = await readFile(filename);
const blob = new Blob([buf]);

/* Upload on catbox, litterbox and 0x0 */
const catboxUrl = catbox(blob, filename);
const litterboxUrl = litterbox(blob, filename);
const zeroX0Url = zeroX0x(blob, filename);
```
