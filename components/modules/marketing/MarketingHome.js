import React from "react";
import Router from "next/router";

import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MarketingStatus from "./MarketingStatus";
import { useState } from "react";
import MarketingDrawer from "./MarketingDrawer";
import Task from "./Task";

import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import MarketingSocialCards from "./marketingSocialCards";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssistantIcon from "@mui/icons-material/Assistant";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import axiosInstance from "../../../src/axiosAPi";

const MarketingHome = ({ data }) => {
  const tabs = [
    { name: "In Progress", href: "#", current: false },
    { name: "Completed", href: "#", current: false },
    { name: "Closed", href: "#", current: false },
    { name: "Task", href: "#", current: true },
    { name: "Socials", href: "#", current: false },
  ];

  const social_post = [
    {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      link: "facebook.com",
      reaction: "3.5k",
      comments: "200",
      shared: "452",
    },
    {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      link: "facebook.com",
      reaction: "3.5k",
      comments: "200",
      shared: "452",
    },
    {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      link: "facebook.com",
      reaction: "3.5k",
      comments: "200",
      shared: "452",
    },
  ];

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [recommendationData, setRecommendationData] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    try {
      axiosInstance
        .get("marketing/startup/get-recommendations", {
          params: {
            cat: "S",
            key: "Dw7XqbPhZf",
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response.data);
            setRecommendationData(response.data);
            setOpen(true);
          }
        });
    } catch (error) {
      throw error;
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:flex bg-gray-800">
      <div className="w-full md:w-3/4 relative pb-8 sm:pb-0 xl:px-0 ">
        <div className="md:flex flex-row md:items-center md:justify-between px-4 py-1">
          <h3 className="text-lg mt-4 leading-6 font-medium text-gray-200">
            Marketing Campaigns / Strategies
            <button
              onClick={handleOpen}
              type="button"
              className="rounded-full bg-gray-900 ml-2 px-4 py-2 hover:bg-gray-700 text-purple-400 justify-center items-center"
            >
              <AssistantIcon />{" "}
              <small className="text-gray-400">Volt Assistant</small>
            </button>
          </h3>
          <div className=" flex md:mt-0 md:absolute md:right-5">  
            <MarketingDrawer handleClose={handleClose} open={open} data={recommendationData} />
          </div>
        </div>
  
        <div className="mt-1 xl:px-4">
          <p className="flex">
            <div className="p-2 w-1/3">
              <button
                type="button"
                className="inline-flex w-full gap-4 items-center bg-gray-900 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-500 focus:outline-none "
              >
                <InstagramIcon className="mr-3 text-pink-500" />
                Authorize Instagram
              </button>
            </div>
            <div className="p-2 w-1/3">
              <button
                type="button"
                className="inline-flex w-full gap-4 items-center bg-gray-900 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-500 focus:outline-none "
              >
                <YouTubeIcon className="mr-3 text-red-500" />
                Authorize YouTube
              </button>
            </div>
<<<<<<< HEAD
=======
            <div className="p-2 w-1/3">
              <button
                type="button"
                className="inline-flex w-full gap-4 items-center bg-gray-700 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-gray-50 focus:outline-none"
              >
                <LinkedInIcon className="mr-3 text-blue-500 font-medium" />
                Authorize LinkedIn
              </button>
            </div>
>>>>>>> 58e6a2dad42e7881b568dc5438bce07442bd9f98
          </p>
          <MarketingStatus data={data} />
        </div>
      </div>
<<<<<<< HEAD
      <div className="w-full bg-white md:w-1/4 p-2" style={{ minHeight: "100%" }}>
=======
      <div
        className="w-full bg-white md:w-1/3 p-2"
        style={{ minHeight: "100%" }}
      >
>>>>>>> 58e6a2dad42e7881b568dc5438bce07442bd9f98
        <p className=" text-base text-gray-500 px-2 pb-4 pt-2 items-center gap-2 rounded-xl font-semibold flex p-1 ">
          <VerifiedOutlinedIcon />
          SOCIAL POSTS 3
        </p>
        {social_post?.map((item, index) => (
          <MarketingSocialCards key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketingHome;
