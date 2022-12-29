import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import StoreMain from "../../components/voltstore/StoreMain";
import Footer from "src/components/Footer";
import SolidGameCardDemo from "../../components/animation/card";
import MarketPlaceCard from "../../components/animation/card";
import ProductCard from "../../components/animation/product-card";

const VoltStore = () => {
  return (
    <div className="m-2">
      <StoreMain />
      <Footer />
    </div>
  );
};

VoltStore.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default VoltStore;
