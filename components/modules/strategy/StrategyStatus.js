import React from "react";
import CompletedStrategy from "./CompletedStrategy";
import InProgressStrategy from "./InProgressStrategy";
import StrategyTask from "./StrategyTask";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

const StrategyStatus = ({ strategy }) => {
  return (
    <>
      <div className=" bg-gray-700 rounded-lg grid grid-cols-1 lg:grid-cols-3 xl:mx-4 p-2 mt-7">
        <div className="p-1">
          <p className=" text-base py-2 gap-2 rounded-xl font-semibold flex items-center text-gray-300">
            <DonutLargeOutlinedIcon />
            IN PROGRESS 2
          </p>
          {strategy?.inprogress?.major?.map((data, index) => (
            <div key={index} className="mb-4">
              <InProgressStrategy key={data.id} data={data} />
            </div>
          ))}
        </div>
        <div className=" p-1 ">
          <p className=" text-base py-2 gap-2 items-center rounded-xl font-semibold flex text-gray-300">
            <AssignmentTurnedInOutlinedIcon />
            COMPLETED 2
          </p>
          {strategy?.completed ? (
            <div className="w-full mt-2">
              <label className="flex justify-center w-full h-24 px-4 transition bg-gray-900 rounded-md appearance-none focus:outline-none">
                <span className="flex items-center space-x-2">
                  <RemoveDoneIcon className="text-gray-300" />
                  <span className="text-lg text-gray-300">
                    No strategy completed yet !
                  </span>
                </span>
              </label>
            </div>
          ) : (
            strategy.completed?.minor?.map((data) => (
              <CompletedStrategy key={data.id} data={data} />
            ))
          )}
        </div>
        <div className=" p-1">
          <p className=" text-base py-2 items-center gap-2 rounded-xl font-semibold flex text-gray-300">
            <VerifiedOutlinedIcon />
            CLOSED 3
          </p>
          {strategy?.closed?.map((data) => (
            <StrategyTask key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StrategyStatus;
