import axios from "axios";
const URL = 'https://jsonplaceholder.typicode.com';

export const post = async (apiURL, data, params) => {
  let token = localStorage.getItem("redloftoken");

  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      params,
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
  });
};

export const noAuthPost = async (apiURL, data) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
};
export const postForm = async (apiURL, data) => {
  let token = localStorage.getItem("redloftoken");

  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const postLogin = async (apiURL, data) => {
  return axios.post(`${URL}/${apiURL}`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const get = async (apiURL, params) => {
  let token = localStorage.getItem("redloftoken");

  return axios.get(`${URL}/${apiURL}`, {
    params,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: "Bearer " + token,
    },
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