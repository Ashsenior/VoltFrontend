import React from "react";
import { useState, useEffect } from "react";
import { DatePicker } from '@mui/x-date-pickers';
import '@mui/lab';
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
import axiosInstance from "../../../src/axiosAPi";

const SelectLeader = [
  {
    label: "@ashenoir",
    value: "@ashenoir",
  },
  {
    label: "@hp",
    value: "@hp",
  },
];

const SelectCategory = [
  {
    label: "Minor",
    value: "minor",
  },
  {
    label: "Major",
    value: "Major",
  },
];

const EditStrategy = () => {
  const [approxStartDate, setApproxStartDate] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");
  const handleApproxStartDate = (event) => {
    setApproxStartDate(event?.$d);
  };
  const initialValues = {
    strategyTitle: "",
    strategy: "",
    category: "",
    strategyLeader: "",
    customer: "",
    success_low: "",
    success_mid: "",
    success_high: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // name = event.target.name;
    // value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   let newValues = { ...values, approxStartDate: approxStartDate };
  //   // values.assign("assa");
  //   values.approxStartDate = approxStartDate;
  //   console.log("newvalues", values);

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setAuthenticated(true);
      setUsername(localStorage.getItem("username"));
    }
  }, [authenticated]);

  const handleFormSubmit = (event) => {
    console.log(values);

    event.preventDefault();
    let newValues = { ...values, approxStartDate: approxStartDate };
    // values.assign("assa");
    values.approxStartDate = approxStartDate;
    setLoading(true);
    if (authenticated) {
      try {
        axiosInstance
          .post("/module/startup/create-strategy", {
            values,
          })
          .then((response) => {
            if (response.status === 201) {
              console.log("done !");
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
                label="Strategy Name"
                fullWidth
                value={values?.strategyTitle}
                name="strategyTitle"
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <TextField
                select
                label="Select Category ?"
                name="category"
                value={values?.category}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {SelectCategory.map((option) => (
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
                  value={approxStartDate}
                  onChange={(event) => handleApproxStartDate(event)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>

            {/* <div className="form-control mt-4">
            <div className="rounded-l-lg">
              <select className="select bg-white border-gray-300">
                <option disabled selected>
                  Assign a Leader
                </option>
                <option>@ashsenior</option>
                <option>@honeysingh</option>
              </select>
            </div>
          </div> */}
            <Grid item xs={12} sm={12} md={12} lg={6} mt={3}>
              <TextField
                select
                label="Select leader ?"
                name="strategyLeader"
                value={values?.strategyLeader}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {SelectLeader.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
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
                  style={{ width: "100%" }}
                  id="outlined-multiline-static"
                  label="Customer it impacts"
                  multiline
                  value={values?.customer}
                  name="customer"
                  minRows={2}
                  onChange={(event) => handleChange(event)}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                className="mt-4"
                sx={{
                  maxWidth: "100%",
                }}
              >
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-multiline-static"
                  label="Strategy description"
                  multiline
                  minRows={4}
                  onChange={(event) => handleChange(event)}
                  name="strategy"
                  value={values?.strategy}
                />
              </Box>
            </Grid>
            {/* </div> */}

            <div>
              <h1 className="text-base font-semibold mt-4 mb-3">
                Success Metrics
              </h1>
              <div className="flex items-center gap-4">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    value={values?.success_high}
                    fullWidth
                    label="High"
                    name="success_high"
                    onChange={(event) => handleChange(event)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    value={values?.success_mid}
                    fullWidth
                    label="Mid"
                    name="success_mid"
                    onChange={(event) => handleChange(event)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    value={values?.success_low}
                    fullWidth
                    label="Low"
                    name="success_low"
                    onChange={(event) => handleChange(event)}
                  />
                </Grid>
              </div>

              <div className="mt-4 flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create
                </button>
              </div>
            </div>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default EditStrategy;
