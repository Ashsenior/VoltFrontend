import React from "react";
import ProductTimeline from "../../../components/modules/product/ProductTimeline";
import SidebarLayout from "src/layouts/SidebarLayout";
// import ProductAnalytics from "../../../components/modules/product/ProductAnalytics";
import ProductIntro from "../../../components/modules/product/ProductIntro";
import ProductFeatures from "../../../components/modules/product/ProductFeatures";
import Footer from "src/components/Footer";
import ProductIssues from "../../../components/modules/product/ProductIssues";
import dynamic from "next/dynamic";
import AssistantIcon from "@mui/icons-material/Assistant";
import { useState } from "react";

const ProductAnalytics = dynamic(
  () => import("../../../components/modules/product/ProductAnalytics"),
  { ssr: false }
);
const ProductDetails = ({ product, query }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="relative pb-5 sm:pb-0 mb-10">
        <div className="md:flex md:items-center md:justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4 ml-4">
            Strategy for Product Models {product?.name}
          </h3>
          <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-10"></div>
          <button
            onClick={handleOpen}
            type="button"
            className="rounded-full bg-gray-900 ml-2 px-4 py-2 my-3 mr-4 hover:bg-gray-700 text-purple-400 justify-center items-center"
          >
            <AssistantIcon />{" "}
            <small className="text-gray-200 font-medium ">Volt Assistant</small>
          </button>
        </div>
      </div>

      <div className="m-4">
        <ProductIntro product={product} />
        <ProductAnalytics />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-10/12 mr-4">
            <ProductFeatures features={product} query={query} />
            <ProductIssues />
          </div>
          <div className="w-full md:w-2/12 flex justify-end">
            <ProductTimeline />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;
