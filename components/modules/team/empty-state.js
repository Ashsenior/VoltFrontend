import React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

const EmptyState = () => {
  return (
    <div>
      <div className="grid grid-cols-2 bg-gray-900 p-2 rounded-md justify-center items-center">
        <div>
          <img
            className="w-10 rounded-full mx-auto"
            src={
              "https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-gray-400 font-medium">NO PERSON FOUND</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
