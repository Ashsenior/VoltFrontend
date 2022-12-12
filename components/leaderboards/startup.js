import { Container, MenuItem, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import LeaderBoardTable from "./table";

const Startups = () => {
  const [value, setValue] = useState("");

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
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <TextField
        select
        label="Select startup?"
        name="users"
        value={value}
        onChange={(event) => handleChange(event)}
        sx={{ width: "20%" }}
      >
        {startups?.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <LeaderBoardTable />
    </Container>
  );
};

export default Startups;
