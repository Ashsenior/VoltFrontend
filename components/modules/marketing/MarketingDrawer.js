import React from "react";
import { Drawer } from "@mui/material";
const MarketingDrawer = ({ open, handleClose }) => {
  const products = [
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
          sx: { width: "30%" },
        }}
        onClose={handleClose}
        open={open}
        anchor="right"
      >
        <div>
          <h4 className="text-base font-semibold my-4 mx-2">
            Research Suggestions
          </h4>

          {products.map((product) => (
            <div>
              <div key={product.id} className="bg-white p-2 border-b">
                <div className="flex w-half">
                  <img
                    className="w-20 h-20 rounded-lg"
                    src={product.img}
                    alt=""
                  />
                  <div className="flex justify-between w-full">
                    <a href="#" className="p-2 flex flex-col justify-between">
                      <h4 className="text-lg font-semibold">{product.title}</h4>
                      <span className="text-gray-500 text-md ">
                        {product.content}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default MarketingDrawer;
