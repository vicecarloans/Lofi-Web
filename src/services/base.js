import Axios from "axios";

export function configureResponse() {
  console.log("Configure Response...");
  Axios.interceptors.response.use(
    function (response) {
      console.log("### Got Response ###");
      return response;
    },
    function (error) {
      console.error(`Oops...${error}`);
      if (error.response.status === 401) location.reload();
      return error;
    }
  );
}

export function assignToken(accessToken) {
  console.log("Assign Access Token");
  Axios.interceptors.request.use(
    function (config) {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    function (error) {
      console.log("Oops...Something went wrong");
      return error;
    }
  );
}

export async function getData(endpoint) {
  let res = await Axios.get(endpoint);
  return res.data;
}

export async function postData(endpoint, data = {}) {
  let res = await Axios.post(endpoint, data);
  return res.data;
}

export async function patchData(endpoint, data = {}) {
  let res = await Axios.patch(endpoint, data);
  return res.data;
}

export async function putData(endpoint, data = {}) {
  let res = await Axios.put(endpoint, data);
  return res.data;
}

export async function deleteData(endpoint) {
  let res = await Axios.delete(endpoint, data);
  return res.data;
}
