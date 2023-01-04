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

import { useRouter } from "next/router";
import moment from "moment";

const NewProduct = () => {
  const [deadline, setDeadline] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState("");
  const handleDeadline = (event) => {
    setDeadline(event?.$d);
  };
  const initialValues = {
    product_key: "",
    title: "",
    desc: "",
    assigned_to: "",
    deadline: "",
  };

  const [values, setValues] = useState(initialValues);
  const [leaders, setLeaders] = useState([]);
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
      getLeaders();
    }
  }, [authenticated]);

  const handleFormSubmit = (event) => {
    console.log(values);
    event.preventDefault();
    setLoading(true);
    var momentDate = moment(deadline);
    values.deadline = momentDate.format("YYYY-MM-DD");
    values.product_key = router.query.product_single;
    values.assigned_to = values.assigned_to;

    if (authenticated) {
      try {
        const params = new URLSearchParams();
        axiosInstance
          .post("http://127.0.0.1:8000/product/startup/create-feature/", {
            assigned_to: values.assigned_to,
            product_key: values.product_key,
            title: values.title,
            desc: values.desc,
            deadline: values.deadline,
          })
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
              console.log("done !");
              router.push(
                `/module/product/product-single?product_key=${router.query.product_single}`
              );
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
      setLoading(false);
    }
  };
  const getLeaders = () => {
    try {
      axiosInstance
        .get("/strategy/startup/get-team-members", {
          params: { startup_key: localStorage.getItem("startup_key") },
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

  return (
    <div className="mt-4 bg-white shadow rounded-lg p-3 sm: m-5 ">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-10">
          ⚡New Feature for your Product ?
        </h1>
      </div>
      <Container>
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <Grid container alignItems={"center"} spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6} mb={2}>
              <TextField
                label="Feature Name"
                fullWidth
                value={values?.title}
                name="title"
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
              <TextField
                select
                label="Assign To?"
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
            <Grid item xs={12} sm={12} md={6} lg={6} mt={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Deadline"
                  fullWidth
                  inputFormat="MM/DD/YYYY"
                  value={deadline}
                  onChange={(event) => handleDeadline(event)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                  sx={{ color: "white" }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
              <Box
                className="mt-4"
                sx={{
                  maxWidth: "100%",
                }}
              >
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-multiline-static"
                  label="Feature description"
                  multiline
                  minRows={4}
                  onChange={(event) => handleChange(event)}
                  name="desc"
                  value={values?.desc}
                />
              </Box>
            </Grid>

            <div className="mt-4 flex items-center justify-end">
              <LoadingButton
                loading={loading}
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create
              </LoadingButton>
            </div>
          </Grid>
        </form>
      </Container>
    </div>
  );
};
NewProduct.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default NewProduct;
