import { format } from "date-fns";
const axios = require("axios");
import currencies from "../data/currencies.json";

export async function api(_path = "") {
  const [path] = _path.split("?");

  if (path.length === 0) {
    return Promise.reject(new Error("API path is required"));
  }

  if (path !== "/latest") {
    return Promise.reject(new Error("Invalid API path"));
  }

  const url = `https://api.exchangerate.host${_path}`;

  return await axios.get(url);
}
