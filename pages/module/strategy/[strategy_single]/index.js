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
import {
  Add,
  FeedOutlined,
  PostAddOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import SidebarLayout from "src/layouts/SidebarLayout";
import { CalendarMonth, Tag, OfflineBoltOutlined } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect } from "react";
import axiosInstance from "../../../../src/axiosAPi";
import { useContext } from "react";
import StartupContext from "../../../../context/StartupContext";
import CreateSubStrategyModal from "../../../../components/modules/strategy/createSubStrategyModal";

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

const StrategiesSingleView = ({ query }) => {
  const context = useContext(StartupContext);
  const [strategy, setStrategy] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index ", refresh_token);
      getEnrolledStatus();
      console.log(localStorage.getItem("startup_key"));
    }
  }, []);
  console.log(strategy);
  const getEnrolledStatus = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/strategy/startup/get-strategy", {
          params: {
            slug: query?.strategy_single,
            startup_key: context?.startup_key,
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setStrategy(response.data);
            // localStorage.setItem(
            //   "startup_key",
            //   response.data.your_startups?.key
            // );
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <div className="w-full p-2 lg:p-4">
        <div className="mt-6 flex items-center gap-4">
          <CreateSubStrategyModal
            slug={query?.strategy_single}
            open={open}
            handleClose={handleClose}
          />
          <h1 className="text-xl font-semibold">
            {strategy?.strategy?.strategy}
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
            {strategy?.strategy?.strategyLeader}
          </span>
        </p>
        <span class="bg-gray-100 gap-1 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-100 dark:text-indigo-500">
          <OfflineBoltOutlined />
          {strategy?.strategy?.points}
        </span>
        <div className="grid grid-cols-1">
          <div className="mt-6">
            <h4 className="text-lg font-semibold">
              Description{" "}
              <span className="p-1 text-sm text-gray-500 bg-gray-100">
                {strategy?.strategy?.description}
              </span>
            </h4>
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
            <label
              onClick={handleOpen}
              htmlFor="edit-strategy-modal"
              type="button"
              className="gap-2 inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-blue-100 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Add />
              Add Strategy
            </label>
          </div>
        </div>
        <div className="text-white mt-4 gap-4 flex">
          <div className="w-1/2">
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <Typography className="bg-gray-600 shadow rounded-t-md p-4 flex flex-row gap-10 my-1 ">
                <button className="flex items-center justify-end gap-2  hover:text-indigo-300">
                  <ShoppingCart />
                  <p>{strategy?.sub_strategies?.marketing?.length} Marketing</p>
                </button>
              </Typography>
              <ul role="list" className="divide-y divide-gray-200">
                {strategy?.sub_strategies?.marketing?.map((application) => (
                  <li key={strategy.sub_strategies.email}>
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
                                {application?.marketingTitle}
                              </p>
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                {application?.marketingLeader}
                              </p>
                            </div>
                            <div className="hidden md:block">
                              <div>
                                <p className="text-sm text-gray-900">
                                  Start Date:{" "}
                                  <time dateTime={application.startDate}>
                                    {application?.startDate}
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
                  <p>{strategy?.sub_strategies?.research?.length} Research</p>
                </button>
              </Typography>
              <ul role="list" className="divide-y divide-gray-200">
                {strategy?.sub_strategies?.research?.map((application) => (
                  <li key={application?.applicant?.email}>
                    <a
                      href={application?.href}
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
                                {application?.task}
                              </p>
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                {application?.assigned_to}
                              </p>
                            </div>
                            <div className="hidden md:block">
                              <div>
                                <p className="text-sm text-gray-900">
                                  Start Date:{" "}
                                  <time dateTime={application?.startDate}>
                                    {application?.startDate}
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

StrategiesSingleView.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);
export default StrategiesSingleView;

StrategiesSingleView.getInitialProps = async ({ query }) => {
  return { query };
};
