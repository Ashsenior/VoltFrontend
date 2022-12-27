import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { div, Grid } from "@mui/material";
import Footer from "src/components/Footer";
import Points from "src/content/Dashboards/Crypto/Points";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Meetings from "../../components/dashboard-components/Meetings/Meetings";
import { useState } from "react";
import Idea from "../../components/dashboard-components/Idea/Idea";
import TargetAudience from "../../components/dashboard-components/TargetAudience/TargetAudience";
import ModulePreview from "../../components/dashboard-components/ModulePreview/ModulePreview";
import { get } from "../../config/axiosClient";
import axiosInstance from "../../src/axiosAPi";
import axios from "axios";
import StartupContext from "../../context/StartupContext";
function DashboardCrypto({ query }) {
  const context = useContext(StartupContext);

  context.setStartupKey(query.startup_key);

  console.log(context.startup_key);

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
    <div className="p-2">
      <Head>
        <title>Dashboard</title>
      </Head>
      {/* Edit startup modal */}
      {/* Chart */}
      <div>
        <Grid
          div
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} marginTop={4}>
            <Points startup={startups} />
          </Grid>
        </Grid>
      </div>

      {/* Module Preview */}

      <div>
        <ModulePreview />
      </div>

      {/* Meeting Cards */}

      <div>
        <Meetings />
      </div>

      {/* Idea and Selling Point card */}
      <div>
        <Idea startup={startups} />
      </div>
      {/* Target Audience */}

      {/* Idea and Selling Point card */}
      <div>
        <TargetAudience startup={startups} />
      </div>

      <Footer />
    </div>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;

DashboardCrypto.getInitialProps = async ({ query }) => {
  return { query };
};
