import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Box, IconButton, InputAdornment, InputLabel, TextField, } from "@mui/material";


const PasswordField  = ({
  label,
  placeholder,
  value,
  error,
  helperText,
  id,
  name,
  formik,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <InputLabel 
      sx={{
    fontWeight: 500,
    fontSize: "1.125rem",
    }} 
    shrink htmlFor={id}>
        {label}
      </InputLabel>

      <TextField
      sx={{
        "& ::placeholder": {
          color: "#242424",
          fontSize: "0.9375rem",
          fontWeight: "400",
        },
      }}
        fullWidth
        placeholder={placeholder}
        onChange={formik.handleChange}
        name={name}
        error={error}
        value={value}
        id={id}
        helperText={helperText}
        type={showPassword ? "text" : "password"}
        InputProps={{
          style: {
            height: "3rem",
            borderRadius: "0.3125rem",
            fontSize: "0.9375rem",
            // border: "0.0625rem solid #EFEFEF",
            boxShadow: "none",
          },
          endAdornment: (
            <InputAdornment position="end">
              <Box>
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon
                      sx={{ color: "#949494", width: "26.5px", height: "22px" }}
                    />
                  ) : (
                    <VisibilityOutlinedIcon
                      sx={{ color: "#949494", width: "26.5px", height: "22px" }}
                    />
                  )}
                </IconButton>
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default PasswordField;