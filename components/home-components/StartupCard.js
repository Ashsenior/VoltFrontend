import React from "react";
import Router from "next/router";

const StartupCard = ({ startup }) => {
  const handleClick = (startup) => {
    Router.push({
      pathname: "/dashboards",
      query: { startup_key: startup?.details?.key },
    });
  };
  return (
    <>
      {startup?.map((startup, index) => (
        <div className="w-full flex justify-between p-1 items-center  hover:bg-gray-100">
          <div className="flex">
            <img
              className="w-10 h-10 mx-1 bg-gray-100 rounded-lg lg:w-20 lg:h-20"
              // src={startup?.details?.logo}
              src="/static/images/overview/tokyo-logo.png"
              alt="img"
            />
            <div className="flex flex-col px-2 justify-between">
              <div>
                <h1>
                  <e className="text-base md:text-lg font-semibold">
                    {startup?.details?.name}{" "}
                  </e>
                </h1>
                <medium className=" pr-2 text-gray-500 mb-1">
                  something great is coming {startup?.details?.vision}!
                </medium>
                <small>(Founded in {startup?.details?.founded})</small>
                <h4 className=" flex">{startup?.members} Member</h4>
              </div>
            </div>
          </div>

          <div className="w-4/12 flex flex-col items-end justify-between gap-2 mx-2">
            <div>
              <p className="px-2 inline-flex text-xs align-middle leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                {startup?.details?.points} Volts
              </p>
            </div>
            <button
              onClick={() => handleClick(startup)}
              type="button"
              className="inline-flex items-center px-3 py-1 border font-small border-transparent lg:font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Hustle
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default StartupCard;
