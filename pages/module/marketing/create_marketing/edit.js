import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import NewMarketing from "../../../../components/modules/marketing/create_marketing/NewMarketing";

function CreateMarketing() {
  return (
    <>
      <Head>
        <title>Create Marketing</title>
      </Head>

      <Container maxWidth="lg">
        <NewMarketing></NewMarketing>
      </Container>
      <Footer />
    </>
  );
}

CreateMarketing.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateMarketing;
