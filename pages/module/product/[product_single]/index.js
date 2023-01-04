import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useEffect } from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import ProductDetails from "../../../../components/modules/product/ProductDetails";
import StartupContext from "../../../../context/StartupContext";
import axiosInstance from "../../../../src/axiosAPi";

function ProductDetail({ query }) {
  const [products, setProducts] = useState([]);
  const context = useContext(StartupContext);
  const router = useRouter();
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
        .get(
          `http://127.0.0.1:8000/product/startup/get-product?product_key=${query.product_key}`
        )
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
  return <ProductDetails query={query.product_key} product={products} />;
}

ProductDetail.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetail;

ProductDetail.getInitialProps = async ({ query }) => {
  return { query };
};
