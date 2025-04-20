# @letruxux/file-upload

Zero dependencies package to upload anonymous files to different hosting sites easily.

> [!IMPORTANT]  
> Please donate and support the owners of the websites you use if you can. And obviously don't abuse any of the services provided.

## Supported hosts

| Website                                   | Max file size | Expiry                                              |
| ----------------------------------------- | ------------- | --------------------------------------------------- |
| [catbox](https://catbox.moe)              | 200MB         | **No expiry**, all files are permanently on catbox. |
| [0x0](https://0x0.st)                     | 512MB         | **30 days** to **a year** (more info on website)    |
| [litterbox](https://litterbox.catbox.moe) | 1GB           | **1 hour** to **3 days** (user choice)              |

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
const catboxUrl = await catbox(blob, filename);
const litterboxUrl = await litterbox(blob, filename);
const zeroX0Url = await zeroX0(blob, filename);
```
