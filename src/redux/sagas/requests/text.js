import axios from "axios";

export function requestGetText() {
  return axios.request({
    method: "get",
    url: "https://localhost/api/apps/marsha/public/index.php?t=tekst",
  });
}
