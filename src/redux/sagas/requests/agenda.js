import axios from "axios";

export function requestGetAgenda() {
  return axios.request({
    method: "get",
    url: "https://localhost/api/apps/marsha/public/index.php?t=agenda",
    //url: "https://dcslob.nl/m_api/index.php?t=werk&id=" + id,
  });
}
