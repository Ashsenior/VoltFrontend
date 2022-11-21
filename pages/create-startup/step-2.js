import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SideNavigationBox from "../../components/create-startup/side-navigation-box";
import StepTwoForm from "../../components/create-startup/step-2-form";
import TopNavigationBox from "../../components/create-startup/top-nav";

const Step1 = () => {
  return (
    <>
      <Container sx={{ p: 5 }} maxWidth="lg">
     
        <Typography variant="h3" component="h3" gutterBottom >
          Explain Your Idea💡 In Brief
        </Typography>
        <Typography variant="subtitle2" gutterBottom mb={2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim
          esse illo nemo. Aut deserunt !
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
            <StepTwoForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Step1;
