/**
 * Options for uploading files.
 */
export type UploadOptions = {
  /**
   * Expiration time for the upload (in hours or ms since epoch).
   * Supported by: zeroX0
   */
  expires?: number | string;

  /**
   * Generate a hard-to-guess URL.
   * Supported by: zeroX0
   */
  secret?: boolean;

  /**
   * Time before the file expires.
   * Supported values: "1h", "12h", "24h", "72h"
   * Supported by: litterbox
   */
  time?: "1h" | "12h" | "24h" | "72h";
};

export const fetchText = async (endpoint: string, form: FormData): Promise<string> => {
  console.log({ endpoint, form: Object.fromEntries(form.entries()) });

  const res = await fetch(endpoint, {
    method: "POST",
    body: form,
  });
  if (!res.ok) throw new Error(`Upload failed: ${res.status} ${res.statusText}`);
  return (await res.text()).trim();
};
