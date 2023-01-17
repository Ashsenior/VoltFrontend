import React from "react";
import ProductTimeline from "../../../components/modules/product/ProductTimeline";
import SidebarLayout from "src/layouts/SidebarLayout";
// import ProductAnalytics from "../../../components/modules/product/ProductAnalytics";
import ProductIntro from "../../../components/modules/product/ProductIntro";
import ProductFeatures from "../../../components/modules/product/ProductFeatures";
import Footer from "src/components/Footer";
import ProductIssues from "../../../components/modules/product/ProductIssues";
import dynamic from "next/dynamic";

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
      <div className="p-4 bg-gray-800">
        <ProductIntro product={product} />
        <ProductAnalytics />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mr-4">
            <ProductFeatures features={product} query={query} />
            <ProductIssues issues={product?.issues} />
          </div>
          <div className="w-full md:w-3/12 flex justify-end">
            <ProductTimeline />
          </div>
        </div>
      </div>
    </>
  );
};

ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;
