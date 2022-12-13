import { Container, MenuItem, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import LeaderBoardTable from "./table";

const User = () => {
  const [value, setValue] = useState("");

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
  const handleChange = (event) => {
    // name = event.target.name;
    // value = event.target.value;
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
        {users?.map((option) => (
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

export default User;
