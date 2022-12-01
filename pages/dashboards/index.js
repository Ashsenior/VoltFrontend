import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Container, Grid } from "@mui/material";
import Footer from "src/components/Footer";
import Points from "src/content/Dashboards/Crypto/Points";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Meetings from "./Meetings/Meetings";
import { useState } from "react";
import Idea from "./Idea/Idea";
import TargetAudience from "./TargetAudience/TargetAudience";
import EditModal from "./EditModal/EditModal";
import { get } from "../../config/axiosClient";
import axiosInstance from "../../src/axiosAPi";
import axios from "axios";

function DashboardCrypto({ query }) {
  console.log(query);
  const [startups, setStartups] = useState({});
  const [startup_key, setStartupKey] = useState("");
  const router = useRouter();
  const [username, setUsername] = useState("");
  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setUsername(localStorage.getItem("username"));
      //getUserData();
    } else {
      router.push({
        pathname: "/",
        query: { message: "Not authenticated !" },
      });
    }
  }, []);

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index ", refresh_token);
      getEnrolledStatus();
    }
  }, [startup_key]);
  const getEnrolledStatus = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/user/get-dashboard-data", {
          params: {
            username: localStorage.getItem("username"),
            startup_key: query?.startup_key ? query.startup_key : startup_key,
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setStartups(response.data?.details);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    localStorage.setItem("startup_key", query?.startup_key);
  }, [query]);

  useEffect(() => {
    setStartupKey(localStorage.getItem("startup_key"));
  }, []);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      {/* Edit startup modal */}

      <EditModal />

      {/* Chart */}
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} marginTop={4}>
            <Points startup={startups} />
          </Grid>
        </Grid>
      </Container>

      {/* Meeting Cards */}

      <Container maxWidth="lg">
        <Meetings />
      </Container>

      {/* Idea and Selling Point card */}
      <Container maxWidth="lg">
        <Idea startup={startups} />
      </Container>
      {/* Target Audience */}

      {/* Idea and Selling Point card */}
      <Container maxWidth="lg">
        <TargetAudience startup={startups} />
      </Container>

      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;

DashboardCrypto.getInitialProps = async ({ query }) => {
  return { query };
};
