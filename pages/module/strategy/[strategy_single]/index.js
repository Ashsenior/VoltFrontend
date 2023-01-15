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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FeedOutlined, PostAddOutlined, ShoppingCart } from "@mui/icons-material";
import SidebarLayout from "src/layouts/SidebarLayout";
import { CalendarMonth, Tag, OfflineBoltOutlined } from "@mui/icons-material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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

const StrategiesSingleView = ({ strategy }) => {
  console.log(strategy)
  return (
    <>
      <div className="w-full p-2 lg:p-4">
        <div className="mt-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold">
            Title of the Strategy
          </h1>
          <Link to="" type="button" className="btn btn-sm">
            In Progress
          </Link>
        </div>
        <p>
        <span class="bg-gray-100 text-sm font-medium inline-flex items-center px-2.5 py-1.5 mb-1 rounded-full mr-2 dark:bg-gray-100 dark:text-gray-500">
            Business Model
        </span>
        <span class="bg-gray-100 gap-1 text-sm font-medium inline-flex items-center px-2.5 py-1.5 rounded-full mr-2 dark:bg-gray-100 dark:text-gray-500">
            @ashsenior
        </span>
        </p>
        <span class="bg-gray-100 gap-1 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-100 dark:text-indigo-500">
            <OfflineBoltOutlined />
            120 Volts
        </span>
        <div className="grid grid-cols-1">
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Description <span className="p-1 text-sm text-gray-500 bg-gray-100">{strategy?.details?.description}</span></h4>
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
              Edit Strategy
            </label>
          </div>
        </div>
        <div className="text-white mt-4 gap-4 flex">

          <div className="w-1/2">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <Typography className="bg-gray-600 shadow rounded-t-md p-4 flex flex-row gap-10 my-1 ">
                <button className="flex items-center justify-end gap-2  hover:text-indigo-300">
                  <ShoppingCart />
                  <p>3 Marketing</p>
                </button>
                <button className="flex items-center justify-end gap-2  hover:text-green-500">
                  <AddCircleOutlineIcon />
                  <p>Add new</p>
                </button>
              </Typography>
              <ul role="list" className="divide-y divide-gray-200">
                {applications.map((application) => (
                  <li key={application.applicant.email}>
                    <a
                      href={application.href}
                      className="block hover:bg-gray-50"
                    >
                      <div className="flex items-center px-4 py-4">
                        <div className="min-w-0 flex-1 flex items-center">
                          <div className="flex-shrink-0">
                            <ShoppingCart className="text-gray-500 bg-gray-100" />
                          </div>
                          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                              <p className="text-sm font-medium text-indigo-600 truncate">
                                {application.applicant.name}
                              </p>
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                @ashsenior
                              </p>
                            </div>
                            <div className="hidden md:block">
                              <div>
                                <p className="text-sm text-gray-900">
                                  Start Date:{" "}
                                  <time dateTime={application.date}>
                                    {application.dateFull}
                                  </time>
                                </p>
                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                  <e className="px-2 py bg-green-100 text-green-700 text-white rounded-2xl mx-2">
                                    3 tasks
                                  </e>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-1/2">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <Typography className="bg-gray-600 shadow rounded-t-md p-4 flex flex-row gap-10 my-1 ">
                <button className="flex items-center justify-end gap-2  hover:text-indigo-300">
                  <PostAddOutlined />
                  <p>3 Research</p>
                </button>
                <button className="flex items-center justify-end gap-2  hover:text-green-500">
                  <AddCircleOutlineIcon />
                  <p>Add new</p>
                </button>
              </Typography>
              <ul role="list" className="divide-y divide-gray-200">
                {applications.map((application) => (
                  <li key={application.applicant.email}>
                    <a
                      href={application.href}
                      className="block hover:bg-gray-50"
                    >
                      <div className="flex items-center px-4 py-4">
                        <div className="min-w-0 flex-1 flex items-center">
                          <div className="flex-shrink-0">
                            <PostAddOutlined className="text-gray-500 bg-gray-100" />
                          </div>
                          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                              <p className="text-sm font-medium text-indigo-600 truncate">
                                {application.applicant.name}
                              </p>
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                @ashsenior
                              </p>
                            </div>
                            <div className="hidden md:block">
                              <div>
                                <p className="text-sm text-gray-900">
                                  Start Date:{" "}
                                  <time dateTime={application.date}>
                                    {application.dateFull}
                                  </time>
                                </p>
                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                  <e className="px-2 py bg-green-100 text-green-700 text-white rounded-2xl mx-2">
                                    3 tasks
                                  </e>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

StrategiesSingleView.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
export default StrategiesSingleView;
