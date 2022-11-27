import { defineUrlHander } from "../streams/defineUrlHandler";

export const urlHandler = defineUrlHander({
  async initUrl() {
    return true;
  },
  async urlChangeHanlder() {
    return "url";
  },
});
