import axios from 'axios';

const token = (typeof window !== "undefined")?localStorage.getItem("access_token"):"none";
const refresh_token = (typeof window !== "undefined")?localStorage.getItem("refresh_token"):"none";

const axiosInstance = axios.create({
    // http://127.0.0.1:8000/
    // https://starticfieldapi.herokuapp.com/
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 18000,
    headers: {
        'Authorization': "JWT " + token,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});
axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;
      
      if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
          console.log(token);
          console.log(refresh_token);

          return axiosInstance
              .post('/token/refresh/', {refresh: refresh_token})
              .then((response) => {
                    if (response !== undefined) {
                        if (response.status === 200) {
                            if (typeof window !== "undefined") {
                                console.log(data);
                                localStorage.setItem('access_token', response.data.access);
                                localStorage.setItem('refresh_token', response.data.refresh);
                                localStorage.setItem('username', username);
                                axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                                originalRequest.headers['Authorization'] = "JWT " + response.data.access;
                                return axiosInstance(originalRequest);
                            }
                        }
                    }
                    else {
                        setMessage("Incorrect username or password!")
                    }
              })
              .catch(err => {
                  console.log(err)
              });
      }
      return Promise.reject(error);
  }
);
export default axiosInstance;