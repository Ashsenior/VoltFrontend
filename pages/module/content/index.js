import Head from "next/head";

import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import ContentHome from "../../../components/modules/content/ContentHome";

function ContentModule() {
  return (
    <>
      <Head>
        <title>Content Module</title>
      </Head>

      <ContentHome />
      <Container maxWidth="lg"></Container>
      <Footer />
    </>
  );
}

ContentModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ContentModule;
