import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import Footer from "src/components/Footer";
import ProductHome from "../../../components/modules/product/ProductHome";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import StartupContext from "../../../context/StartupContext";
import axiosInstance from "../../../src/axiosAPi";
import { Context } from "../../../context/ContextProvider";
import { getProducts } from "../../../utils/apiCalls";
import { CleaningServices } from "@mui/icons-material";

function ProductModule() {
  const [products, setProducts] = useState([]);
  const startupContext = useContext(Context)?.Startup;

  const getProductsData = () => {
    let params = {
      startup_key: startupContext?.state?.startupKey?.startupKey
        ? startupContext?.state?.startupKey?.startupKey
        : localStorage.getItem("startup_key"),
    };
    getProducts(params).then((res) => {
      console.log(res.products);
      setProducts(res.products);
    });
  };

  useEffect(() => {
    getProductsData();
  }, [startupContext]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <Head>
        <title>Product Module</title>
      </Head>
      <ProductHome products={products} />
    </>
  );
}

ProductModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductModule;
