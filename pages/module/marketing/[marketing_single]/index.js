import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";

import { Edit, FeedOutlined, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import MarketingStatus from "../../../../components/modules/marketing/MarketingStatus";
import { useEffect } from "react";
import axiosInstance from "../../../../src/axiosAPi";
import SingleMarketing from "../../../../components/modules/marketing/singleMarketing";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { CalendarMonth, Tag, OfflineBoltOutlined } from "@mui/icons-material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const applications = [
  {
    applicant: {
      name: "New LinkedIn Campaign",
      leader: "@newcadet",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    tasks: "4",
    href: "#",
  },
  {
    applicant: {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Ted Fox",
      email: "ted.fox@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
];

const MarketingSingleView = ({ strategy, query }) => {
  console.log(query);
  const [marketing, setMarketing] = useState([]);

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index", refresh_token);
      getMarketingData();
      console.log(localStorage.getItem("startup_key"));
    }
  }, []);
  const getMarketingData = () => {
    try {
      axiosInstance
        .get("marketing/startup/get-marketing", {
          params: {
            key: query.marketing_single,
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setMarketing(response.data);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="edit-strategy-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white">
          <div className="modal-action flex flex-col">
            <h1 className="text-xl font-semibold my-4 text-center m-2">
              Submit and close this strategy
            </h1>
            <Box
              className="mt-4"
              sx={{
                maxWidth: "100%",
              }}
            >
              <TextField
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                label="Strategy outcomes"
                multiline
                minRows={4}
              />
            </Box>
            <Box className="mt-4">
              <TextField label="Metrics met" id="fullWidth" />
            </Box>
            <div className="max-w-xl m-4">
              <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="font-medium text-gray-600">
                    Drop result documents , or
                    <span className="text-blue-600 underline mx-1">browse</span>
                  </span>
                </span>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>
            <label
              htmlFor="edit-strategy-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <label
              type="button"
              htmlFor="edit-strategy-modal"
              className="btn mt-2 border-0 bg-indigo-500 text-white"
            >
              Submit and Close Strategy
            </label>
          </div>
        </div>
      </div>

      <div className="w-full p-2 lg:p-4">
        <div className="mt-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            {marketing?.details?.marketingTitle}
          </h1>
          <Link to="" type="button" className="btn btn-sm">
            In Progress
          </Link>
        </div>
        <p>
        <span class="bg-gray-100 text-sm font-medium inline-flex items-center px-2.5 py-1.5 mb-1 rounded-full mr-2 dark:bg-gray-100 dark:text-gray-500">
            {marketing?.details?.strategy}
        </span>
        <span class="bg-gray-100 gap-1 text-sm font-medium inline-flex items-center px-2.5 py-1.5 rounded-full mr-2 dark:bg-gray-100 dark:text-gray-500">
            @{marketing?.details?.marketingLeader}
        </span>
        </p>
        <span class="bg-gray-100 gap-1 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-100 dark:text-indigo-500">
            <CalendarMonth />
            {marketing?.details?.startDate}
        </span>
        <span class="bg-gray-100 gap-1 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-100 dark:text-indigo-500">
            <OfflineBoltOutlined />
            {marketing?.details?.points} Volts
        </span>
        <span class="bg-gray-100 gap-1 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-100 dark:text-pink-500">
            <Tag />
            {marketing?.details?.social_tag}
        </span>
        <div className="grid grid-cols-1">
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Description <span className="p-1 text-sm text-gray-500 bg-gray-100">{marketing?.details?.description}</span></h4>
          </div>
          <div className="w-full flex items-center gap-3 py-2">
            <label
              htmlFor="edit-strategy-modal"
              type="button"
              className="gap-2 inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-indigo-100 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowUpwardIcon />
              Submit and Close Strategy
            </label>
            <label
              htmlFor="edit-strategy-modal"
              type="button"
              className="gap-2 inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-green-600 bg-green-100 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Edit />
              Edit Campaign
            </label>
          </div>

          <SingleMarketing data={marketing} />
        </div>
      </div>
    </>
  );
};

export default MarketingSingleView;

MarketingSingleView.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

MarketingSingleView.getInitialProps = async ({ query }) => {
  return { query };
};
