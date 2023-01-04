import React from "react";
import CompletedContent from "./CompletedContent";
import InProgressContent from "./InProgressContent";
import ContentTask from "./ContentTask";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";

import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const ContentStatus = ({ content }) => {
  const Router = useRouter();

  const completed = [
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "18/11/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      marketing: "7",
      research: "14",
    },
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "22/12/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      marketing: "8",
      research: "11",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 xl:mx-4 p-2 mt-7">
        <div className="p-1 rounded-lg">
          <p className=" text-base py-4 gap-2 font-semibold flex items-center text-gray-500">
            <AssignmentOutlinedIcon />
            ACTIVE TASKS
          </p>
          {content?.tasks?.map((data) => (
            <InProgressContent key={data.id} data={data}></InProgressContent>
          ))}
        </div>
        <div className=" p-1 rounded-md">
          <p className=" text-base py-4 gap-2 items-center font-semibold flex text-gray-500">
            <VerifiedOutlinedIcon />
            CONTENT 2
          </p>

          {completed.map((data) => (
            <CompletedContent key={data.id} data={data}></CompletedContent>
          ))}
        </div>
        <div className=" p-1 rounded-md">
          <p className=" text-base p-4 items-center gap-2 bg-gray-600 rounded-xl font-semibold flex text-white">
            <SaveAsOutlinedIcon />
            DRAFT 3
          </p>
          {content?.drafts?.map((data) => (
            <ContentTask key={data.id} data={data}></ContentTask>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContentStatus;
