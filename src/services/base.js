import Axios from "axios";

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
