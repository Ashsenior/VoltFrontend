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
import HomeTabs from "./HomeTabs";
import Ideas from "./Ideas";
import TagIcon from '@mui/icons-material/Tag';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

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

  const [openTab, setOpenTab] = React.useState(1);
  const [openIdeaTab, setopenIdeaTab] = React.useState(1);

  return (
    <div className="bg-white">
      <div className="flex flex-wrap">
        <div className="md:w-2/3 w-full bg-white">
          <div className="flex-wrap flex bg-gray-700">
            <ul
              className="flex list-none px-2 flex-wrap py-2 flex-row"
              role="tablist"
            >
              <li className=" flex-auto text-center">
                <a
                  className={
                    "text-lg font-bold px-5 py-2 block leading-normal " +
                    (openTab === 1
                      ? "text-indigo-300"
                      : "text-gray-300")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <WorkOutlineIcon className="text-md" /> Startups
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-lg font-bold px-5 py-2 block leading-normal  " +
                    (openTab === 2
                      ? "text-indigo-300 "
                      : "text-gray-300")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <TagIcon className="text-md" /> Feed
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col break-words rounded-t-2xl bg-white w-full">
              <div className="px-2 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
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
                        style={{ width: "100%" }}
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
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <Ideas></Ideas>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div style={{ minHeight: "90vh", height: "100%" }} class="md:w-1/3 w-full bg-gray-700 ">
          <div class="flex flex-wrap justify-start px-4 py-2">
            <ul
                className="flex list-none flex-wrap flex-row"
                role="tablist"
              >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-md font-bold uppercase px-5 py-3 block leading-normal " +
                    (openIdeaTab === 1
                      ? "text-blue-300"
                      : "text-gray-100")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setopenIdeaTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Starred
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-md font-bold uppercase px-5 py-3 block leading-normal  " +
                    (openIdeaTab === 2
                      ? "text-blue-300 "
                      : "text-gray-300")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setopenIdeaTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Public
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-md font-bold uppercase px-5 py-3 block leading-normal " +
                    (openIdeaTab === 3
                      ? "text-blue-300"
                      : "text-gray-100")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setopenIdeaTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Private
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="h-0.5 w-40 bg-indigo-500 rounded-full mt-2"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 p-2 bg-gray-600 rounded-t-2xl">
            <div class="px-2 ">
              <a
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b hover:bg-gray-700 border-gray-700"
              >
                <p class="text-gray-200 mr-2">
                  <GradeIcon className="ml-3 text-yellow-400" />
                </p>
                <p class="text-gray-200">
                  <span className="text-indigo-200">Online Store for pets </span>
                  <e>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</e>
                </p>
              </a>
              <a
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b hover:bg-gray-700 border-gray-700"
              >
                <p class="text-gray-200 mr-2">
                  <GradeIcon className="ml-3 text-yellow-400" />
                </p>
                <p class="text-gray-200">
                  <span className="text-indigo-200">Online Store for pets </span>
                  <e>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</e>
                </p>
              </a>
              <a
                class="flex items-center py-3 -mx-2 transition-colors duration-300 transform border-b hover:bg-gray-700 border-gray-700"
              >
                <p class="text-gray-200 mr-2">
                  <GradeIcon className="ml-3 text-gray-400" />
                </p>
                <p class="text-gray-200">
                  <span className="text-indigo-200">Online Store for pets </span>
                  <e>The value for the textbox must be chosen from a predefined set of allowed values, e.g., a location field must contain a valid location name</e>
                </p>
              </a>
            </div>
            <div class="flex flex-wrap items-right justify-center">
              <button
                onClick={() => Router.push("/create_startup")}
                type="button"
                style={{ width: "100%" }}
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
