import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import ProductHome from "../../../components/modules/product/ProductHome";
import ProductDetails from "../../../components/modules/product/ProductDetails";
import FeatureDetails from "../../../components/modules/product/FeatureDetails";

function ProductModule() {
  return (
    <>
      <Head>
        <title>Product Module</title>
      </Head>

      <ProductHome />

      <Container maxWidth="lg">
        <ProductDetails tDetails></ProductDetails>
        <FeatureDetails></FeatureDetails>
      </Container>
      <Footer />
    </>
  );
}

ProductModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductModule;
