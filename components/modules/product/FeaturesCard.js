import React from "react";
import { TbListDetails } from "react-icons/tb";
import Router, { useRouter } from "next/router";

const FeaturesCard = ({ feature }) => {
  const router = useRouter();
  return (
    <div className="bg-white p-2 border-b">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            className="w-24 bg-gray-200 rounded-md p-2"
            src={feature.details.image}
            alt=""
          />
          <div className="flex flex-col justify-start">
            <h1
              onClick={() => Router.push("/features_details")}
              className="text-sm md:text-base font-semibold"
            >
              {feature.details.title}
            </h1>
            <h5
              onClick={() => Router.push("/features_details")}
              className="text-xs md:text-sm font-normal"
            >
              {feature.details.desc}
            </h5>
            <p className="text-xs">{feature.startDate}</p>
            {/* <span className="text-white bg-indigo-600 rounded-full p-2">
              Important
            </span> */}
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold">
              Deadline in {feature.details.deadline}
            </p>
            <p className=" font-semibold">
              Assign to {feature.details.assigned_to}
            </p>
            <p></p>
          </div>
        </div>
        <div className="tooltip flex justify-end" data-tip="details">
          <button
            onClick={() =>
              router.push(
                `${router.query.product_key}/feature_details/${feature.details.key}`
              )
            }
            className="btn btn-ghost hover:bg-white"
          >
            <TbListDetails className="text-2xl text-indigo-500"></TbListDetails>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
