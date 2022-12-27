import React from "react";
import CompletedStrategy from "./CompletedStrategy";
import InProgressStrategy from "./InProgressStrategy";
import StrategyTask from "./StrategyTask";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const StrategyStatus = () => {
  const inProgress = [
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "12/10/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      marketing: "8",
      research: "11",
    },
    {
      id: "dhfsfh102",
      title: "Campaign Title Something",
      head: "ashsenior",
      deadline: "12/10/2022",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?",
      marketing: "5",
      research: "7",
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

  const tasks = [
    {
      id: "dhfsfh102",
      title: "Title strategy",
      head: "ashsenior",
      link: "something.com link",
    },
    {
      id: "dhfsfh102",
      title: "Title strategy",
      head: "ashsenior",
      link: "something.com link",
    },
    {
      id: "dhfsfh102",
      title: "Title strategy",
      head: "ashsenior",
      link: "something.com link",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 xl:mx-4 p-2 mt-7">
        <div className="p-1">
          <p className=" text-base p-4 gap-2 bg-indigo-500 rounded-xl font-semibold flex items-center text-indigo-50">
            <DonutLargeOutlinedIcon />
            IN PROGRESS 2
          </p>
          {completed.map((data) => (
            <InProgressStrategy key={data.id} data={data}></InProgressStrategy>
          ))}
        </div>
        <div className=" p-1 ">
          <p className=" text-base p-4 bg-green-500 gap-2 items-center rounded-xl font-semibold flex p-1 text-green-50">
            <AssignmentTurnedInOutlinedIcon />
            COMPLETED 2
          </p>
          {inProgress.map((data) => (
            <CompletedStrategy key={data.id} data={data}></CompletedStrategy>
          ))}
        </div>
        <div className=" p-1">
          <p className=" text-base p-4 items-center gap-2 border bg-gray-700 rounded-xl font-semibold flex p-1 text-gray-50">
            <VerifiedOutlinedIcon />
            CLOSED 3
          </p>
          {tasks.map((data) => (
            <StrategyTask key={data.id} data={data}></StrategyTask>
          ))}
        </div>
      </div>
    </>
  );
};

export default StrategyStatus;
