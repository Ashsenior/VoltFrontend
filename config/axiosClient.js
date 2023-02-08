import axios from "axios";
import axiosInstance from "../src/axiosAPi";
import { API_URL } from "./base";
const URL = API_URL;

export const post = async (apiURL, data) => {
  return axios.post(`${URL}/${apiURL}`, data, {});
};

export const noAuthPost = async (apiURL, data) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
export const postForm = async (apiURL, data) => {
  return axios.post(`${URL}/${apiURL}`, data, {});
};

export const postLogin = async (apiURL, data) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const get = async (apiURL, params) => {
  return axiosInstance.get(`${URL}/${apiURL}`, {
    params,
  });
};

export const noAuthGet = async (apiURL, params) => {
  return axios.get(`${URL}/${apiURL}`);
};

export const put = async (apiURL, data) => {
  let token = localStorage.getItem("redloftoken");

  return axios.put(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteAxios = async (apiURL, params) => {
  let token = localStorage.getItem("redloftoken");

  return axios.delete(`${URL}/${apiURL}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};
