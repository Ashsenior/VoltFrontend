import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SideNavigationBox from "../../components/create-startup/side-navigation-box";
import StepOneForm from "../../components/create-startup/step-1-form";
import TopNavigationBox from "../../components/create-startup/top-nav";

const Step1 = () => {
  return (
    <>
      <Container sx={{ p: 5 }} maxWidth="lg">
        <Typography
          fontSize="22px"
          fontWeight={700}
          sx={{ color: "#00005C", mb: 2 }}
        >
          Create Startup Step 1
        </Typography>
        <Grid container>
          <Grid item xs={12} md={3} lg={3}>
            <Box
              sx={{
                display: { sm: "none", md: "none", xs: "none", lg: "block" },
              }}
            >
              <SideNavigationBox />
            </Box>

            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TopNavigationBox />
            </Box>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <StepOneForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Step1;
