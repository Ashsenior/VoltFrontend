import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import React from "react";
import { Stack } from "@mui/system";

const LeaderboardFilter = () => {
  const users = [
    {
      label: "overall",
      value: "overall",
    },
    {
      label: "market",
      value: "market",
    },
    {
      label: "product",
      value: "product",
    },
    {
      label: "strategy",
      value: "strategy",
    },
    {
      label: "research",
      value: "research",
    },
  ];
  const startups = [
    {
      label: "overall",
      value: "overall",
    },
    {
      label: "marketing",
      value: "marketing",
    },
    {
      label: "product",
      value: "product",
    },
    {
      label: "research",
      value: "research",
    },
  ];
  const corporate = [
    {
      label: "mentorship",
      value: "mentorship",
    },
    {
      label: "hawk",
      value: "hawk",
    },
    {
      label: "pioneer",
      value: "pioneer",
    },
  ];

  const initialValues = {
    users: "",
    startups: "",
    corporate: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // name = event.target.name;
    // value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            justifyContent={"space-between"}
            alignItems="center"
            direction={"row"}
            spacing={2}
          >
            <TextField
              select
              label="Select user ?"
              name="users"
              value={values?.users}
              fullWidth
              onChange={(event) => handleChange(event)}
            >
              {users?.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select startup ?"
              name="startups"
              value={values?.startups}
              fullWidth
              onChange={(event) => handleChange(event)}
            >
              {startups?.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select corporate ?"
              name="corporate"
              value={values?.corporate}
              fullWidth
              onChange={(event) => handleChange(event)}
            >
              {corporate?.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LeaderboardFilter;
