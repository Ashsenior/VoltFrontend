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
  Stack,
  IconButton,
} from "@mui/material";
import Cancel from "@mui/icons-material/Cancel";
import axiosInstance from "../../../../src/axiosAPi";
import {
  getDateWithDash,
  handleGetFullDateWithoutTime,
} from "../../../../utils/data-modifiers";
import moment from "moment";
import { useRouter } from "next/router";
import { getLeaders } from "../../../../utils/apiCalls";
import { useContext } from "react";
import { Context } from "../../../../context/ContextProvider";

const SelectCategory = [
  {
    label: "Minor",
    value: "m",
  },
  {
    label: "Major",
    value: "M",
  },
];

const NewStrategy = ({ handleCallBack }) => {
  const [approxStartDate, setApproxStartDate] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");
  const [startup_key, setStartupKey] = useState("");
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
  const [leaders, setLeaders] = useState([]);
  const router = useRouter();
  const startupContext = useContext(Context)?.Startup;

  const handleChange = (event) => {
    const { name, value } = event.target;
    // name = event.target.name;
    // value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = (event) => {
    setLoading(true);
    console.log(values);
    event.preventDefault();
    values.startup_key = startup_key;
    var momentDate = moment(approxStartDate);
    values.approxStartDate = momentDate.format("YYYY-MM-DD");
  };

  useEffect(() => {
    let params = {
      startup_key: startupContext?.state?.startupKey?.startupKey
        ? startupContext?.state?.startupKey?.startupKey
        : localStorage.getItem("startup_key"),
    };
    getLeaders(params).then((res) => {
      setLeaders(res.members);
    });
  }, [startupContext]);

  return (
    <div className="mt-4 bg-white shadow rounded-lg p-3 sm: m-5 ">
      <div>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
          mb={5}
        >
          <>.</>
          <h1 className="text-2xl font-semibold text-center ">
            ⚡New Strategy for your Startup ?
          </h1>
          <IconButton onClick={handleCallBack}>
            <Cancel />
          </IconButton>
        </Stack>
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
                {leaders?.map((option) => (
                  <MenuItem key={option.username} value={option.username}>
                    {option.username}
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

export default NewStrategy;

NewStrategy.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
