import SidebarLayout from "src/layouts/SidebarLayout";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardHeader,
  Divider,
  Fab,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Chip
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ForkRightIcon from '@mui/icons-material/ForkRight';

const CustomizedInputBase = () => {
  return (
    <Paper
      sx={{
        p: "2px 4px",
        mb: 2,
        display: "flex",
        alignItems: "center",
        boxShadow: "0"
      }}
      variant="outlined"
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search " />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon sx={{ color: "#000" }} />
      </IconButton>
    </Paper>
  );
};

const DashboardCard = (props) => {
  const items = [];
  return (
    <Card
      sx={{
        backgroundColor: `${props.background}`,
        border: `2px solid white`,
        borderRadius: '10px',
        boxShadow: '0',
        height: "43.5vh"
      }}
    >
      <Box sx={{height: "100%", borderRadius: "0px" }}>
        <Box
          sx={{
            background: "",
            p: 1,
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: `#000` }}
          >
            {props.label} Resources
            <IconButton aria-label="delete" backgroundColor="#f2f2f2f" sx={{marginLeft: "5px" }} size="large">
              <AddIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" backgroundColor="#f2f2f2f" sx={{marginLeft: "5px" }} size="large">
              <SearchIcon fontSize="inherit" />
            </IconButton>
          </Typography>
          <Box spacing={4} >
            {/*<CustomizedInputBase />*/}
            {
              props?.objs?.map((obj) => (
                <Chip sx={{
                  marginRight: "5px",
                  marginBottom: "4px",
                }} label={obj} variant="outlined" icon={<ForkRightIcon />} />
              ))
            }
          </Box>
        </Box>
        <CardContent></CardContent>
      </Box>
    </Card>
  );
};

function ResourceModule() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid backgroundColor="#e6e6e6" padding={1} height={"full"} container spacing={1}>

        <Grid item xs={9}>
          <Grid container spacing={1}>

            <Grid item xs={6}>
              <DashboardCard label="Product" objs={['Product roadmap', 'marketing video link', 'Important product blogs']} value="10" background="#fbfcf8" />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard label="Research" objs={['Product roadmap', 'marketing video link', 'Competetive Products']} value="20" background="#fbfcf8" />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard label="Legal" objs={['Product roadmap are great to have', 'marketing video link', 'Important product blogs']} value="30" background="#fbfcf8" />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard label="Other" objs={['Product roadmap', 'marketing video link', 'Important product blogs']} value="30" background="#fbfcf8" />
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={3} container height={"full"}>
          <Box
            sx={{
              width: "100%",
              background: "#fbfcf8 !important",
              border: `2px solid #fbfcf8 !important`,
              p: 1,
              borderRadius: '10px',
            }}
          >
            <CustomizedInputBase />
            <Box
                sx={{
                  color: "#8c8c8c"
                }}
              >
                <Typography variant="h4">
                  Recently added resources
                </Typography>
                <Box
                  sx={{
                    background: "#fbfcf8 !important",
                    border: `1px solid #f2f2f2 !important`,
                    my: 1,
                    p: 1,
                  }}
                >
                  <Chip sx={{
                    marginRight: "5px",
                    marginBottom: "4px",
                  }} label="Cap table documents" variant="outlined" icon={<ForkRightIcon />} />
                  <Chip sx={{
                    marginRight: "5px",
                    marginBottom: "4px",
                  }} label="Marketing campaign plan" variant="outlined" icon={<ForkRightIcon />} />
                  <Chip sx={{
                    marginRight: "5px",
                    marginBottom: "4px",
                  }} label="Tax returns files" variant="outlined" icon={<ForkRightIcon />} />
                  <Chip sx={{
                    marginRight: "5px",
                    marginBottom: "4px",
                  }} label="3 months roadmap" variant="outlined" icon={<ForkRightIcon />} />
                  <Chip sx={{
                    marginRight: "5px",
                    marginBottom: "4px",
                  }} label="product designs" variant="outlined" icon={<ForkRightIcon />} />
                </Box>
              </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

ResourceModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ResourceModule;
