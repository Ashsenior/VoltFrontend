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
    <>
      <div className="px-4">
      <TextField
        select
        label="Select category?"
        name="users"
        value={value}
        onChange={(event) => handleChange(event)}
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
      >
        {corporate?.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      </div>
      <LeaderBoardTable />
    </>
  );
};

export default Corporates;
