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
  Divider,
  Fab,
  Grid,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const CustomizedInputBase = () => {
  return (
    <Paper
      sx={{
        p: "2px 4px",
        mb: 2,
        display: "flex",
        alignItems: "center",
      }}
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
        border: `2px solid ${props.background}`,
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            background: "#fff",
            p: 4,
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ color: `#000` }}
          >
            {props.label} Module
          </Typography>
          <Box>
            <CustomizedInputBase />
            <Card
              sx={{
                border: ` 1px solid ${props.background} !important`,
                p: 1,
                color: "#000",
              }}
            >
              <Typography>Product 1</Typography>
            </Card>
          </Box>
        </Box>
        <CardContent></CardContent>
      </CardActionArea>
      <Box sx={{ p: 2 }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
            sx={{
              background: `#fff !important`,
              color: `${props.background}`,
              minWidth: "100px",
            }}
            size="large"
          >
            Share
          </Button>

          <Fab
            sx={{
              background: "#000 !important",
              color: `${props.background}`,
            }}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Stack>
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
    <div>
      <Grid padding={5} container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <DashboardCard label="Product" value="10" background="#fbfcf8" />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard label="Research" value="20" background="#fbfcf8" />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard label="Content" value="30" background="#fbfcf8" />
            </Grid>
            <Grid item xs={6}>
              <DashboardCard
                label="Marketing"
                value="30"
                background="#fbfcf8"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              background: "#fbfcf8 !important",
              border: `2px solid #fbfcf8 !important`,
              p: 4,
            }}
          >
            <Typography variant="h3" mb={2}>
              My Drive
            </Typography>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Details" value="1" />
                  <Tab label="Activity" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box
                  sx={{
                    background: "#fbfcf8 !important",
                    border: `1px solid #f2f2f2 !important`,
                    my: 2,
                    p: 1,
                  }}
                >
                  <Typography variant="h5" mb={2}>
                    Created on : 21st Feb 2023
                  </Typography>
                  <Stack direction={"row"} alignItems="center" gap={3} mb={3}>
                    <Typography variant="h5" mb={2}>
                      File name: index.tsx
                    </Typography>
                    <Typography variant="h5" mb={2}>
                      File size: 50kb
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} alignItems="center" gap={2} mb={3}>
                    <FileCopyIcon />
                    <Typography variant="h5" mb={2}>
                      index.tsx
                    </Typography>
                  </Stack>
                </Box>
              </TabPanel>
              <TabPanel
                sx={{
                  background: "#fbfcf8 !important",
                  border: `2px solid #fbfcf8 !important`,
                  p: "0px !important",
                  my: 2,
                }}
                value="2"
              >
                <Box
                  sx={{
                    p: 1,
                  }}
                >
                  <Typography variant="h5" mb={2}>
                    Earlier this week
                  </Typography>
                  <Divider />
                  <Box
                    sx={{
                      background: "#fbfcf8 !important",
                      border: `1px solid #f2f2f2 !important`,
                      my: 2,
                      p: 1,
                    }}
                  >
                    <Typography variant="h5" mb={2}>
                      21st Feb 2023
                    </Typography>
                    <Stack direction={"row"} alignItems="center" gap={3} mb={3}>
                      <Avatar />
                      <Typography variant="h5" mb={2}>
                        You upload a file
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} alignItems="center" gap={2} mb={3}>
                      <FileCopyIcon />
                      <Typography variant="h5" mb={2}>
                        index.tsx
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

ResourceModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ResourceModule;
