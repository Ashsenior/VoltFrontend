import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ComplexStatisticsCard from "../../../components/content-module/card";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BuildIcon from "@mui/icons-material/Build";
import dynamic from "next/dynamic";
import SidebarLayout from "src/layouts/SidebarLayout";
import SocialCard from "../../../components/dashboard-components/social-card";
const DashBoardCharts = dynamic(
  () => import("../../../components/content-module/dashboard-charts"),
  { ssr: false }
);

const EchartsPie = dynamic(
  () => import("../../../components/content-module/pie-chart"),
  { ssr: false }
);

const EchartsArea = dynamic(
  () => import("../../../components/content-module/area-echarts"),
  { ssr: false }
);

const NewContent = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              color="dark"
              icon=<TrendingUpIcon
                sx={{
                  color: "#fff",
                  width: "50px",
                  height: "50px",
                }}
              />
              title="Bookings"
              count={281}
              backgroundColor="#344767"
              percentage={{
                amount: "+55%",
                label: "than lask week",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              color="dark"
              icon=<SignalCellularAltIcon
                sx={{
                  color: "#fff",
                  width: "50px",
                  height: "50px",
                }}
              />
              title="Today's users"
              count={210}
              backgroundColor="#430089"
              percentage={{
                amount: "+21%",
                label: "than lask week",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              color="dark"
              icon=<HomeWorkIcon
                sx={{
                  color: "#fff",
                  width: "50px",
                  height: "50px",
                }}
              />
              title="Bookings"
              count={11}
              backgroundColor="#66BB6A"
              percentage={{
                amount: "+25%",
                label: "than lask week",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box mb={1.5}>
            <ComplexStatisticsCard
              color="dark"
              icon=<BuildIcon
                sx={{
                  color: "#fff",
                  width: "50px",
                  height: "50px",
                }}
              />
              title="Issue"
              count={1}
              backgroundColor="#EC407A"
              percentage={{
                amount: "-5%",
                label: "than lask week",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DashBoardCharts />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <EchartsPie />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <EchartsArea />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <SocialCard />
        </Grid>
      </Grid>
    </Container>
  );
};

NewContent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default NewContent;
