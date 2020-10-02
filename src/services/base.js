import Axios from "axios";
import React from "react";
import { Button, notification } from 'antd';

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => window.location.assign("/login")}>
      Login Now
    </Button>
  );
  notification.warn({
    message: 'Hmmm it seems like your session has expired',
    description:
      'No Sweat! Click the button below to reconnect again!',
    btn,
    key,
    onClose: close,
    duration: 0,
  });
};

export function configureResponse() {
  console.log("Configure Response...");
  Axios.interceptors.response.use(
    function (response) {
      console.log("### Got Response ###");
      return response;
    },
    function (error) {
      console.error(`Oops...${error}`);
      if (error.response.status === 401){
        openNotification();
      };
      return error;
    }
  );
}

export function assignToken() {
  console.log("Configure Request...");
  Axios.interceptors.request.use(
    async function (config) {
      const data = await fetch("/api/token", {method: "POST"});
      const { access_token } = await data.json();
      if(access_token){
        config.headers["Authorization"] = `Bearer ${access_token}`;
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
