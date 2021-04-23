import axios from "axios";

const api = axios.create({
  baseURL: "http://ddragon.leagueoflegends.com/cdn/11.8.1/data/",
});

export default api;
