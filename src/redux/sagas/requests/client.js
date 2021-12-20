import axios from "axios";

export function requestGetClient() {
  let apiKey = "06fab0bfa8f045750730a33bccec487387af7f06d41472dc7f62c372";

  return axios.request({
    method: "get",
    url: "https://api.ipdata.co?api-key=" + apiKey,
  });
}
