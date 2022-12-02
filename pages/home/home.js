import React, { useState } from "react";
import Router from "next/router";
import { FiSearch } from "react-icons/fi";
import StartupCard from "./StartupCard";
import BaseLayout from "src/layouts/BaseLayout";
import Head from "next/head";
import { get } from "../../config/axiosClient";
import { useEffect } from "react";
import { Button, Container } from "@mui/material";
import axiosInstance from "../../src/axiosAPi";
import PublicStartupCard from "./PublicStartupCard";

const Home = () => {
  const [your_startups, setYourStartups] = useState([]);
  const [all_startups, setAllStartups] = useState([]);

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index ", refresh_token);
      getEnrolledStatus();
    }
  }, []);
  const getEnrolledStatus = () => {
    try {
      axiosInstance
        .get("/user/get-startups/", {
          params: { username: localStorage.getItem("username") },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setYourStartups(response.data?.your_startups);
            setAllStartups(response.data?.all_startups);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div class="flex flex-wrap -m-4 mt-10 mx-2">
        <div class="p-4 md:w-2/3 w-full">
          <div class="flex flex-wrap items-center justify-start ">
            <h1 class="text-2xl font-medium title-font text-gray-900 mb-2 text-left">
              Your Startups
            </h1>
            <div className="h-0.5 w-40 mx-2 bg-indigo-500 rounded-full mt-2"></div>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 mb-10">
            <StartupCard startup={your_startups} />
          </div>
          <div class="flex flex-wrap items-center justify-start">
            <h1 class="text-2xl font-medium title-font text-gray-900 mb-2 text-left">
              All Startups
            </h1>
            <div className="h-0.5 w-40 mx-2 bg-indigo-500 rounded-full mt-2"></div>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
            <PublicStartupCard startup={all_startups} />
          </div>
        </div>
        <div class="p-4 md:w-1/3 w-full">
          <div class="flex flex-wrap items-center justify-start">
            <h1 class="text-2xl font-medium title-font text-gray-900 mb-2 text-left">
              Idea💡
            </h1>
            <div className="h-0.5 w-20 mx-2 bg-indigo-500 rounded-full mt-2"></div>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
            <div class="py-2">
              <a
                href="#"
                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <img
                  class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                  <span class="font-bold" href="#">
                    Sara Salah
                  </span>{" "}
                  replied on the{" "}
                  <span class="text-blue-500 hover:underline" href="#">
                    Upload Image
                  </span>{" "}
                  artical . 2m
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <img
                  class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="avatar"
                />
                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                  <span class="font-bold" href="#">
                    Slick Net
                  </span>{" "}
                  start following you . 45m
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <img
                  class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                  src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                  <span class="font-bold" href="#">
                    Jane Doe
                  </span>{" "}
                  Like Your reply on{" "}
                  <span class="text-blue-500 hover:underline" href="#">
                    Test with TDD
                  </span>{" "}
                  artical . 1h
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                  alt="avatar"
                />
                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                  <span class="font-bold" href="#">
                    Abigail Bennett
                  </span>{" "}
                  start following you . 3h
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Home;
