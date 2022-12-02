import React from "react";
import Router from "next/router";

const StartupCard = ({ startup }) => {
  const handleClick = (startup) => {
    // if (typeof window !== "undefined") {
    //   localStorage.setItem("startup_key", startup?.details?.key);
    // }
    localStorage.setItem("startup_key", startup?.details?.key);
    Router.push({
      pathname: "/dashboards",
      query: { startup_key: startup?.details?.key },
    });
  };
  console.log(startup?.details?.key);
  return (
    <>
      {startup?.map((startup, index) => (
        <div className="w-full flex justify-between border-b border-r items-center p-1 hover:bg-gradient-to-tr from-white to-blue-100">
          <div className="flex my-1">
            <img
              className="w-20 h-20 mx-1 rounded-lg"
              // src={startup?.details?.logo}
              src="/static/images/overview/tokyo-logo.png"
              alt="img"
            />
            <div className="flex flex-col p-2 justify-between">
              <div>
                <h1>
                  <e className="text-base md:text-xl font-semibold">
                    {startup?.details?.name}{" "}
                  </e>
                </h1>
                <medium className="font-semibold text-gray-500 mb-1">
                  {startup?.details?.vision}
                </medium>
                <p className="py-2">Founded : {startup?.details?.founded}</p>
                <h4 className="font-semibold flex">
                  {startup?.members} Member
                </h4>
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
              className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Connect
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default StartupCard;
