import getLang from "~/utils/getLang";
import api from "./api";

export function getAll() {
  return api.get(`/${getLang()}/champion.json`);
}
