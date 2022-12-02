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
import GradeIcon from '@mui/icons-material/Grade';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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
    <div className="bg-white">
      <div class="flex flex-wrap mt-5 p-2">
        <div class="px-4 md:w-2/3 w-full bg-white">
          <div class="flex flex-wrap items-center justify-start ">
            <h1 class="text-md font-medium title-font text-gray-900 mb-2 text-left">
              Your Startups
            </h1>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 mb-5">
            <StartupCard startup={your_startups} />
            <div className="mt-2 bg-indigo-50">
              <div className="w-12/12 flex items-center justify-between mx-auto px-4 py-2">
                <h1 className="text-lg text-indigo-500 font-semibold">Any new idea💡?</h1>
                <button
                  onClick={() => Router.push("/create_startup")}
                  type="button"
                  className="inline-flex items-center px-2 py-2 border border-transparent text-md font-small rounded-md shadow-sm text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create New Startup
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-start">
            <h1 class="text-md font-medium title-font text-gray-900 mb-2 text-left">
              All Startups
            </h1>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
            <PublicStartupCard startup={all_startups} />
          </div>
        </div>
        <div class="p-4 md:w-1/3 w-full bg-black rounded-lg">
          <div class="flex flex-wrap justify-start">
            <p>
              <a href="#" className="text-lg px-4 font-medium title-font text-white mb-2 inline-flex items-right">Public</a>
              <a href="#" className="text-lg px-4 font-medium title-font text-white mb-2 inline-flex items-right">Private</a>
              <a href="#" className="text-lg px-4 font-medium title-font text-white mb-2 inline-flex items-right">Starred <GradeIcon className="inline-flex ml-1" /></a>
            </p>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
            <div class="py-2">
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  <GradeIcon className="ml-3 text-yellow-300" />
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets <span className="ml-3 text-yellow-300">5🔔</span> </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  <GradeIcon className="ml-3 text-yellow-300" />
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  <GradeIcon className="ml-3 text-yellow-300" />
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-300 mr-2">
                  
                </p>
                <p class="text-gray-300">
                  <span className="text-indigo-300">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
            </div>
            <div class="flex flex-wrap items-right justify-center">
              <button
                onClick={() => Router.push("/create_startup")}
                type="button"
                className="text-lg p-1 font-medium title-font text-indigo-300 mb-2 inline-flex items-right text-base font-medium rounded-md text-white hover:bg-indigo-700 "
              >
                Add new Idea💡
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Home;
