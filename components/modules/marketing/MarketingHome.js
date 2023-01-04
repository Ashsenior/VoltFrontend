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

const MarketingHome = ({ data }) => {
  const tabs = [
    { name: "In Progress", href: "#", current: false },
    { name: "Completed", href: "#", current: false },
    { name: "Closed", href: "#", current: false },
    { name: "Task", href: "#", current: true },
    { name: "Socials", href: "#", current: false },
  ];

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:flex">
      <div className="w-full md:w-2/3 relative mt-4 pb-5 sm:pb-0 xl:px-0 ">
        <div className="md:flex md:items-center md:justify-between px-4 py-1">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Marketing Models
          </h3>
          <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-5">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add New Social
            </button>
            <button
              onClick={() => Router.push("/module/marketing/create_marketing")}
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create new Marketing
            </button>
            <button
              onClick={handleOpen}
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Idea
            </button>
            <MarketingDrawer handleClose={handleClose} open={open} />
          </div>
        </div>
        <div className="mt-6">
          <MarketingStatus data={data} />
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2" style={{ minHeight: "100%" }}> 
        <p className=" text-base text-gray-500 px-2 pb-4 pt-2 items-center gap-2 rounded-xl font-semibold flex p-1 ">
          <VerifiedOutlinedIcon />
          SOCIAL POSTS 3
        </p>
        <MarketingSocialCards />
        <MarketingSocialCards />
      </div>
    </div>
  );
};

export default MarketingHome;
