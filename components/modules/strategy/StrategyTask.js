import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

const StrategyTask = ({ data }) => {
  return (
    <div className="bg-gray-900 shadow-xl mt-2 rounded-lg p-4">
      <h4 className="text-lg flex font-semibold text-gray-300 pb-1">
        {data?.strategy}
      </h4>
      <div className="flex items-center gap-1 mt-1">
        <span class="bg-gray-800 gap-1 text-gray-300 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2">
          <AssignmentIndOutlinedIcon />
          @ashsenior
        </span>
        <span class="bg-gray-800 gap-1 text-gray-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2">
          <OfflineBoltOutlinedIcon />
          {data?.points_alloted}
        </span>
        <span class="bg-gray-800 gap-1 text-green-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:text-green-300">
          <VerifiedOutlinedIcon />
          11/12/2022
        </span>
      </div>
      <a href={`{http://127.0.0.1:8000}/${data?.report}`} download>
        <button className="w-full button p-1 rounded-md item-center text-gray-200 font-semibold bg-gray-600 mt-2">
          <FileDownloadOutlinedIcon /> Download Report
        </button>
      </a>
    </div>
  );
};

export default StrategyTask;
