import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import Footer from "src/components/Footer";
import ProductHome from "../../../components/modules/product/ProductHome";

function ProductModule() {
  return (
    <>
      <Head>
        <title>Product Module</title>
      </Head>
      <ProductHome />
      <Footer />
    </>
  );
}

ProductModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductModule;
