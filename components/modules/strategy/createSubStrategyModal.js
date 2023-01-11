import { Box, Dialog, TextField, MenuItem, Grid } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import StartupContext from "../../../context/StartupContext";
import axiosInstance from "../../../src/axiosAPi";
import { useRouter } from "next/router";

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

const CreateSubStrategyModal = ({ handleClose, open, slug }) => {
  const [idea, setIdea] = useState(false);
  const context = useContext(StartupContext);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [leaders, setLeaders] = useState([]);
  const router = useRouter();
  const [values, setValues] = useState({
    marketingLeader: "",
    marketingTitle: "",
    strategy_slug: slug,
    startup_key: context?.startup_key,
  });

  console.log(slug);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // name = event.target.name;
    // value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const onChangeIdea = () => {
    setIdea(!idea);
  };
  const getLeaders = () => {
    try {
      axiosInstance
        .get("/strategy/startup/get-team-members", {
          //   params: { startup_key: localStorage.getItem("startup_key") },
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
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      setAuthenticated(true);
      getLeaders();
    }
  }, [authenticated]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (authenticated) {
      try {
        axiosInstance
          .post("http://127.0.0.1:8000/marketing/startup/create-marketing/", {
            marketingLeader: values.marketingLeader,
            marketingTitle: values.marketingTitle,
            strategy_slug: slug,
            startup_key: context?.startup_key,
          })
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
              console.log("done !");
              //   router.push("/module/team");
              setLoading(false);
            } else {
              setMessage(
                "Some error occurred while completing your connection request!"
              );
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
    <div>
      <Dialog sx={{}} onClose={handleClose} open={open}>
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <div style={{ minWidth: "500px" }} className="p-10">
            <div>
              <label
                onClick={handleClose}
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <div>
                <div class="modal-body">
                  <div className="flex items-center justify-start gap-2 mt-4">
                    <div className="flex flex-col items-start gap-1">
                      <Box
                        className="my-4"
                        sx={{
                          maxWidth: "100%",
                        }}
                      >
                        <form onSubmit={(event) => handleFormSubmit(event)}>
                          <Grid container alignItems={"center"} spacing={1}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <TextField
                                label="Strategy Name"
                                fullWidth
                                value={values?.marketingTitle}
                                name="marketingTitle"
                                onChange={(event) => handleChange(event)}
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <TextField
                                select
                                label="Select Category ?"
                                name="category"
                                value={values?.category}
                                fullWidth
                                onChange={(event) => handleChange(event)}
                              >
                                {SelectCategory.map((option) => (
                                  <MenuItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={6} mt={3}>
                              <TextField
                                select
                                label="Select leader ?"
                                name="marketingLeader"
                                value={values?.marketingLeader}
                                fullWidth
                                onChange={(event) => handleChange(event)}
                              >
                                {leaders?.map((option) => (
                                  <MenuItem
                                    key={option.username}
                                    value={option.username}
                                  >
                                    {option.username}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>
                          </Grid>
                        </form>
                      </Box>
                    </div>
                  </div>

                  <div class="modal-footer flex justify-between">
                    <button
                      type="submit"
                      class="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600 rounded-sm border-0"
                    >
                      Create Strategy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateSubStrategyModal;
