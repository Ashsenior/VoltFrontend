import Head from "next/head";

import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import MarketingModuleComponent from "../../../components/marketing-module/marketing-module";
import MarketingHome from "../../../components/modules/marketing/MarketingHome";
import { useState, useEffect } from "react";
import { get } from "../../../config/axiosClient";
import axiosInstance from "../../../src/axiosAPi";
import { useContext } from "react";
import StartupContext from "../../../context/StartupContext";

function MarketingModule() {
  const [marketing, setMarketing] = useState([]);
  const context = useContext(StartupContext);
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
        .get("marketing/startup/get-marketing-strategies", {
          params: {
            // username: localStorage.getItem("username"),
            startup_key: context?.startup_key,
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
  //
  return (
    <>
      <Head>
        <title>Marketing Module</title>
      </Head>
      <div>
        <MarketingHome data={marketing} />
      </div>
      <Footer />
    </>
  );
}

MarketingModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MarketingModule;
