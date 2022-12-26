import React from "react";
import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LoadingButton } from "@mui/lab";
import SidebarLayout from "src/layouts/SidebarLayout";

import {
  Checkbox,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  TextField,
  MenuItem,
  Box,
  FormControlLabel,
  Container,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import axiosInstance from "../../../../src/axiosAPi";
import {
  getDateWithDash,
  handleGetFullDateWithoutTime,
} from "../../../../utils/data-modifiers";
import moment from "moment";
import { useRouter } from "next/router";
import { useContext } from "react";
import StartupContext from "../../../../context/StartupContext";

const category = [
  {
    value: "B",
    label: "Brief",
  },
  {
    value: "I",
    label: "Image/Poster",
  },
  {
    value: "V",
    label: "Video",
  },
  {
    value: "R",
    label: "Research Report",
  },
  {
    value: "S",
    label: "Stats",
  },
];

const keywords = [
  {
    value: "B",
    label: "Business Model",
  },
  {
    value: "CU",
    label: "Customer analysis",
  },
  {
    value: "P",
    label: "Pricing Strategy",
  },
  {
    value: "PFA",
    label: "Product Feedback Analysis",
  },
  {
    value: "I",
    label: "Insider Info",
  },

  {
    value: "S",
    label: "Startup Registration",
  },
  {
    value: "R",
    label: "Resources",
  },
  {
    value: "C",
    label: "Marketing Content",
  },
];

const CreateContent = () => {
  const context = useContext(StartupContext);
  const [approxEndDate, setApproxEndDate] = useState("");

  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");
  const [startup_key, setStartupKey] = useState("");
  const handleApproxEndDate = (event) => {
    setApproxEndDate(event?.$d);
  };
  const initialValues = {
    task: "",
    category: "",
    assigned_to: "",
    keyword: "",
    endDate: approxEndDate,
    strategy_key: "",
    startup_key: context?.startup_key,
  };

  const [values, setValues] = useState(initialValues);
  const [leaders, setLeaders] = useState([]);
  const [strategy, setStrategy] = useState([]);
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    // name = event.target.name;
    // value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setAuthenticated(true);
      setUsername(localStorage.getItem("username"));
      getLeaders();
      getStartUps();
    }
  }, [authenticated]);

  const handleFormSubmit = (event) => {
    setLoading(true);

    console.log(values);
    console.log(strategy);

    event.preventDefault();
    // values.assign("assa");
    values.startup_key = startup_key;
    var momentDate = moment(approxEndDate);
    values.endDate = momentDate.format("YYYY-MM-DD");
    setApproxEndDate(momentDate.format("YYYY-MM-DD"));
    console.log(approxEndDate);

    if (authenticated) {
      try {
        axiosInstance
          .post("/research/startup/create-research-task/", {
            task: values.task,
            category: values.category,
            assigned_to: values.assigned_to,
            keyword: values.keyword,
            endDate: values.endDate,
            strategy_key: values.strategy_key,
            startup_key: context?.startup_key,
          })
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
              console.log("done !");
              router.push("/module/content");
              setLoading(false);
            } else {
              setLoading(false);
              // setMessage("Some error occurred while completing your profile!");
            }
          });
      } catch (error) {
        setLoading(false);
        throw error;
      }
    } else {
      // setMessage("Fill the compulsory fields.");
    }
  };
  const getLeaders = () => {
    try {
      axiosInstance
        .get("/strategy/startup/get-team-members", {
          params: { startup_key: context.startup_key },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response?.data);
            setLeaders(response?.data?.members);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  const getStartUps = () => {
    try {
      axiosInstance
        .get("/strategy/startup/get-strategy-options", {
          params: { startup_key: context.startup_key },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response?.data);
            setStrategy(response?.data?.strategies);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setStartupKey(localStorage.getItem("startup_key"));
  });
  return (
    <div className="mt-4 bg-white shadow rounded-lg p-3 sm: m-5 ">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-10">
          ⚡New Plan for your Startup ?
        </h1>
      </div>
      <Container>
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <Grid container alignItems={"center"} spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                label="Task"
                fullWidth
                value={values?.task}
                name="task"
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <TextField
                label="Keyword ?"
                name="keyword"
                value={values?.keyword}
                fullWidth
                onChange={(event) => handleChange(event)}
                select
              >
                {keywords?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} mt={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Date"
                  fullWidth
                  inputFormat="MM/DD/YYYY"
                  value={approxEndDate}
                  onChange={(event) => handleApproxEndDate(event)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} mt={3}>
              <TextField
                select
                label="Assigned to ?"
                name="assigned_to"
                value={values?.assigned_to}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {leaders?.map((option) => (
                  <MenuItem key={option.username} value={option.username}>
                    {option.username}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} mt={3}>
              <TextField
                select
                label="Select Strategy?"
                name="strategy_key"
                value={values?.strategy_key}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {strategy?.map((option) => (
                  <MenuItem key={option.slug} value={option.slug}>
                    {option.strategyTitle}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                className="mt-4"
                sx={{
                  maxWidth: "100%",
                }}
              >
                <TextField
                  select
                  style={{ width: "100%" }}
                  label="Category"
                  onChange={(event) => handleChange(event)}
                  name="category"
                  value={values?.category}
                >
                  {category?.map((option) => (
                    <MenuItem key={option.label} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>
            {/* </div> */}

            <div>
              <div className="mt-4 flex items-center justify-end">
                <LoadingButton
                  loading={loading}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create
                </LoadingButton>
              </div>
            </div>
          </Grid>
        </form>
      </Container>
    </div>
  );
};
CreateContent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateContent;
