import React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

const EmptyState = () => {
  return (
    <div>
      <div className="grid grid-cols-2 border p-2 rounded-md">
        <div>
          <img
            className="w-14 rounded-full mx-auto"
            src={
              "https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-base font-medium">NO DATA FOUND</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
