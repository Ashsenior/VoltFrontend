import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { ShoppingCart } from "@mui/icons-material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";

const InProgressStrategy = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-white border mt-4 rounded-md p-3">
      <h4 className="text-lg flex font-semibold text-gray-600 pb-1">
        {data?.details?.strategyTitle}
        <small className="flex ml-2 items-center text-indigo-500">
          <OfflineBoltOutlinedIcon />
          <p className="font-semibold">{data?.details?.points}</p>
        </small>
      </h4>
      <div className="flex items-center gap-2 mt-1">
        <p className="font-medium">60%</p>
        <progress
          className="progress progress-info w-full"
          value="60"
          max="100"
        ></progress>
      </div>
      <div className="flex item-center gap-1 mt-1">
        <h4 className="font-medium text-gray-400">LEAD </h4>
        <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
          @{data?.details?.strategyLeader}
        </p>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <h4 className="font-medium text-gray-400">DEADLINE </h4>
        <p className="text-md font-semibold text-black">{data?.deadline}</p>
      </div>
      <p className=" my-1 rounded-md text-gray-700 "></p>
      <div className="flex items-center gap-6 my-2 border-indigo-300 pt-1">
        <button className="flex gap-1 text-gray-500 items-center hover:text-indigo-500">
          <ShoppingCart />
          <p className="font-semibold">{data?.subs?.marketing}</p>
          <small className="text-gray-400">Marketing</small>
        </button>
        <button className="flex button text-gray-500 items-center gap-1 hover:text-lime-400">
          <PostAddIcon />
          <p className="font-semibold">{data?.subs?.research}</p>
          <small className="text-gray-400 ">Research</small>
        </button>
      </div>
    </div>
  );
};

export default InProgressStrategy;
