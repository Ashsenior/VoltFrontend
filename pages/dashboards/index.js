import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import Points from 'src/content/Dashboards/Crypto/Points';

import AuthContext from "../../context/AuthContext";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";


function DashboardCrypto() {
    const router = useRouter()
    const [username, setUsername] = useState("");
    useEffect(() => {
      var access_token = localStorage.getItem("access_token");
      var refresh_token = localStorage.getItem("refresh_token");
      if (access_token && refresh_token){
        setUsername(localStorage.getItem("username"));
        //getUserData();
      }
      else {
        router.push({
          pathname: "/",
          query: {"message": "Not authenticated !"}
        });
      }
    }, []);


  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
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
      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
