import React from "react";
import { TbListDetails } from "react-icons/tb";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

import { useRouter } from "next/router";

const FeaturesCard = ({ feature }) => {
  const router = useRouter();

  return (
    <div className="bg-gray-800 rounded-lg p-3 text-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            className="w-24 rounded-md"
            src={"http://127.0.0.1:8000" + feature.details.image}
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1 className="text-sm md:text-base font-semibold">
              {feature.details.title} {feature.details.image}
            </h1>
            <h5 className="text-xs text-gray-400 md:text-sm font-normal">
              {feature.details.desc}
            </h5>
            {/* <span className="text-white bg-indigo-600 rounded-full p-2">
              Important
            </span> */}
          </div>
          <div className="flex flex-col justify-between">
            <span class="bg-gray-100 gap-1 text-green-200 text-sm mb-1 font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
              <AssignmentIndOutlinedIcon />
              {feature?.details?.deadline}
            </span>
            <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
              <AssignmentIndOutlinedIcon />@{feature?.details?.assigned_to}
            </span>
          </div>
        </div>
        <div className="tooltip flex justify-end" data-tip="details">
          <a
            rel="stylesheet"
            href={`${router?.query?.product_key}/features_details/${feature.details.key}`}
          >
            <button>
              <TbListDetails className="text-2xl text-indigo-500"></TbListDetails>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
