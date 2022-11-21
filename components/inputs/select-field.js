import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { MenuItem, Theme } from "@mui/material";

const CustomizedSelectField = ({
  label,
  id,
  value,
  error,
  onChange,
  type,
  helperText,
  name,
  multiline,
  rows,
  placeholder,
  sx,
  className,
  disabled,
  data,
  fromConfig,
  fromInvoices,
}) => {
  return (
    <Box mt={1}>
      <InputLabel
        sx={{
          fontWeight: 500,
          fontSize: "0.875rem",
          // color: theme.palette.text.secondary,
          marginBottom: "6px",
        }}
      >
        {label}
      </InputLabel>
      <TextField
        InputProps={{
          style: {
            height: rows > 0 ? "auto" : "3rem",
            borderRadius: "0.3125rem",
            fontSize: "0.9375rem",
            // border: "0.0625rem solid #EFEFEF",
            boxShadow: "none",
          },
        }}
        fullWidth
        select
        onChange={onChange}
        type={type ? type : "text"}
        value={value}
        defaultValue=" "
        id={id}
        rows={rows}
        multiline={multiline}
        error={error}
        name={name}
        helperText={helperText}
        disabled={disabled}
        sx={sx}
      >
        {/* <MenuItem disabled value=" ">
          {placeholder}
        </MenuItem> */}
        {data?.map((option, index) => (
          <MenuItem
            key={index}
            value={option?.value}
          >
              { option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
export default CustomizedSelectField;
