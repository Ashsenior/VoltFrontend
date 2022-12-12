import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import NewContent from "../module/content/create_content/NewContent.js";

function CreateContent() {
  return (
    <>
      <Head>
        <title>Create Content</title>
      </Head>

      <Container maxWidth="lg"><NewContent></NewContent></Container>
      <Footer />
    </>
  );
}

CreateContent.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateContent;
