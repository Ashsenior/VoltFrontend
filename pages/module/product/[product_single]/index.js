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
      cat: "Design",
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
      cat: "Code",
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
      cat: "Test",
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
      cat: "Test",
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
      cat: "Test",
      assigned_to: "ashutosh",
      product: 6,
    },
  ];

  function groupBy(array, property) {
    var object = {};
    array.forEach((obj, index) => {
      if (!object[array[index][property]]) object[array[index][property]] = [];
      {
        object[array[index][property]].push(array[index]);
      }
    });
    // return object;
    let tempArray = [];

    Object.keys(object).forEach(function (key) {
      let tempObj = {};
      tempObj.name = key;
      let dataArray = [];
      object[key].forEach((item) => {
        let temp = {};
        let startDate = item.startDate;
        let endDate = item.deadline;
        temp.x = item.cat;
        temp.y = [startDate, endDate];
        dataArray.push(temp);
      });
      tempObj.data = dataArray;
      tempArray.push(tempObj);
    });
    return tempArray;
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
