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
  const data = [
    {
      id: 9,
      key: "lqzh52RcJ1",
      title: "Add product",
      tag: null,
      desc: "This add products",
      completed: false,
      startDate: "2023-01-04",
      deadline: "2023-01-12",
      issue: 3,
      assigned_to: "shubhamjoshi",
      product: 6,
    },
    {
      id: 9,
      key: "lqzh52RcJ1",
      title: "Add product",
      tag: null,
      desc: "This add products",
      completed: false,
      startDate: "2023-01-04",
      deadline: "2023-01-12",
      issue: 3,
      assigned_to: "shubhamjoshi",
      product: 6,
    },
    {
      id: 9,
      key: "lqzh52RcJ1",
      title: "Add product",
      tag: null,
      desc: "This add products",
      completed: false,
      startDate: "2023-01-04",
      deadline: "2023-01-12",
      issue: 3,
      assigned_to: "shubhamjoshi",
      product: 6,
    },
    {
      id: 9,
      key: "lqzh52RcJ1",
      title: "Add product",
      tag: null,
      desc: "This add products",
      completed: false,
      startDate: "2023-01-04",
      deadline: "2023-01-12",
      issue: 3,
      assigned_to: "ashutosh",
      product: 6,
    },
    {
      id: 9,
      key: "lqzh52RcJ1",
      title: "Add product",
      tag: null,
      desc: "This add products",
      completed: false,
      startDate: "2023-01-04",
      deadline: "2023-01-12",
      issue: 3,
      assigned_to: "ashutosh",
      product: 6,
    },
  ];

  // const filter = (element) => {
  //   let temp = {};
  //   for (let e of element) {
  //     !temp[e.assigned_to]
  //       ? (temp[e.assigned_to] = [e])
  //       : temp[e.assigned_to]?.push(e);
  //   }
  //   return temp;
  // };

  // useEffect(() => {
  //   console.log(filter(data));
  // });
  function groupBy(array, property) {
    var object = {};
    array.forEach((obj, index) => {
      if (!object[array[index][property]]) object[array[index][property]] = [];
      {
        object[array[index][property]].push(array[index]);
      }
    });
    return object;
  }

  useEffect(() => {
    console.log(groupBy(data, "assigned_to"));
  });

  return <ProductDetails query={query.product_key} product={products} />;
}

ProductDetail.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetail;

ProductDetail.getInitialProps = async ({ query }) => {
  return { query };
};
