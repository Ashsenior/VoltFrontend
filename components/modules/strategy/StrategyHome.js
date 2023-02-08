import { Container } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import StrategyStatus from "./StrategyStatus";
import StrategyDrawer from "./strategyDrawer";
import { useState } from "react";
import NewStrategy from "../../../pages/module/strategy/create_strategy/NewStrategy";

const StrategyHome = ({ strategy }) => {
  const [open, setOpen] = useState(false);
  const [formView, setFormView] = useState(false);
  const router = useRouter();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className=" bg-gray-800">
      {/* Link Buttons */}
      {!formView ? (
        <>
          <Container className="w-full ">
            <div className="relative pb-2 sm:pb-0">
              <div className=" md:flex md:items-center md:justify-between">
                <h3 className="text-lg pt-6 leading-6 font-medium text-gray-300">
                  Strategy for Business Models
                </h3>
                <div className="mt-6 flex md:mt-4 md:absolute md:top-3 md:right-0">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 bg-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Share with friends
                  </button>
                  <button
                    onClick={() => setFormView(true)}
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create new Strategy
                  </button>
                  <button
                    onClick={handleOpen}
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Idea
                  </button>
                  <StrategyDrawer handleClose={handleClose} open={open} />
                </div>
              </div>
            </div>
          </Container>

          <StrategyStatus strategy={strategy} />
        </>
      ) : (
        <NewStrategy handleCallBack={() => setFormView(false)} />
      )}
    </div>
  );
};

export default StrategyHome;
