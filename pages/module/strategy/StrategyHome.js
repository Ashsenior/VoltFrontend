import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import StrategyMajor from "./StrategyMajor";
import Router from "next/router";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import StrategyMinor from "./StrategyMinor";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StrategyHome = ({ strategy }) => {
  const [username, setUsername] = useState("");

  console.log(strategy);

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
          <Box sx={{ p: 3 }}>
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* Link Buttons */}
      <Container maxWidth="w-full my-4">
        <div className="relative pb-5 border-b border-gray-200 sm:pb-0">
          <div className="md:flex md:items-center md:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Business Models
            </h3>
            <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Share with friends
              </button>
              <button
                onClick={() =>
                  Router.push("/module/create_strategy/NewStrategy")
                }
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create new Strategy
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="sm:hidden">
              <label htmlFor="current-tab" className="sr-only">
                Select a tab
              </label>
            </div>
            <div className="hidden sm:block"></div>
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ mb: 3 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="In progress" {...a11yProps(0)} />
                <Tab label="Completed" {...a11yProps(1)} />
                <Tab label="Closed" {...a11yProps(2)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <h1 className="text-base my-1 font-semibold  ml-1">Major</h1>
              <div
                xs={12}
                md={6}
                lg={6}
                className="grid grid-cols-1 xl:grid-cols-1"
              >
                <StrategyMajor strategy={strategy?.inprogress?.major} />
              </div>

              {/* Minor */}
              <h1 className="text-base my-1 font-semibold mt-6 ml-1">Minor</h1>
              <div className="grid grid-cols-1 xl:grid-cols-1">
                <StrategyMinor strategy={strategy?.inprogress?.minor} />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h1 className="text-base my-1 font-semibold  ml-1">Major</h1>
              <div
                xs={12}
                md={6}
                lg={6}
                className="grid grid-cols-1 xl:grid-cols-1"
              >
                <StrategyMajor strategy={strategy?.completed?.major} />
              </div>

              {/* Minor */}
              <h1 className="text-base my-1 font-semibold mt-6 ml-1">Minor</h1>
              <div className="grid grid-cols-1 xl:grid-cols-1">
                <StrategyMinor strategy={strategy?.completed?.minor} />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h1 className="text-base my-1 font-semibold  ml-1">Major</h1>
              <div
                xs={12}
                md={6}
                lg={6}
                className="grid grid-cols-1 xl:grid-cols-1"
              >
                <StrategyMajor strategy={strategy?.closed?.major} />
              </div>

              {/* Minor */}
              <h1 className="text-base my-1 font-semibold mt-6 ml-1">Minor</h1>
              <div className="grid grid-cols-1 xl:grid-cols-1">
                <StrategyMajor strategy={strategy?.closed?.minor} />
              </div>
            </TabPanel>
          </Box>
        </div>
      </Container>

      {/* Strategy Cards */}
      {/* Major */}
    </div>
  );
};

export default StrategyHome;
