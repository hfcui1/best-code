import { urlHandler as spotUrlHanlder } from "../spot/urlHanlder";
import { urlHandler as contractUrlHanlder } from "../contract/urlHandler";

export async function resolveUrl() {
  await spotUrlHanlder.initUrl();
  await contractUrlHanlder.initUrl();
}
