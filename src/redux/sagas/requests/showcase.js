import axios from "axios";

export function requestGetShowcase() {
  return axios.request({
    method: "get",
    //url: "https://localhost/api/apps/marsha/public/index.php?t=werk",
    url: "https://dcslob.nl/m_api/index.php?t=werk",
  });
}
