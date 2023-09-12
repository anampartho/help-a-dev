import axios from "axios";

export const fetchPassword = (url: string) => {
  return axios.get(url);
};
