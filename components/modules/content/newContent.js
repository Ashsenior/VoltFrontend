import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SidebarLayout from "src/layouts/SidebarLayout";
import axios from "axios";
const DashBoardCharts = dynamic(
  () => import("../../../components/content-module/dashboard-charts"),
  { ssr: false }
);

const EchartsPie = dynamic(
  () => import("../../../components/content-module/pie-chart"),
  { ssr: false }
);

const EchartsArea = dynamic(
  () => import("../../../components/content-module/area-echarts"),
  { ssr: false }
);

const NewContent = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const getTableData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setTasks(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTableData();
    getData();
  }, []);
  console.log(tasks);
  const headerRows = [
    {
      align: "left",
      name: "Tasks",
    },

    {
      align: "left",
      name: "Date",
    },
    {
      align: "left",
      name: "Assigned by",
    },
    {
      align: "left",
      name: "Assigned to",
    },
    {
      align: "left",
      name: "Deadline",
    },
    {
      align: "left",
      name: "Status",
    },
    {
      align: "left",
      name: "Priority",
    },
  ];

  return (
    <></>
  );
};

NewContent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default NewContent;
