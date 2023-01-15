import React from "react";
import Completed from "./Completed";
import InProgress from "./InProgress";
import Task from "./Task";

import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MarketingSocialCards from "./marketingSocialCards";

const SingleMarketing = ({ data }) => {
  const inProgress = [
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "12/10/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      youtube: "15",
      linkedIn: "18",
      instagram: "20",
    },
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "12/10/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      youtube: "15",
      linkedIn: "18",
      instagram: "20",
    },
  ];

  const completed = [
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "18/11/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      youtube: "12",
      linkedIn: "11",
      instagram: "26",
    },
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "22/12/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      youtube: "17",
      linkedIn: "10",
      instagram: "13",
    },
  ];

  const tasks = [
    {
      id: "dhfsfh102",
      title: "Title of the task",
      head: "ashsenior",
      link: "something.com link",
    },
    {
      id: "dhfsfh102",
      title: "Title of the task",
      head: "ashsenior",
      link: "something.com link",
    },
    {
      id: "dhfsfh102",
      title: "Title of the task",
      head: "ashsenior",
      link: "something.com link",
    },
  ];
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        {data?.map((social) => (
          social.social.platform==="Y"?
          <div>
            <p className=" text-base p-4 mb-3 gap-2 bg-red-50 rounded-xl font-semibold flex items-center text-red-500">
              <small className="flex mr-2 items-center text-red-500">
                <YouTubeIcon />
              </small>
              YOUTUBE
            </p>
            {social?.posts?.map((post) => (
              <MarketingSocialCards data={post} />
            ))}
          </div>
          :
          <div>
            <p className=" text-base p-4 mb-3 gap-2 bg-pink-50 rounded-xl font-semibold flex items-center text-pink-500">
              <small className="flex mr-2 items-center text-pink-500">
                <InstagramIcon />
              </small>
              INSTAGRAM
            </p>
            {social?.posts?.map((post) => (
              <MarketingSocialCards data={post} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleMarketing;
