import React from "react";
import ProductTimeline from "../../../components/modules/product/ProductTimeline";
import SidebarLayout from "src/layouts/SidebarLayout";
// import ProductAnalytics from "../../../components/modules/product/ProductAnalytics";
import ProductIntro from "../../../components/modules/product/ProductIntro";
import ProductFeatures from "../../../components/modules/product/ProductFeatures";
import Footer from "src/components/Footer";
import ProductIssues from "../../../components/modules/product/ProductIssues";
import dynamic from "next/dynamic";
const ProductAnalytics = dynamic(
  () => import("../../../components/modules/product/ProductAnalytics"),
  { ssr: false }
);
const ProductDetails = ({ product, query }) => {
  return (
    <>
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
