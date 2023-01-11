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
import MarketingDrawer from "../marketing/MarketingDrawer";
import { useState } from "react";

const ProductCard = ({ products }) => {
  const productCards = [
    {
      name: "Product name",
      id: "11",
      date: "10/10/2022",
      user: "username",
      feature: "15",
      members: "12",
      logo: "https://st4.depositphotos.com/16583842/30033/v/600/depositphotos_300337104-stock-illustration-initial-logo-design-inspirations-hexagonal.jpg",
    },
    {
      name: "Product name",
      id: "12",
      date: "10/10/2022",
      user: "username",
      feature: "15",
      members: "12",
      logo: "https://img.freepik.com/free-vector/orange-logo-arrow-shape_1043-53.jpg?w=2000",
    },
    {
      name: "Company name",
      id: "13",
      date: "10/10/2022",
      user: "username",
      feature: "15",
      members: "12",
      logo: "https://t3.ftcdn.net/jpg/02/98/33/68/360_F_298336858_vl1uRUh2rRColK9p9Igz5CqfV6DYgxDS.jpg",
    },
    {
      name: "Company name",
      id: "14",
      date: "10/10/2022",
      user: "username",
      feature: "15",
      members: "12",
      logo: "https://st3.depositphotos.com/27847728/33929/v/600/depositphotos_339295410-stock-illustration-initial-alphabet-logo-design-vector.jpg",
    },
    {
      name: "Company name",
      id: "15",
      date: "10/10/2022",
      user: "username",
      feature: "15",
      members: "12",
      logo: "https://www.vector-eps.com/wp-content/gallery/corporate-logo-vector-icons/corporate-logo-vector-icon4.jpg",
    },
    {
      name: "Company name",
      id: "16",
      date: "10/10/2022",
      user: "username",
      feature: "15",
      members: "12",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AxmjlHpun8-I139PMcKiycbltR8J3hjd9Q&usqp=CAU",
    },
  ];

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 bg-gray-50">
        {products?.products?.map((productCard) => (
          <>
            <div className="w-full flex bg-white p-2 rounded-lg mx-auto">
              <div className="w-1/3 flex flex-col border-r">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    Router.push(
                      `/module/product/product-single?product_key=${productCard.key}`
                    )
                  }
                >
                  <img
                    className="flex w-28 m-1 rounded-md mx-auto"
                    src={productCard.logo}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-2/3 flex flex-col justify-between ml-2">
                <div className="flex items-center justify-between">
                  <h4
                    onClick={() =>
                      Router.push(
                        `/module/product/product-single?product_key=${productCard.key}`
                      )
                    }
                    className="text-base font-semibold cursor-pointer"
                  >
                    {productCard.name}
                    <br />
                    <span>
                      {productCard?.deployed_link
                        ? productCard?.deployed_link
                        : "-"}
                    </span>
                  </h4>

                  <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    @{productCard.productLeader}
                  </p>
                </div>
                <h6 className="text-xs font-medium mb-4">
                  {checkPlatformChoices(productCard.platform)}
                </h6>
                <p className="text-sm font-light mb-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                  incidunt possimus praesentium in, ea eum. adipisicing elit.
                </p>
                <div className="grid grid-cols-2 items-center justify-between gap-2 mx-5">
                  <div className="flex items-center gap-2">
                    <BsFillPeopleFill></BsFillPeopleFill>
                    <p>4 Members</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsFillStopwatchFill></BsFillStopwatchFill>
                    <p>10 Days</p>
                  </div>
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
