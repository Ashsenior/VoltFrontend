import * as React from "react";
import {
  Box,
  InputAdornment,
  InputLabel,
  TextField,
  Theme,
} from "@mui/material";

// interface Props {
//   id?: any;
//   label?: string;
//   placeholder: string;
//   value?: any;
//   formik?: any;
//   error?: any;
//   helperText?: any;
//   name?: string;
//   multiline?: boolean;
//   endAdornment?: any;
//   rows?: any;
//   required?: any;
//   type?: any;
//   sx?: any;
//   disabled?: boolean;
//   percent?: any;
// }

const   CustomizedInputField = ({
  label,
  id,
  placeholder,
  value,
  formik,
  error,
  helperText,
  name,
  multiline,
  rows,
  type,
  required,
  sx,
  percent,
  disabled,
  minRows
}) => {
  return (
    <Box mt={1}>
      <InputLabel
        sx={{
          fontWeight: 500,
          fontSize: "1.125rem",
          // color: theme.palette.text.secondary,
        }}
        shrink
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <TextField
        InputProps={{
          style: {
            height: rows > 0 ? "auto" : "3rem",
            borderRadius: "0.3125rem",
            fontSize: "0.9375rem",
            boxShadow: "none",
          },
          endAdornment: percent && (
            <InputAdornment position="start">%</InputAdornment>
          ),
          inputProps: percent && {
            type: "number",
            min: "0",
            max: "100",
          },
        }}
        fullWidth
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={formik?.handleChange}
        id={id}
        rows={rows}
        minRows={minRows}
        multiline={multiline}
        error={error}
        name={name}
        helperText={helperText}
        sx={{
          "& ::placeholder": {
            color: "#242424",
            fontSize: "0.9375rem",
            fontWeight: "400",
          },
          ...sx,
        }}
        type={type ? type : "text"}
        disabled={disabled}
      />
    </Box>
  );
};
export default CustomizedInputField;