import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import { Link } from "@mui/material";

import Footer from "src/components/Footer";
import ProductIntro from "../../../../components/modules/product/ProductIntro";
import ProductAnalytics from "../../../../components/modules/product/ProductAnalytics";
import ProductFeatures from "../../../../components/modules/product/ProductFeatures";
import TeamMembers from "../../../../components/modules/product/TeamMembers";
import ProductTimeline from "../../../../components/modules/product/ProductTimeline";

const ProductDetails = () => {
  return (
    <>
      <>
        <ProductIntro />
        <ProductAnalytics />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-10/12 mr-4">
            <ProductFeatures />
            <TeamMembers />
          </div>
          <div className="w-full md:w-2/12 flex justify-end">
            <ProductTimeline />
          </div>
        </div>
      </>
      <Footer></Footer>
    </>
  );
};

// ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;
