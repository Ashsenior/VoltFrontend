import { Box, Button, Grid, styled, TextField } from "@mui/material";
import { Google } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Router from "next/router";

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

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  

  .modal-container {
    display: flex;
    max-width: 60vw;
    max-height: 78vh;
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
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
    overflow: auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  
  }


  .modal-left::-webkit-scrollbar {
    display: none;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 120%;
    height: 100%;
    object-fit: fill;
    display: block;
    padding: ${theme.spacing(0)} ${theme.spacing(1)};
  }
  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  @media (max-height: 955px) {
    .modal-container {
        max-width: 70vw;
        max-height: 80vh;
    }
  }
  @media (max-height: 900px) {
    .modal-container {
        max-width: 70vw;
        max-height: 85vh;
    }
  }
  @media (max-height: 850px) {
    .modal-container {
        max-width: 70vw;
        max-height: 90vh;
    }
  }
  @media (max-height: 800px) {
    .modal-container {
        max-width: 70vw;
        max-height: 95vh;
    }
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }
    .modal-right {
      display: none;
    }
  }
`
);

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
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
                  <TextField
                    required
                    label="firstname"
                    type="name"
                    autoComplete="off"
                    name="firstname"
                    id="firstname"
                    placeholder="first name"
                  />
                  <TextField
                    required
                    label="lastname"
                    type="name"
                    autoComplete="off"
                    name="lastname"
                    id="lastname"
                    placeholder="Name"
                  />
                  <TextField
                    required
                    label="email"
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <TextField
                    required
                    label="password"
                    type="password"
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <TextField
                    required
                    label="Conform Password"
                    type="password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Conform Password"
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
                  >
                    Google
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={() => {
                      Router.push("/signin");
                    }}
                  >
                    Register
                  </Button>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mt={6}
                >
                  Already have an account? <Button>Sign In</Button>
                </Box>
              </div>
              <div className="modal-right">
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
    </>
  );
};

export default SignUp;
