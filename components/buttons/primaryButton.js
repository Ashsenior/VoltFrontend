import { LoadingButton } from "@mui/lab";
import { Theme, Typography } from "@mui/material";
import React from "react";

const DarkButton= ({
  text,
  onClick,
  variant,
  sx,
  loading,
  disabled,
  type,
}) => {
  return (
    <LoadingButton
      onClick={onClick}
      variant={"contained"}
      type={type ? type : "submit"}
      sx={{
        boxShadow: "none",
        height: "48px",
        backgroundColor: '#00005C !important',
      }}
      loading={loading}
      disabled={loading || disabled}
      fullWidth
    >
      <Typography
        fontSize={"14px"}
        fontWeight={700}
        variant="body1"
        component={"p"}
        textTransform={"none"}
      >
        {text}
      </Typography>
    </LoadingButton>
  );
};

export default DarkButton;