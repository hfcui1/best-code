export function defineUrlHander(urlHanlder: UrlHandler) {
  return urlHanlder;
}

interface UrlHandler {
  initUrl: () => Promise<boolean>;
  urlChangeHanlder: (url: URL) => Promise<string>;
}
