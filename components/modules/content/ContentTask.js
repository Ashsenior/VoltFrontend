import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShortTextOutlinedIcon from "@mui/icons-material/ShortTextOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { checkKeywordStatus } from "../../../utils/data-modifiers";

const StrategyTask = ({ data }) => {
  return (
    <a
      href="#"
      class="block my-2 p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-500 dark:bg-gray-800 "
    >
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <SaveAsOutlinedIcon /> {data?.task}
      </h5>
      <span class="bg-gray-100 gap-1 text-green-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-green-300">
        <AssignmentIndOutlinedIcon />
        {data?.assigned_to}
      </span>
      <span class="bg-gray-100 gap-1 text-indigo-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-indigo-300">
        <OfflineBoltOutlinedIcon />
        {data?.points}
      </span>
      <span class="bg-gray-100 gap-1 text-orange-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-orange-300">
        <ShortTextOutlinedIcon />
        {checkKeywordStatus(data?.keyword)}
      </span>
      <span class="bg-gray-100 gap-1 text-gray-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-300">
        <CalendarMonthOutlinedIcon />
        {data?.endDate}
      </span>

      <p class="font-normal mt-2 text-gray-700 dark:text-gray-300">
        {data?.content}
      </p>
      <img
        className="mt-4 rounded-xl"
        src={
          "https://gbdmagazine.com/wp-content/uploads/2017/10/063918_002-e1527781642890.png"
        }
      />
    </a>
  );
};

export default StrategyTask;
