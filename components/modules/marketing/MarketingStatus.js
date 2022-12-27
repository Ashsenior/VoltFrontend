import React from "react";
import Completed from "./Completed";
import InProgress from "./InProgress";
import Task from "./Task";

import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import MarketingSocialCards from "./marketingSocialCards";

const MarketingStatus = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 mt-10">
        <div>
          <p className=" text-base p-4 border border-blue-500 gap-2 bg-blue-50 rounded-t-xl font-semibold flex items-center text-blue-500">
            <DonutLargeOutlinedIcon />
            IN PROGRESS 2
          </p>
          {data?.inProgress?.map((data) => (
            <InProgress key={data.id} data={data}></InProgress>
          ))}
        </div>
        <div>
          <p className=" text-base p-4 border border-green-500 bg-green-50 gap-2 items-center rounded-t-xl font-semibold flex p-1 text-green-500">
            <AssignmentTurnedInOutlinedIcon />
            COMPLETED {data?.completed?.length}
          </p>
          {data?.completed?.map((data) => (
            <Completed key={data.id} data={data} />
          ))}
        </div>
        <div>
          <p className=" text-base p-4 mb-4 border border-indigo-500 items-center gap-2 bg-indigo-50 rounded-t-xl font-semibold flex p-1 text-indigo-500">
            <VerifiedOutlinedIcon />
            TASK 3
          </p>
          <MarketingSocialCards />
          <MarketingSocialCards />
        </div>
      </div>
    </div>
  );
};

export default MarketingStatus;
