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

function DashboardCrypto() {
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

  const [data, setData] = useState([]);
  const getData = () => {
    get("todos")
      .then((res) => {
        setData(res.json);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  useEffect(() => {
    getData();
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
            <Points />
          </Grid>
        </Grid>
      </Container>

      {/* Meeting Cards */}

      <Container maxWidth="lg">
        <Meetings />
      </Container>

      {/* Idea and Selling Point card */}
      <Container maxWidth="lg">
        <Idea />
      </Container>
      {/* Target Audience */}

      {/* Idea and Selling Point card */}
      <Container maxWidth="lg">
        <TargetAudience />
      </Container>

      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
