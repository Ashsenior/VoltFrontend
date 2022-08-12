import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

import Points from 'src/content/Dashboards/Crypto/Points';

function DashboardCrypto() {
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
