import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import Points from 'src/content/Dashboards/Crypto/Points';

import AuthContext from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Meetings from './Meetings/Meetings';


function DashboardCrypto() {
  const router = useRouter()
  // const { isAuthenticated } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/");
  //   }
  // });


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
      {/* Meeting Cards */}

      <Meetings></Meetings>

      <Footer />
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
