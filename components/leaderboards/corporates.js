import { Container, MenuItem, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import LeaderBoardTable from "./table";

const Corporates = () => {
  const [value, setValue] = useState("");

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container>
      <TextField
        select
        label="Select corporates?"
        name="users"
        value={value}
        onChange={(event) => handleChange(event)}
        sx={{ width: "20%" }}
      >
        {corporate?.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <LeaderBoardTable />
    </Container>
  );
};

export default Corporates;
