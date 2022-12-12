import React from "react";
import SidebarLayout from "src/layouts/SidebarLayout";
import ProductDetails from "../../../../components/modules/product/ProductDetails";

function ProductDetail() {
  return (
    <>
      <ProductDetails></ProductDetails>
    </>
  );
};

ProductDetail.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetail;
