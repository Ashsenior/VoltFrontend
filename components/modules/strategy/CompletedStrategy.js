import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import { ShoppingCart } from "@mui/icons-material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

const CompletedStrategy = ({ data }) => {
  const handleRoute = () => {
    router.push(`/module/strategy/${data?.slug}`);
  };
  return (
    <div className="bg-gray-900 mt-2 rounded-lg shadow-xl p-4">
      <h4
        onClick={handleRoute}
        className="text-lg flex font-semibold text-gray-300 pb-1 cursor-pointer"
      >
        {data?.details?.strategyTitle}
      </h4>
      <div className="flex items-center gap-1 mt-1">
        <span class="bg-gray-100 gap-1 text-green-200 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
          <AssignmentIndOutlinedIcon />@{data?.details?.strategyLeader}
        </span>
        <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
          <OfflineBoltOutlinedIcon />
          {data?.details?.points}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <p className="font-medium text-gray-300">100%</p>
        <progress
          className="progress progress-success w-full"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="py-2">
      {
          data?.subs.map((sub) => (
            <a
              href="#xc"
              className="flex items-center text-gray-300 mt-1 bg-gray-800 hover:bg-gray-500 hover:text-gray-100 gap-1"
            >
              {
                sub?.type==="M"?
                <small className="p-1 text-gray-300">
                  <ShoppingCart />
                </small>
                :
                <small className="p-1 text-gray-300">
                  <PostAddIcon />
                </small>
              }
              <p className="text-md font-semibold ">
                {sub?.title}
              </p>
              {
                sub?.completed?
                <small className="p-1 text-green-500">
                  <VerifiedOutlinedIcon />
                </small>
                :
                null
              }
            </a>
          ))
        }
      </div>
      <button className="flex text-gray-200 rounded-md py-1 w-full bg-gray-600 justify-center items-center gap-1 hover:bg-gray-40">
        <PostAddIcon />
        <p className="font-semibold">Add Sub Strategy</p>
      </button>
    </div>
  );
};

export default CompletedStrategy;
