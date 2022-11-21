import {
  Box,
  InputLabel,
  TextField,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";


const DatePickerCustom = ({
  formik,
  fieldName,
  error,
  helperText,
  label,
  openTo,
  disabled,
  defaultValue,
  maxDate,
  inputFormat,
  minDate,
}) => {
  const [dateValue, setDateValue] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (defaultValue) {
      formik.setFieldValue(fieldName, defaultValue);
      setDateValue(defaultValue);
    }
  }, [defaultValue]);
  return (
    <Box
      sx={{
        margin: fullScreen ? 0 : "1rem 0",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <InputLabel
          sx={{
            fontSize: "0.875rem",
            color: theme.palette.text.secondary,
            fontWeight: 500,
            marginBottom: "0.5rem",
          }}
        >
          {label}
        </InputLabel>
        <DesktopDatePicker
          value={dateValue}
          onChange={(newValue) => {
            formik.setFieldValue(fieldName, newValue);
            setDateValue(newValue);
          }}
          showToolbar={false}
          inputFormat={inputFormat ? inputFormat : "yyyy/MM/dd"}
          disabled={disabled}
          maxDate={maxDate}
          minDate={minDate}
          renderInput={(params) => (
            <TextField
              {...params}
              name={fieldName}
              id={fieldName}
              fullWidth
              size="small"
              error={error}
              disabled={disabled}
              helperText={helperText}
              onInput={(event) => {
                event.target.value = "";
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "48px",
                  borderRadius: "5px",
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerCustom;