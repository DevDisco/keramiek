import axios from "axios";

export function requestGetCategory(category) {
  console.log("category", category);
  return axios.request({
    method: "get",
    url: "https://dcslob.nl/m_api/index.php?t=werk&c=" + category,
  });
}
