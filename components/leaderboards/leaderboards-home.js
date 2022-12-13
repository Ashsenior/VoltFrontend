import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import User from "./user";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import Startups from "./startup";
import Corporates from "./corporates";

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
          <>{children}</>
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
const LeaderboardsHome = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        className="justify-center px-4 "
        sx={{ borderBottom: 0, borderColor: "divider", mt: 2, mb: 3 }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Startups" {...a11yProps(1)} />
          <Tab label="Corporate" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <User />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Startups />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Corporates />
      </TabPanel>
    </>
  );
};

export default LeaderboardsHome;
