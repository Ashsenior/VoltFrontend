import React from "react";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Router, useRouter } from "next/router";
import ContentStatus from "./ContentStatus";
import ContentDrawer from "./contentDrawer";
import { useState } from "react";
const ContentHome = ({ content }) => {
  const Router = useRouter();
  const tabs = [
    { name: "Active Content", href: "#", current: false },
    { name: "Content", href: "#", current: false },
    { name: "Submitted", href: "#", current: false },
  ];

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    <div className="bg-gray-800">
      {/* Link Buttons */}
      <Container maxWidth="w-full py-4">
        <div className="relative pb-5 sm:pb-0">
          <div className="md:flex md:items-center md:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-300">
              Strategy for Business Models
            </h3>
            <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Share with friends
              </button>
              <button
                onClick={() => Router.push("/module/content/create_content")}
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create new Strategy
              </button>
              <button
                onClick={handleOpen}
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Idea
              </button>
              <ContentDrawer handleClose={handleClose} open={open} />
            </div>
          </div>
        </div>
      </Container>

      <ContentStatus content={content} />
    </div>
  );
};

export default ContentHome;
