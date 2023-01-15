import Head from "next/head";
import SidebarLayout from "src/layouts/SidebarLayout";
import Footer from "src/components/Footer";
import ProductHome from "../../../components/modules/product/ProductHome";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import StartupContext from "../../../context/StartupContext";
import axiosInstance from "../../../src/axiosAPi";

function ProductModule() {
  const [products, setProducts] = useState([]);
  const context = useContext(StartupContext);
  useEffect(() => {
    var access_token = localStorage.getItem("access_token");
    var refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      getProductsData();
    }
  }, []);
  const getProductsData = () => {
    try {
      axiosInstance
        .get("http://127.0.0.1:8000/product/startup/get-products", {
          params: {
            startup_key: context?.startup_key,
          },
        })
        .then((response) => {
          if (response?.status == 200) {
            console.log(response);
            setProducts(response.data);
          }
        });
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <Head>
        <title>Product Module</title>
      </Head>
      <ProductHome products={products}  />
    </>
  );
}

ProductModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductModule;
