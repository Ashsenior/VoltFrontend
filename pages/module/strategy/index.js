import Head from "next/head";

import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import StrategyHome from "../../../components/modules/strategy/StrategyHome";
import { useEffect, useState } from "react";
import { getStartups } from "../../../config/commonApi";
import axiosInstance from "../../../src/axiosAPi";
import { useRouter } from "next/router";
import { useContext } from "react";
import StartupContext from "../../../context/StartupContext";

function StrategyModule() {
  const context = useContext(StartupContext);
  const [strategy, setStrategy] = useState([]);
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index ", refresh_token);
      getEnrolledStatus();
      console.log(localStorage.getItem("startup_key"));
    }
  }, []);
  const getEnrolledStatus = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/strategy/startup/get-strategies", {
          params: {
            // username: localStorage.getItem("username"),
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
      <Head>
        <title>Strategy Module</title>
      </Head>
      <StrategyHome strategy={strategy} />

      <Container maxWidth="lg"></Container>
      <Footer />
    </>
  );
}

StrategyModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default StrategyModule;
