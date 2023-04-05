import Head from "next/head";

import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import StrategyHome from "../../../components/modules/strategy/StrategyHome";
import { useEffect, useState } from "react";
import axiosInstance from "../../../src/axiosAPi";
import { useRouter } from "next/router";
import { useContext } from "react";
import StartupContext from "../../../context/StartupContext";
import { getAllStrategy, getPeople } from "../../../utils/apiCalls";

function StrategyModule() {
  const context = useContext(StartupContext);
  const [strategy, setStrategy] = useState([]);
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      console.log("index", refresh_token);
      getAllStrategy(context.startup_key).then((res) => {
        setStrategy(res);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Strategy Module</title>
      </Head>
      <StrategyHome strategy={strategy} />

      <Container maxWidth="lg"></Container>
    </>
  );
}

StrategyModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default StrategyModule;
