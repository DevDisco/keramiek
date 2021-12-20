import axios from "axios";

export function requestGetItem(id) {
  console.log("id", id);
  return axios.request({
    method: "get",
    //url: "https://localhost/api/apps/marsha/public/index.php?t=werk&id=" + id,
    url: "https://dcslob.nl/m_api/index.php?t=werk&id=" + id,
  });
}
