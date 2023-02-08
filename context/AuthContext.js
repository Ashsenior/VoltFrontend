import React, { useState, useEffect, createContext } from "react";
import Router from "next/router";
import axiosInstance from "src/axiosAPi";
import { useContext } from "react";
import { Context } from "./ContextProvider";
import {
  ErrorToast,
  SuccessToast,
} from "../components/common/toasts/toast-helpers";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const toastContext = useContext(Context)?.Toast;

  const [user, setUser] = useState("null");

  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const base_url = "http://127.0.0.1:8000";

  const login = async (username, password) => {
    try {
      const res = await fetch(`${base_url}/auth/jwt/create/`, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      ErrorToast("Invalid Credentials", toastContext);

      if (res !== undefined) {
        if (res.status === 200) {
          SuccessToast("Logged in Successfully", toastContext);

          if (typeof window !== "undefined") {
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);
            setUser(username);
            localStorage.setItem("username", username);
            axiosInstance.defaults.headers["Authorization"] =
              "JWT " + data.access;
            await Router.push("/home");
          }
        }
      }
    } catch (error) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  const register = async (username, email, password, first_name, last_name) => {
    try {
      const res = await fetch(`${base_url}/auth/users/`, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.status === 201) {
        await login(username, password);
      }
    } catch (error) {
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, isAuthenticated, login, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
