import React from "react";
import { Box, Snackbar, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastMessage = ({
  open,
  severity,
  message,
  messages,
  seconds,
  handleClose,
}) => {
  const handleCloseButton = () => {
    handleClose();
  };
  return messages?.length ? (
    <Box>
      <Box>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          onClose={handleCloseButton}
        >
          <Alert onClose={handleCloseButton} severity={severity}>
            {messages?.map((message, msgIndex) => (
              <Typography
                variant="body1"
                component="p"
                key={msgIndex}
              ></Typography>
            ))}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  ) : (
    <Box>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={severity !== "error" ? seconds : undefined}
        onClose={handleCloseButton}
      >
        <Alert onClose={handleCloseButton} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ToastMessage;
