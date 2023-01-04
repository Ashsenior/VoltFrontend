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

const SelectStatus = [
  {
    label: "live",
    value: true,
  },
  {
    label: "production",
    value: false,
  },
];

const PHASE_CHOICES = [
  {
    value: "I",
    label: "Ideation",
  },
  {
    value: "D",
    label: "Design",
  },
  {
    value: "MVP",
    label: "Minimum Viable Product",
  },
  {
    value: "PoC",
    label: "Proof of Concept",
  },
  {
    value: "PMF",
    label: "Product Market Fit",
  },

  {
    value: "C",
    label: "Customer Acquisition",
  },
  {
    value: "S",
    label: "Scaling",
  },
];
const PLATFORM_CHOICES = [
  {
    value: "D",
    label: "Desktop application",
  },
  {
    value: "S",
    label: "Service",
  },
  {
    value: "I",
    label: "IOS application",
  },
  {
    value: "W",
    label: "WebApp",
  },
  {
    value: "Nw",
    label: "No-code website",
  },

  {
    value: "Na",
    label: "No-code Application",
  },
  {
    value: "C",
    label: "'Cross Platform application",
  },
  {
    value: "A",
    label: "'Android application",
  },
  {
    value: "H",
    label: "'Hardware",
  },
];

const KEYWORD_CHOICES = [
  {
    value: "E",
    label: "E-commerce",
  },
  {
    value: "Sm",
    label: "Social media",
  },
  {
    value: "S",
    label: "SaaS",
  },
  {
    value: "M",
    label: "Magazine and News",
  },
  {
    value: "Nw",
    label: "No-code website",
  },

  {
    value: "N",
    label: "Non-Profit",
  },
  {
    value: "P",
    label: "Portfolio",
  },
  {
    value: "Ed",
    label: "Educational",
  },
  {
    value: "I",
    label: "Informational",
  },
  {
    value: "B",
    label: "Blog",
  },
  {
    value: "F",
    label: "Photo Sharing",
  },
  {
    value: "U",
    label: "Utility",
  },
  {
    value: "L",
    label: "Lifestyle",
  },
  {
    value: "Pr",
    label: "Productivity",
  },
  {
    value: "En",
    label: "Entertainment",
  },
  {
    value: "G",
    label: "Game",
  },
];

const NewProduct = () => {
  const [approxStartDate, setApproxStartDate] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState("");
  const [startup_key, setStartupKey] = useState("");
  const handleApproxStartDate = (event) => {
    setApproxStartDate(event?.$d);
  };
  const initialValues = {
    name: "",
    description: "",
    phase: "",
    productLeader: "",
    platform: "",
    keyword: "",
    live: "",
    deployed_link: "",
    repo_name: "",
    create_repo: "",
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
      setUsername(localStorage.getItem("username"));
      getLeaders();
    }
  }, [authenticated]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    values.startup_key = startup_key;

    if (authenticated) {
      try {
        axiosInstance
          .post("http://127.0.0.1:8000/product/startup/create-product/", {
            name: values.name,
            description: values.description,
            phase: values.phase,
            productLeader: values.productLeader,
            platform: values.platform,
            live: values.live,
            keyword: values.keyword,
            deployed_link: values.deployed_link,
            repo_name: values.repo_name,
            create_repo: values.create_repo,
            startup_key: values.startup_key,
          })
          .then((response) => {
            if (response.status === 201) {
              console.log("done !");
              router.push("/module/product  ");
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
            console.log(leaders);
          }
        });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setStartupKey(localStorage.getItem("startup_key"));
  }, []);
  return (
    <div className="mt-4 bg-white shadow rounded-lg p-3 sm: m-5 ">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-10">
          ⚡New Product for your Startup ?
        </h1>
      </div>
      <Container>
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <Grid container alignItems={"center"} spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6} mb={2}>
              <TextField
                label="Product Name"
                fullWidth
                value={values?.name}
                name="name"
                onChange={(event) => handleChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
              <TextField
                select
                label="Select leader ?"
                name="productLeader"
                value={values?.productLeader}
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

            <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
              <TextField
                select
                label="Select Platform ?"
                name="platform"
                value={values?.platfrom}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {PLATFORM_CHOICES.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
              <TextField
                select
                label="Select Phase ?"
                name="phase"
                value={values?.phase}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {PHASE_CHOICES.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
              <TextField
                select
                label="Select Keyword?"
                name="keyword"
                value={values?.keyword}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {KEYWORD_CHOICES.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
              <TextField
                select
                label="Select status ?"
                name="create_repo"
                value={values?.create_repo}
                fullWidth
                onChange={(event) => handleChange(event)}
              >
                {SelectStatus?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} mb={2}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                label="Repo Name"
                onChange={(event) => handleChange(event)}
                name="repo_name"
                value={values?.repo_name}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} mb={2}>
              <TextField
                style={{ width: "100%" }}
                label="Deployed Link"
                onChange={(event) => handleChange(event)}
                name="deployed_link"
                value={values?.deployed_link}
              />
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
                  label="Product description"
                  multiline
                  minRows={4}
                  onChange={(event) => handleChange(event)}
                  name="description"
                  value={values?.description}
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
