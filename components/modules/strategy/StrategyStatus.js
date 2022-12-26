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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 xl:mx-4 p-2 mt-7">
        <div className="p-1 rounded-lg">
          <p className=" text-base p-4 border mb-2 border-indigo-500 gap-2 bg-indigo-50 rounded-t-xl font-semibold flex items-center text-indigo-500">
            <DonutLargeOutlinedIcon />
            IN PROGRESS 2
          </p>
          <p className=" text-base rounded-t-xl font-semibold flex items-center text-red-500">
            Major
          </p>

          {strategy?.inprogress?.major?.map((data, index) => (
            <div key={index} className="mb-4">
              <InProgressStrategy
                key={data.id}
                data={data}
              ></InProgressStrategy>
            </div>
          ))}
          <p className=" text-base rounded-t-xl font-semibold flex items-center text-green-500">
            Minor
          </p>
          {strategy?.inprogress?.minor?.map((data) => (
            <InProgressStrategy key={data.id} data={data}></InProgressStrategy>
          ))}
        </div>
        <div className=" p-1 rounded-md">
          <p className=" text-base p-4 border border-green-500 bg-green-50 gap-2 items-center rounded-t-xl font-semibold flex p-1 text-green-500">
            <AssignmentTurnedInOutlinedIcon />
            COMPLETED 2
          </p>
          {strategy?.completed?.minor?.map((data) => (
            <CompletedStrategy key={data.id} data={data} />
          ))}
        </div>
        <div className=" p-1 rounded-md">
          <p className=" text-base p-4 border-gray-500 items-center gap-2 border bg-gray-50 rounded-t-xl font-semibold flex p-1 text-gray-500">
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
