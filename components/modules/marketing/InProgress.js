import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import { useRouter } from "next/router";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { CalendarMonth } from "@mui/icons-material";

const InProgress = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/module/marketing/${data?.details?.key}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-gray-800 mt-4 shadow-xl rounded-md p-4"
    >
      <h4 className="text-lg flex font-semibold text-gray-300 pb-1 cursor-pointer">
        {data?.details?.marketingTitle}
        <span class="bg-gray-100 gap-1 ml-2 text-blue-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-900 ">
          <OfflineBoltOutlinedIcon />
          {data?.details?.points}
        </span>
      </h4>
      <div className="flex items-center mt-1">
        <span class="bg-gray-100 gap-1 text-blue-300 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-900">
          <AssignmentIndOutlinedIcon />@{data?.details?.marketingLeader}
        </span>
        <span class="bg-gray-100 gap-1 text-blue-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-900 ">
          <CalendarMonth />
          {data?.details?.endDate}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <p className="font-medium text-gray-300">60%</p>
        <progress
          className="progress progress-info w-full"
          value="60"
          max="100"
        ></progress>
      </div>
      {/*<div className="flex items-center gap-6 border-green-300 pt-2">
        <button className="w-1/3 justify-center rounded-full bg-gray-800 p-1 flex items-center gap-1 text-gray-300">
          <YouTubeIcon />
          <p className="font-semibold">{data?.subs?.youtube}</p>
        </button>
        <button className="w-1/3 justify-center rounded-full bg-gray-800 p-1 flex button items-center gap-1 text-gray-300">
          <LinkedIn />
          <p className="font-semibold">{data?.subs?.linkedin}</p>
        </button>
        <button className="w-1/3 justify-center rounded-full bg-gray-800 p-1 flex button items-center gap-1 text-gray-300">
          <InstagramIcon />
          <p className="font-semibold">{data?.subs?.instagram}</p>
        </button>
      </div>*/}
    </div>
  );
};

export default InProgress;
