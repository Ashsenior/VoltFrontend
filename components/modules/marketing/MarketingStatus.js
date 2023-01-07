import React from "react";
import Completed from "./Completed";
import InProgress from "./InProgress";

import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

const MarketingStatus = ({ data }) => {
  console.log(data);

  return (
    <div className="w-full flex flex-row">
      <div className="w-full px-2 mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div>
          <p className=" text-base gap-2 font-semibold flex items-center text-gray-500">
            <DonutLargeOutlinedIcon />
            IN PROGRESS {data?.inprogress?.length}
          </p>
          {data?.inprogress?.map((data) => (
            <InProgress key={data.id} data={data}></InProgress>
          ))}
        </div>
        <div>
          <p className=" text-base gap-2 items-center font-semibold flex text-gray-500">
            <AssignmentTurnedInOutlinedIcon />
            COMPLETED {data?.completed?.length}
          </p>
          {data?.completed?.map((data) => (
            <Completed key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingStatus;
