import axios from "axios";

export function requestGetShop(category) {
  console.log("category", category);
  return axios.request({
    method: "get",
    url: "https://dcslob.nl/m_api/index.php?t=werk&c=" + category + "&s=1",
  });
}
