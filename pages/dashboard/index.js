import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "../../components/dashboard-components/box";
import BaseLayout from "src/layouts/BaseLayout";
import dynamic from "next/dynamic";
import AppOrderTimeline from "../../components/dashboard-components/order-timeline";
import { faker } from "@faker-js/faker";
import AppNewsUpdate from "../../components/dashboard-components/news-update";
import SocialCard from "../../components/dashboard-components/social-card";
import DashBoardTable from "../../components/dashboard-components/dashboard-table";
import ProfitLoss from "../../components/dashboard-components/profit-loss";
import Meetings from "../../components/dashboard-components/Meetings/Meetings";

const DashBoardCharts = dynamic(
  () => import("../../components/dashboard-components/dashboard-charts"),
  { ssr: false }
);
const Home = () => {
  return (
    <>
      <Container maxWidth="lg" p={5} mt={10}>
        <Typography variant="h4" sx={{ mb: 5, mt: 2 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Strategy Module"
              total={714000}
              icon={"icon-park-outline:brain"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Research Module"
              total={1352831}
              color="info"
              icon={"simple-icons:researchgate"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Product Module"
              total={1723315}
              color="warning"
              icon={"material-symbols:garden-cart"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Sales Module"
              total={234}
              color="error"
              icon={"ph:currency-circle-dollar-fill"}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <DashBoardCharts />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  "1983, orders, $4220",
                  "12 Invoices have been paid",
                  "Order #37745 from September",
                  "New order placed #XF-2356",
                  "New order placed #XF-2346",
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `https://minimal-kit-react.vercel.app/assets/images/covers/cover_3.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfitLoss />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <SocialCard />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <DashBoardTable />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Meetings />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Home;