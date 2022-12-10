import Head from "next/head";

import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import MarketingModuleComponent from "../../../components/marketing-module/marketing-module";
import MarketingHome from "../../../components/modules/marketing/MarketingHome";
import { useState, useEffect } from "react";
import { get } from "../../../config/axiosClient";

function MarketingModule() {
  const [data, setData] = useState([]);
  const getData = () => {
    get("todos")
      .then((res) => {
        setData(res.json);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Head>
        <title>Marketing Module</title>
      </Head>
      <Container maxWidth="lg">
        <MarketingHome />
      </Container>
      <Footer />
    </>
  );
}

MarketingModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MarketingModule;
