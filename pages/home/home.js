import React, { useState } from "react";
import Router from "next/router";
import { FiSearch } from "react-icons/fi";
import StartupCard from "./StartupCard";
import BaseLayout from "src/layouts/BaseLayout";
import Head from "next/head";
import { get } from "../../config/axiosClient";
import { useEffect } from "react";
import { Button, Box, Grid, Tabs, Tab } from "@mui/material";
import axiosInstance from "../../src/axiosAPi";
import ComplexStatisticsCard from "../../components/content-module/card";
import PublicStartupCard from "./PublicStartupCard";
import GradeIcon from '@mui/icons-material/Grade';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

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
      <div class="flex flex-wrap">
        <div className="md:w-2/3 p-4 w-full bg-white">
        <div class="flex flex-wrap items-center justify-start ">
          <h1 class="text-md font-medium title-font text-gray-900 mb-2 text-left">
            Your Startups
          </h1>
        </div>
        {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 mb-5">
          <StartupCard startup={your_startups} />
              <button
              onClick={() => Router.push("/create_startup")}
              type="button"
              style={{width:"100%"}}
              className="text-lg p-2 font-medium justify-center title-font text-white font-medium text-white bg-indigo-400 "
            >
              Create new startup
            </button>
        </div>
        <div class="flex flex-wrap items-center justify-start">
          <h1 class="text-md font-medium title-font text-gray-900 mb-2 text-left">
            All Startups
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          <PublicStartupCard startup={all_startups} />
        </div>
        </div>
        <div style={{height:"100vh"}} class="md:w-1/3 w-full bg-gray-600">
          <div class="flex flex-wrap justify-start px-4 py-2 bg-gray-700">
            <p>
              <a href="#" className="text-lg px-4 font-medium title-font text-white inline-flex items-right">Public</a>
              <a href="#" className="text-lg px-4 font-medium title-font text-white inline-flex items-right">Private</a>
              <a href="#" className="text-lg px-4 font-medium title-font text-indigo-300 inline-flex items-right">Starred <GradeIcon className="inline-flex ml-1" /></a>
            </p>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 p-2">
            <div class="">
            <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-200 mr-2">
                  <GradeIcon className="ml-3 text-yellow-400" />
                </p>
                <p class="text-gray-200">
                  <span className="text-indigo-200">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-200 mr-2">
                  <GradeIcon className="ml-3 text-yellow-400" />
                </p>
                <p class="text-gray-200">
                  <span className="text-indigo-200">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
              <a
                href="#"
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <p class="text-gray-200 mr-2">
                  <GradeIcon className="ml-3 text-gray-400" />
                </p>
                <p class="text-gray-200">
                  <span className="text-indigo-200">Online Store for pets </span>
                  <p>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</p>
                </p>
              </a>
            </div>
            <div class="flex flex-wrap items-right justify-center">
              <button
                onClick={() => Router.push("/create_startup")}
                type="button"
                style={{width:"100%"}}
                className="text-lg p-1 font-medium justify-center title-font text-indigo-900 mb-2 inline-flex items-right font-medium text-white bg-indigo-400 "
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
