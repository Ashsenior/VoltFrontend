import { get } from "./axiosClient";

export const getStartups = async () => {
  return new Promise((resolve, reject) => {
    get("api/startups")
      .then((res) => {
        resolve(res.data.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

