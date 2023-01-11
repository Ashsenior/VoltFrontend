import React from "react";
import Router, { useRouter } from "next/router";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../../src/axiosAPi";
import axios from "axios";
import GithubAuthContext from "../../../context/GithubAuthContext";
import AssistantIcon from "@mui/icons-material/Assistant";
import MarketingDrawer from "../marketing/MarketingDrawer";

const ProductHome = ({ products }) => {
  const context = useContext(GithubAuthContext);
  const [authorizeData, setAuthorizeData] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [authorize, setAuthorize] = useState(false);
  const [startup_key, setStartupKey] = useState("");
  const [username, setUsername] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { query } = useRouter();

  console.log(context);

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setAuthenticated(true);
      if (typeof window !== "undefined") {
        setStartupKey(localStorage.getItem("startup_key"));
      }
    }
  }, [authorize]);

  // useEffect(() => {
  // }, [authorize, authenticated]);

  const getProductAuthenticationKeys = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/product/startup/github-authorize", {
          params: {
            username: localStorage.getItem("username"),
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setAuthorizeData(response.data);
            localStorage.setItem("client_id", response.data.client_id);
            localStorage.setItem("state", response.data.state);
            router.push({
              pathname: `https://github.com/login/oauth/authorize`,
              query: {
                client_id: response.data.client_id,
                redirect_uri: "http://localhost:3000/module/product",
                state: response.data.state,
              },
            });
          }
        });
    } catch (error) {
      throw error;
    }
  };

  const handleGitHubAuthentication = () => {
    if (authenticated) {
      getProductAuthenticationKeys();
    }
  };

  if (query?.code && query?.state) {
    if (query?.state == context?.state) {
      try {
        axiosInstance
          .get(
            `http://127.0.0.1:8000/product/startup/get-access-token?code=${query?.code}&startup_key=${startup_key}`
          )
          .then(() => {
            localStorage.removeItem("state");
            localStorage.removeItem("client_id");
            setAuthorize(true);
          });
      } catch (error) {
        throw error;
      }
    }
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="relative pb-5 sm:pb-0 mb-10">
        <div className="md:flex md:items-center md:justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4 ml-4">
            Strategy for Product Models
          </h3>
          <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-10">
            {authorize ? null : (
              <button
                type="button"
                className="inline-flex items-center  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => handleGitHubAuthentication()}
              >
                Authenticate with Github
              </button>
            )}
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => router.push("product/create_product/NewProduct")}
            >
              Create new Strategy
            </button>
            <button
              onClick={handleOpen}
              type="button"
              className="rounded-full bg-gray-900 ml-2 px-4 py-2 hover:bg-gray-700 text-purple-400 justify-center items-center"
            >
              <AssistantIcon />{" "}
              <small className="text-gray-200 font-medium ">
                Volt Assistant
              </small>
            </button>
            <div className=" flex md:mt-0 md:absolute md:right-5">
              <MarketingDrawer handleClose={handleClose} open={open} />
            </div>
          </div>
        </div>
      </div>
      <ProductCard products={products} />
    </>
  );
};

export default ProductHome;
