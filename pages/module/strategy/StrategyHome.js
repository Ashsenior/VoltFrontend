import { Container } from "@mui/system";
import React from "react";
import Router from "next/router";
import StrategyStatus from "./StrategyStatus";

const StrategyHome = () => {

  return (
    <div>
      {/* Link Buttons */}
      <Container maxWidth="w-full my-4">
        <div className="relative pb-5 sm:pb-0">
          <div className="md:flex md:items-center md:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Business Models
            </h3>
            <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Share with friends
              </button>
              <button
                onClick={() =>
                  Router.push("/module/create_strategy/NewStrategy")
                }
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create new Strategy
              </button>
            </div>
          </div>
        </div>
      </Container>

      <StrategyStatus></StrategyStatus>


    </div>
  );
};

export default StrategyHome;
