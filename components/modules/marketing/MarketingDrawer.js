import React from "react";
import { Drawer } from "@mui/material";
import AssistantIcon from '@mui/icons-material/Assistant';
import RefreshIcon from "@mui/icons-material/Refresh";
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NewspaperIcon from '@mui/icons-material/Newspaper';
const MarketingDrawer = ({ open, handleClose, data }) => {
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
          sx: { width: "30%", minWidth: "400px" },
        }}
        onClose={handleClose}
        open={open}
        anchor="right"
      >
        <div className="bg-gray-900 ">
          <h4 className="text-gray-400 text-lg items-center font-semibold my-2 mx-2">
            <AssistantIcon className="mr-2 text-purple-500" />
            Volt Assistant
          </h4>
          <div className="justify-center items-center p-2 w-full bg-gray-800 text-gray-400 text-lg">
            <ArticleIcon className="mr-2" />
            Recommendations
          </div>
          {data.recommendations?.slice(0,4).map((item) => (
            <div key={item.link} className="hover:bg-gray-800 my-2">
              <div key={item.id} className="p-2">
                <div className="flex ">
                  <div className="flex justify-between w-full">
                    <a href="#" className="px-2 flex flex-col justify-between">
                      <h4 className="text-md text-gray-300 xl:text-lg font-semibold">
                        {item.title}
                      </h4>
                    </a>
                  </div>

                  <img
                    className="w-20 h-20 xl:w-20 xl:h-20"
                    src={item.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="div p-2 w-full bg-gray-800 items-center text-gray-400 text-lg">
            <YouTubeIcon className="mr-2" />
            Videos
          </div>
          {data.videos?.slice(0,4).map((item) => (
            <div key={item.link} className="hover:bg-gray-800 my-2">
              <div key={item.id} className="p-2">
                <div className="flex ">
                  <div className="flex justify-between w-full">
                    <a href="#" className="px-2 flex flex-col justify-between">
                      <h4 className="text-md text-gray-400 xl:text-lg font-semibold">
                        {item.title}
                      </h4>
                      <span className="text-gray-300 pt-2 text-lg justify-center items-center ">
                        <YouTubeIcon className="mr-2" />
                        {item.channelTitle}
                      </span>
                    </a>
                  </div>

                  <img
                    className="w-20 h-20 xl:w-20 xl:h-20"
                    src={item.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="div p-2 w-full bg-gray-800 items-center text-gray-400 text-lg">
            <NewspaperIcon className="mr-2" />
            News
          </div>
          {data.news?.slice(0,4).map((item) => (
            <div key={item.link} className="hover:bg-gray-800 my-2">
              <div key={item.id} className="p-2">
                <div className="flex ">
                  <div className="flex justify-between w-full">
                    <a href="#" className="px-2 flex flex-col justify-between">
                      <h4 className="text-md text-gray-300 xl:text-lg font-semibold">
                        {item.title}
                      </h4>
                      <span className="text-gray-400 text-xs xl:text-sm ">
                        {item.brief}
                      </span>
                    </a>
                  </div>

                  <img
                    className="w-20 h-20 xl:w-20 xl:h-20"
                    src={item.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
          <button className="button p-2 w-full bg-gray-700 items-center text-indigo-400 mt-4 text-lg">
            <RefreshIcon className="mr-2" />
            Refresh Suggestions
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default MarketingDrawer;
