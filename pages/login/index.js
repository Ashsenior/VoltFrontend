import { Box, Button, Grid, styled, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Router from "next/router";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Context } from "../../context/ContextProvider";
import {
  ErrorToast,
  SuccessToast,
} from "../../components/common/toasts/toast-helpers";
const Wrapper = styled(Box)(
  ({ theme }) => `
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .login-modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  

  .login-modal-container {
    display: flex;
    max-width: 60vw;
    max-height: 50vh;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    transition-duration: 0.3s;
    background: #fff;
  }
  .form-error {
    font-size: 0.9rem;
    padding: 0;
    margin: 0;
    color: #b22b27;
  }
  .login-modal-desc {
    margin: 6px 0 30px 0;
  }
  .login-modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
    overflow: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  .login-modal-left::-webkit-scrollbar {
    display: none;
  }

  .login-modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .login-modal-right img {
    width: 120%;
    height: 100%;
    object-fit: fill;
    display: block;
    padding: ${theme.spacing(0)} ${theme.spacing(1)};
  }
  .login-modal.is-open .login-modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  @media (max-height: 955px) {
    .login-modal-container {
        max-width: 70vw;
        max-height: 80vh;
    }
  }
  @media (max-height: 900px) {
    .login-modal-container {
        max-width: 70vw;
        max-height: 85vh;
    }
  }
  @media (max-height: 850px) {
    .login-modal-container {
        max-width: 70vw;
        max-height: 90vh;
    }
  }
  @media (max-height: 800px) {
    .login-modal-container {
        max-width: 70vw;
        max-height: 95vh;
    }
  }
  @media (max-width: 750px) {
    .login-modal-container {
      max-width: 90vw;
    }
    .login-modal-right {
      display: none;
    }
  }
`
);

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const context = useContext(Context)?.Toast;

  const { isAuthenticated, error, login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/home");
      SuccessToast("Logged in successfully", context);
    }
  }, [error, isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    login(username, password);
  };

  return (
    <Wrapper>
      <div className="container mx-auto">
        <div className="login-modal">
          <div className="login-modal-container">
            <div className="login-modal-left">
              <Grid item paddingBottom={4} paddingLeft={1}>
                <Typography variant="h3" component="h3" gutterBottom>
                  Welcome!
                </Typography>
                <Typography variant="subtitle2">
                  To the startic field website an eco-system for startup.
                </Typography>
              </Grid>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "97%" },
                }}
                noValidate
                autoComplete="off"
              >
                <InputLabel htmlFor="username">Username</InputLabel>
                <OutlinedInput
                  required
                  label="username"
                  type="username"
                  autoComplete="off"
                  name="username"
                  id="username"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  required
                  name="password"
                  fullWidth
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={2}
                mb={2}
                ml={1}
              >
                <Button
                  variant="contained"
                  color={"secondary"}
                  endIcon={<Google />}
                  style={{ opacity: 0, pointerEvents: "none" }}
                >
                  Google
                </Button>
                <Button
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  variant="contained"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Log in
                </Button>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={6}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't have an account?{" "}
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </div>
            <div className="login-modal-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/static/images/placeholders/covers/right_side.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
