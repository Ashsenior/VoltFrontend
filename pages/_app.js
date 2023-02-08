import Router from "next/router";
import "../styles/globals.css";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import ThemeProvider from "src/theme/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { SidebarProvider } from "src/contexts/SidebarContext";
import { AuthProvider } from "../context/AuthContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import StartupContext, { AppWrapper } from "../context/StartupContext";
import { useState } from "react";
import { useEffect } from "react";
import GithubAuthContext from "../context/GithubAuthContext";
import { LeaderContextProvider } from "../context/LeaderContext";
import ContextProviderWrapper from "../context/ContextProvider";

function App(props) {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.getItem("key");
  }
  const { Component, pageProps } = props;
  const [startup_key, setStartupKey] = useState(
    typeof window !== "undefined" ? localStorage.getItem("startup_key") : ""
  );
  const [client_id, setClientId] = useState(
    typeof window !== "undefined" ? localStorage.getItem("client_id") : ""
  );
  const [state, setState] = useState(
    typeof window !== "undefined" ? localStorage.getItem("state") : ""
  );
  const getLayout = Component.getLayout ?? ((page) => page);
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setStartupKey(localStorage.getItem("startup_key"));
    }
  }, []);

  return (
    <ContextProviderWrapper>
      <AuthProvider>
        <StartupContext.Provider value={{ startup_key, setStartupKey }}>
          <GithubAuthContext.Provider
            value={{ client_id, setClientId, state, setState }}
          >
            <SidebarProvider>
              <ThemeProvider>
                <LeaderContextProvider>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <CssBaseline />
                    {getLayout(<Component {...pageProps} />)}
                  </LocalizationProvider>
                </LeaderContextProvider>
              </ThemeProvider>
            </SidebarProvider>
          </GithubAuthContext.Provider>
        </StartupContext.Provider>
      </AuthProvider>
    </ContextProviderWrapper>
  );
}

export default App;
