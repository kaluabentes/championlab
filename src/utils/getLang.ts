import { DEFAULT_LANG } from "~/config/constants";

function getLang() {
  let defaultLang = localStorage.getItem("lang");

  if (!defaultLang) {
    localStorage.setItem("lang", DEFAULT_LANG);
    defaultLang = DEFAULT_LANG;
  }

  return defaultLang;
}

export default getLang;
