import { AccordionSummary } from "@mui/material";
import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import Tabs from "./tabs";

const MarketingModuleComponent = () => {
  return (
    <div>
      <div className="w-full bg-white">
        <div className=" flex items-center justify-between mx-auto  rounded-lg py-3">
          <h1 className="text-xl font-semibold">Submit results and close campaign💡?</h1>
          <button
            onClick={() => Router.push("/create_startup")}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit results
          </button>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Marketing Strategy Name (Major)</h1>
          <Link href={'./'} type="button">
            <a className="btn btn-sm">
            In Progress
            </a>
          </Link>
        </div>
        <medium>
        Marketing Strategy leader
          <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            @ashsenior
          </p>
        </medium>
        <h4>
          Start Date: <span>11/12/2022</span>
        </h4>
        <div className="grid grid-cols-1 xl:grid-cols-1">
          <div className="mt-6">
            <h4 className="text-lg font-semibold">Marketing Strategy description</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              optio unde! Inventore repudiandae magni sed porro maiores omnis
              possimus eos voluptatem aliquam aperiam ex quos velit fugiat
              voluptatum, vel suscipit distinctio est perspiciatis quam earum
              nisi facere! Saepe fuga accusantium velit voluptate ea
              necessitatibus repellat reiciendis qui tempora ad. Exercitationem
              omnis mollitia consequuntur quaerat non! Quis soluta ex at numquam
              suscipit illum rerum, ipsa, earum laboriosam nobis velit quia
              placeat reprehenderit, officiis quo ut porro distinctio optio
              accusantium praesentium? Dolor, molestias corrupti, eos laudantium
              assumenda ullam voluptates rerum dignissimos quam.
            </p>
          </div>
        </div>
       
      </div>
      <Tabs/>
    </div>
  );
};

export default MarketingModuleComponent;
