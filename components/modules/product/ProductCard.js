import React from "react";
import { VscPreview } from "react-icons/vsc";
import {
  BsFillTrashFill,
  BsFillPeopleFill,
  BsFillStopwatchFill,
} from "react-icons/bs";
import { MdFeaturedPlayList } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { Button, Container } from "@mui/material";
import Router from "next/router";
import { checkPlatformChoices } from "../../../utils/data-modifiers";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import TagIcon from "@mui/icons-material/Tag";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import MarketingDrawer from "../marketing/MarketingDrawer";
import { useState } from "react";

const ProductCard = ({ products }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className=" flex md:mt-0 md:absolute md:right-5">
        <MarketingDrawer handleClose={handleClose} open={open} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:mx-4 p-4 rounded-lg mt-7 bg-gray-700 ">
        {products?.map((productCard) => (
          <>
            <div className="w-full flex bg-gray-900 text-gray-300 p-4 rounded-lg shadow-xl mx-auto">
              <div className="w-1/3 flex flex-col justify-center items-center ">
                <div
                  className="cursor-pointer "
                  onClick={() =>
                    Router.push(
                      `/module/product/product-single?product_key=${productCard.key}`
                    )
                  }
                >
                  <img
                    className="flex w-20 h-20 m-1 rounded-full mx-auto"
                    src={"http://127.0.0.1:8000" + productCard.logo}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-2/3 flex flex-col justify-between ml-2">
                <div className="flex items-center justify-between px-2 pb-2">
                  <h4
                    onClick={() =>
                      Router.push(
                        `/module/product/product-single?product_key=${productCard.key}`
                      )
                    }
                    className="text-base font-semibold cursor-pointer"
                  >
                    {productCard.name}
                  </h4>
                  <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                    <AssignmentIndOutlinedIcon />
                    {productCard.productLeader}
                  </span>
                </div>
                <div className="items-center justify-between gap-2">
                  <span class="bg-gray-100 gap-1 text-gray-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                    <LinkIcon />
                    {productCard?.deployed_link
                      ? productCard?.deployed_link
                      : "no deployed link"}
                  </span>
                  <span class="bg-gray-100 gap-1 text-gray-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                    <AssignmentIndOutlinedIcon />4 members
                  </span>
                  <span class="bg-gray-100 gap-1 text-gray-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                    <TagIcon />
                    {productCard.keyword}
                  </span>
                  <span class="bg-gray-100 gap-1 text-gray-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                    <CodeIcon />
                    {checkPlatformChoices(productCard.platform)}
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
