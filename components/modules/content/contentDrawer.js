import React from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import { Drawer } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const ContentDrawer = ({ open, handleClose }) => {
  const products = [
    {
      id: 124,
      content:
        "Some examples of content include blogs, emailers,  I must mention that you can understand React in many ways, and the most efficient way is to newsletters, social media posts, case studies, and more.",
      img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
      title: "Title of the post",
      date: "12/4/20",
      link: "https://bloggingfordevs.com/react-blogs/something.com",
      reacts: "41",
    },
    {
      id: 124,
      content:
        "Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.",
      img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
      title: "Title of the post",
      date: "12/4/20",
      link: "https://bloggingfordevs.com/react-blogs/something.com",
      reacts: "41",
    },
  ];
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { width: "30%", minWidth: "300px" },
        }}
        onClose={handleClose}
        open={open}
        anchor="right"
      >
        <div className="">
          <h4 className="text-indigo-400 text-lg items-center font-semibold my-2 mx-2">
            <AssistantIcon className="mr-2" />
            Strategy Suggestions
          </h4>

          {products.map((product, index) => (
            <div key={index} className=" my-2">
              <div key={product.id} className="p-2">
                <div className="flex w-half">
                  <div className="flex justify-between w-full">
                    <a href="#" className="px-2 flex flex-col justify-between">
                      <h4 className="text-md text-gray-500 xl:text-lg font-semibold">
                        {product.title}
                      </h4>
                      <span className="text-gray-400 text-xs xl:text-sm ">
                        {product.content}
                      </span>
                    </a>
                  </div>

                  <img
                    className="w-20 h-20 xl:w-20 xl:h-20"
                    src={product.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
          <button className="button p-2 w-full bg-indigo-100 items-center text-indigo-400 mt-4 text-lg">
            <RefreshIcon className="mr-2" />
            Refresh Suggestions
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default ContentDrawer;
