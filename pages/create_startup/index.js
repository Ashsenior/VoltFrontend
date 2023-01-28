import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Footer from "src/components/Footer";
import { DatePicker } from "@mui/x-date-pickers";
import { LoadingButton } from "@mui/lab";
import Router from "next/router";

const genders = [
  {
    value: "Male",
    label: "♂ Male",
  },
  {
    value: "Female",
    label: "♀ Female",
  },
  {
    value: "Other",
    label: "⚢ / ⚣ Other",
  },
];
const roles = [
  {
    value: "Tech",
    label: "Tech",
  },
  {
    value: "Sales",
    label: "Sales",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
  {
    value: "Legal & Admin",
    label: "Legal & Admin",
  },
  {
    value: "Operations",
    label: "Operations",
  },
];
const founderVal = [
  {
    value: true,
    label: "Yes",
  },
  {
    value: false,
    label: "No",
  },
];

const registeredStartup = [
  {
    value: true,
    label: "Yes",
  },
  {
    value: false,
    label: "No",
  },
];

const SelectYear = [
  {
    label: "2022",
    value: 2022,
  },
  {
    label: "2021",
    value: 2021,
  },
  {
    label: "2020",
    value: 2020,
  },
  {
    label: "2019",
    value: 2019,
  },
  {
    label: "2018",
    value: 2018,
  },
  {
    label: "2017",
    value: 2017,
  },
  {
    label: "2016",
    value: 2016,
  },
  {
    label: "2015",
    value: 2015,
  },
  {
    label: "2014",
    value: 2014,
  },
  {
    label: "2013",
    value: 2013,
  },
  {
    label: "2012",
    value: 2012,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
import axiosInstance from "../../src/axiosAPi";

function TabsDemo() {
  const [username, setUsername] = useState("");
  const [value, setValue] = useState(0);
  const [role, setRole] = useState("Tech");
  const [founder, setFounder] = useState("0");
  const [registered, setRegistered] = useState(true);
  const [name, setname] = useState("0");
  const [market, setmarket] = useState("0");
  const [founded, setfounded] = useState(dayjs("2014-08-18T21:11:54"));
  const [authenticated, setAuthenticated] = useState(false);
  const [teamates, setTeammates] = useState("");
  const [idea, setidea] = useState("");
  const [problemArea, setproblemArea] = useState("0");
  const [currentPlayers, setcurrentPlayers] = useState("0");
  const [difference, setdifference] = useState("0");
  const [customer, setcustomer] = useState("0");
  const [revenue1, setrevenue1] = useState("0");
  const [revenue2, setrevenue2] = useState("0");
  const [stage, setstage] = useState("0");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const rolehandleChange = (event) => {
    setRole(event.target.value);
  };
  const founderhandleChange = (event) => {
    setFounder(event.target.value);
  };
  const registeredhandleChange = (event) => {
    setRegistered(event.target.value);
  };
  const handlename = (event) => {
    setname(event.target.value);
  };
  const handlemarket = (event) => {
    setmarket(event.target.value);
  };
  const handlefounded = (event) => {
    setfounded(event.target.value);
  };
  const handleidea = (event) => {
    setidea(event.target.value);
  };
  const handleproblemArea = (event) => {
    setproblemArea(event.target.value);
  };
  const handlecurrentPlayers = (event) => {
    setcurrentPlayers(event.target.value);
  };
  const handledifference = (event) => {
    setdifference(event.target.value);
  };
  const handlecustomer = (event) => {
    setcustomer(event.target.value);
  };
  const handlerevenue1 = (event) => {
    setrevenue1(event.target.value);
  };
  const handlerevenue2 = (event) => {
    setrevenue2(event.target.value);
  };
  const handlestage = (event) => {
    setstage(event.target.value);
  };

  const handleTeammates = (event) => {
    setTeammates(event.target.value);
  };

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setAuthenticated(true);
      setUsername(localStorage.getItem("username"));
    }
  }, [authenticated]);

  const handleSubmit = () => {
    setLoading(true);
    if (authenticated) {
      try {
        axiosInstance
          .post("/user/create-startup/", {
            username: username,
            name: name,
            market: market,
            founded: founded,
            idea: idea,
            problemArea: problemArea,
            currentPlayers: currentPlayers,
            difference: difference,
            customer: customer,
            revenue1: revenue1,
            revenue2: revenue2,
            stage: stage,
            is_founder: founder,
            registered: registered,
          })
          .then((response) => {
            if (response.status === 201) {
              Router.push("/home");
              setLoading(false);
            } else {
              setMessage("Some error occurred while completing your profile!");
              setLoading(false);
            }
          });
      } catch (error) {
        setLoading(false);
        throw error;
      }
    } else {
      setMessage("Fill the compulsory fields.");
    }
  };

  return (
    <Container maxWidth="lg" className="bg-white">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        marginTop={4}
        marginBottom={4}
      >
        <Grid item xs={13}>
          <Card>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              height={"7vh"}
            >
              <CardHeader title="Basic Info" />
              <Tabs
                variant="scrollable"
                scrollButtons="auto"
                textColor="primary"
                indicatorColor="primary"
                value={value}
                aria-label="basic tabs example"
              >
                <Tab label="1" {...a11yProps(0)} />
                <Tab label="2" {...a11yProps(1)} />
                <Tab label="3" {...a11yProps(2)} />
                <Tab label="4" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <Divider />
            <CardContent>
              <Box
                sx={{ width: "100%" }}
                textAlign={"center"}
                minHeight={"50vh"}
              >
                <TabPanel value={value} index={0}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "35ch" },
                    }}
                    noValidate
                    autoComplete="off"
                    textAlign={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    minHeight={"50vh"}
                  >
                    <div>
                      <TextField
                        required
                        id="outlined-search"
                        label="Startup name"
                        type="search"
                        onChange={handlename}
                      />
                      <TextField
                        required
                        id="outlined-search"
                        label="Market"
                        type="search"
                        onChange={handlemarket}
                      />
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="Date desktop"
                          inputFormat="MM/DD/YYYY"
                          value={founded}
                          onChange={handlefounded}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider> */}
                      <TextField
                        select
                        label="Year founded ?"
                        value={founded}
                        onChange={handlefounded}
                      >
                        {SelectYear.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>

                    <div>
                      <TextField
                        select
                        label="Are You the Founder ?"
                        value={founder}
                        onChange={founderhandleChange}
                      >
                        {founderVal.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        select
                        disabled={founder === "0"}
                        label="Is your startup registered?"
                        value={registered}
                        onChange={registeredhandleChange}
                      >
                        {registeredStartup.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        select
                        label="Role"
                        value={role}
                        onChange={rolehandleChange}
                      >
                        {roles.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Invite your teammates"
                      multiline
                      style={{ width: "100%" }}
                      minRows={8}
                      placeholder="Write emails of your teamates with commas ex: something@somewhere.com, "
                      onChange={handleTeammates}
                      value={teamates}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                    textAlign={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    minHeight={"30vh"}
                  >
                    <Grid item paddingBottom={4}>
                      <Typography variant="h3" component="h3" gutterBottom>
                        Explain Your Idea💡 In Brief
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Idea"
                      multiline
                      minRows={13}
                      defaultValue="Default Value"
                      onChange={handleidea}
                      value={idea}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                    textAlign={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"start"}
                    justifyContent={"space-between"}
                    minHeight={"30vh"}
                  >
                    <Grid item paddingBottom={2} marginTop={2}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        2. Problem Area of the customer you are addressing
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      minRows={5}
                      value={problemArea}
                      onChange={handleproblemArea}
                    />
                    <Grid item paddingBottom={2} marginTop={2}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        3. Who are the current players who are partly or wholly
                        solving the current problem?
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      minRows={5}
                      value={currentPlayers}
                      onChange={handlecurrentPlayers}
                    />
                    <Grid item paddingBottom={2} marginTop={2}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        4. How are you different from them? What is your
                        competitive advantage?
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      minRows={5}
                      onChange={handledifference}
                      value={difference}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                    textAlign={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"start"}
                    justifyContent={"space-between"}
                    minHeight={"30vh"}
                  >
                    <Grid item paddingBottom={2} marginTop={2}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        5. Who are the primary end customers whom you are
                        targeting?
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      minRows={3}
                      onChange={handlecustomer}
                      value={customer}
                    />
                    <Grid item paddingBottom={2} marginTop={2}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        6. Are they the ones who would be revenue generators for
                        your product or service?
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      minRows={3}
                      onChange={handlerevenue1}
                      value={revenue1}
                    />
                    <Grid item paddingBottom={2} marginTop={2}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        7. If the answer to the above question is NO, then who
                        are the people who would enable you to generate revenue?
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      minRows={3}
                      onChange={handlerevenue2}
                      value={revenue2}
                    />
                    <Grid item paddingBottom={2} marginTop={2}>
                      <Typography variant="h4" component="h3" gutterBottom>
                        8. What stage is your product/service at ?
                      </Typography>
                    </Grid>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      minRows={3}
                      onChange={handlestage}
                      value={stage}
                    />
                  </Box>
                </TabPanel>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Button
                    // className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-xl text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700"
                    sx={{ margin: 1 }}
                    variant="contained"
                    onClick={() => {
                      if (value === 0) {
                        setValue(0);
                      } else {
                        setValue(value - 1);
                      }
                    }}
                  >
                    Previous
                  </Button>
                  <LoadingButton
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-xl text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700 "
                    sx={{ margin: 1, bgcolor: "blue" }}
                    variant="contained"
                    color={value === 3 ? "success" : "secondary"}
                    onClick={() => {
                      if (value === 3) {
                        handleSubmit();
                        // Router.push("/dashboards");
                      } else {
                        setValue(value + 1);
                      }
                    }}
                    loading={loading}
                  >
                    {value === 3 ? "Submit" : "Next"}
                  </LoadingButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default TabsDemo;
