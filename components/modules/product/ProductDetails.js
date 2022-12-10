import React from "react";
import FeaturesCard from "../../../components/modules/product/FeaturesCard";
import ProductTimeline from "../../../components/modules/product/ProductTimeline";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Link } from "@mui/material";
import ProductAnalytics from "../../../components/modules/product/ProductAnalytics";
import TeamMembers from "../../../components/modules/product/TeamMembers";
import FeatureDetails from "../../../components/modules/product/FeatureDetails";
import ProductIntro from "../../../components/modules/product/ProductIntro";
import ProductFeatures from "../../../components/modules/product/ProductFeatures";
import Footer from "src/components/Footer";

const ProductDetails = () => {
  return (
    <>
      <>
        <ProductIntro></ProductIntro>
        <ProductAnalytics></ProductAnalytics>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-10/12 mr-4">
            <ProductFeatures></ProductFeatures>
            <TeamMembers />
          </div>
          <div className="w-full md:w-2/12 flex justify-end">
            <ProductTimeline></ProductTimeline>
          </div>
        </div>
      </>
      <Footer></Footer>
    </>
  );
};

ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;
