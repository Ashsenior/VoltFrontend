import React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import UpcomingIcon from '@mui/icons-material/Upcoming';

const EmptyState = () => {
  return (
    <div className="w-full">
      <label className="flex text-xl justify-center shadow-md w-full h-24 px-4 transition bg-gray-800 rounded-md appearance-none focus:outline-none">
        <span className="flex items-center space-x-2">
          <UpcomingIcon className="text-gray-300" />
          <span className="text-gray-300">
            No member Found
          </span>
        </span>
      </label>
    </div>
  );
};

export default EmptyState;
