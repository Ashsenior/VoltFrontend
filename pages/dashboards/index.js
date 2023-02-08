import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { div, Grid, Typography } from "@mui/material";
import Footer from "src/components/Footer";
// import Points from "src/content/Dashboards/Crypto/Points";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
// import Meetings from "../../components/dashboard-components/Meetings/Meetings";
import { useState } from "react";
// import Idea from "../../components/dashboard-components/Idea/Idea";
// import TargetAudience from "../../components/dashboard-components/TargetAudience/TargetAudience";
// import ModulePreview from "../../components/dashboard-components/ModulePreview/ModulePreview";
import { get } from "../../config/axiosClient";
import axiosInstance from "../../src/axiosAPi";
import axios from "axios";
import StartupContext from "../../context/StartupContext";
import { getDashboardData } from "../../utils/apiCalls";
import { Context } from "../../context/ContextProvider";
import {
  ErrorToast,
  SuccessToast,
} from "../../components/common/toasts/toast-helpers";
import AuthContext from "../../context/AuthContext";
function DashboardCrypto({ query }) {
  // const context = useContext(StartupContext);

  const [startups, setStartups] = useState({});
  const [startup_key, setStartupKey] = useState("");
  const router = useRouter();
  const context = useContext(Context);
  const { user } = useContext(AuthContext);

  const toastContext = context?.Toast;

  const DashboardData = () => {
    let params = {
      username: user,
      startup_key: query?.startup_key,
    };
    getDashboardData(params)
      .then((res) => {
        setStartups(res.details);
        SuccessToast("Fetched Successfully", toastContext);
      })
      .catch((err) => {
        ErrorToast("No Data Found", toastContext);
      });
  };
  useEffect(() => {
    DashboardData();
  }, []);

  return (
    <div className="p-2">
      <Head>
        <title>Dashboard</title>
      </Head>
      {/* Edit startup modal */}
      {/* Chart */}
      <div>
        <Typography variant="h1">Dashboard</Typography>
        <Grid
          div
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} marginTop={4}>
            {/* <Points startup={startups} /> */}
          </Grid>
        </Grid>
      </div>

      {/* Module Preview */}

      <div>{/* <ModulePreview /> */}</div>

      {/* Meeting Cards */}

      <div>{/* <Meetings /> */}</div>

      {/* Idea and Selling Point card */}
      <div>{/* <Idea startup={startups} /> */}</div>
      {/* Target Audience */}

      {/* Idea and Selling Point card */}
      {/* <div><TargetAudience startup={startups} /></div> */}

      <Footer />
    </div>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;

DashboardCrypto.getInitialProps = async ({ query }) => {
  return { query };
};
