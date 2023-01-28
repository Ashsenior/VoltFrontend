import React from "react";
import Completed from "./Completed";
import InProgress from "./InProgress";
import AddIcon from "@mui/icons-material/Add";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { useRouter } from "next/router";

const MarketingStatus = ({ data }) => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-row rounded-lg bg-gray-700 ">
      <div className="w-full px-4 pb-4 mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div>
          <p className=" text-base gap-2 font-semibold flex items-center text-gray-300">
            <DonutLargeOutlinedIcon />
            IN PROGRESS {data?.inprogress?.length}
            <button
              onClick={() => router.push("/module/marketing/create_marketing")}
              type="button"
              className="ml-3 inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              NEW <AddIcon />
            </button>
          </p>
          {data?.inprogress?.map((data) => (
            <InProgress key={data.id} data={data}></InProgress>
          ))}
        </div>
        <div>
          <p className=" text-base gap-2 py-1 items-center font-semibold flex text-gray-300">
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
