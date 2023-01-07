import React from "react";
import CompletedStrategy from "./CompletedStrategy";
import InProgressStrategy from "./InProgressStrategy";
import StrategyTask from "./StrategyTask";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const StrategyStatus = ({ strategy }) => {
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
      <div className=" bg-gray-800 grid grid-cols-1 lg:grid-cols-3 xl:mx-4 p-2 mt-7">
        <div className="p-1">
          <p className=" text-base py-2 gap-2 rounded-xl font-semibold flex items-center text-gray-300">
            <DonutLargeOutlinedIcon />
            IN PROGRESS 2
          </p>
          {strategy?.inprogress?.major?.map((data, index) => (
            <div key={index} className="mb-4">
              <InProgressStrategy
                key={data.id}
                data={data}
              ></InProgressStrategy>
            </div>
          ))}
        </div>
        <div className=" p-1 ">
          <p className=" text-base py-2 gap-2 items-center rounded-xl font-semibold flex text-gray-300">
            <AssignmentTurnedInOutlinedIcon />
            COMPLETED 2
          </p>
          {strategy?.completed?.minor?.map((data) => (
            <CompletedStrategy key={data.id} data={data} />
          ))}
        </div>
        <div className=" p-1">
          <p className=" text-base py-2 items-center gap-2 rounded-xl font-semibold flex text-gray-300">
            <VerifiedOutlinedIcon />
            CLOSED 3
          </p>
          {strategy?.closed?.map((data) => (
            <StrategyTask key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StrategyStatus;
