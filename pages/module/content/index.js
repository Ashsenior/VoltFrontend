import Head from "next/head";

import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import ContentHome from "../../../components/modules/content/ContentHome";
import { useState } from "react";
import { useContext } from "react";
import StartupContext from "../../../context/StartupContext";
import { useEffect } from "react";
import axiosInstance from "../../../src/axiosAPi";

function ContentModule() {
  const [content, setContent] = useState([]);
  const context = useContext(StartupContext);
  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index", refresh_token);
      getResearchData();
      console.log(localStorage.getItem("startup_key"));
    }
  }, []);
  const getResearchData = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/research/startup/get-tasks", {
          params: {
            // username: localStorage.getItem("username"),
            startup_key: context?.startup_key,
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setContent(response.data);
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <Head>
        <title>Content Module</title>
      </Head>

      <ContentHome content={content} />
      <Container maxWidth="lg"></Container>
    </>
  );
}

ContentModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ContentModule;
