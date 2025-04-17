import { fetchText, type UploadOptions } from "./src/utils";

/**
 * Uploads a file to 0x0.st anonymously.
 * @param input - The file blob to upload.
 * @param filename - The name to assign to the uploaded file.
 * @param options.secret - Generate a hard-to-guess URL.
 * @param options.expires - Expiration time for the upload (in hours or ms since epoch).
 * @returns The resulting URL.
 */
export const zeroX0 = async (
  input: Blob,
  filename: string,
  options: UploadOptions = {}
): Promise<string> => {
  const form = new FormData();
  form.append("file", input, filename);

  if (options.secret) form.append("secret", "");
  if (options.expires) form.append("expires", options.expires.toString());

  return fetchText("https://0x0.st", form);
};

/**
 * Uploads a file or a remote URL to Catbox anonymously.
 * @param input - The file blob or a URL string.
 * @param filename - The name to assign to the uploaded file.
 * @param _options - Ignored.
 * @returns The resulting URL.
 */
export const catbox = async (
  input: Blob | string,
  filename: string,
  _options: UploadOptions = {}
): Promise<string> => {
  const form = new FormData();

  if (typeof input === "string") {
    form.append("reqtype", "urlupload");
    form.append("url", input);
  } else {
    form.append("reqtype", "fileupload");
    form.append("fileToUpload", input, filename);
  }

  return fetchText("https://catbox.moe/user/api.php", form);
};

/**
 * Uploads a file to Litterbox anonymously with a set expiration.
 * @param input - The file blob to upload.
 * @param filename - The name to assign to the uploaded file.
 * @param options.time - File expiration time (default: `24h`).
 * @returns The resulting URL.
 */
export const litterbox = async (
  input: Blob,
  filename: string,
  options: UploadOptions = {}
): Promise<string> => {
  const form = new FormData();
  form.append("reqtype", "fileupload");
  form.append("fileToUpload", input, filename);
  form.append("time", options.time || "24h");

  return fetchText("https://litterbox.catbox.moe/resources/internals/api.php", form);
};
