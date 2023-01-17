import React from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { ShoppingCart } from "@mui/icons-material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { useRouter } from "next/router";
import CreateSubStrategyModal from "./createSubStrategyModal";
import { useState } from "react";

const InProgressStrategy = ({ data }) => {
  console.log(data);
  const [open, setOpen] = useState(false);
  const [strategySlug, setStrategySlug] = useState("");
  const handleOpen = (slug) => {
    setOpen(true);
    setStrategySlug(slug);
    console.log(slug);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRoute = () => {
    router.push(`/module/strategy/${data?.details?.slug}`);
  };
  const router = useRouter();
  return (
    <div className="bg-gray-900 shadow-xl rounded-lg mt-2 p-4">
      <CreateSubStrategyModal
        slug={strategySlug}
        open={open}
        handleClose={handleClose}
      />
      <h4
        onClick={handleRoute}
        className="text-lg flex font-semibold text-gray-300 pb-1 cursor-pointer"
      >
        {data?.details?.strategyTitle}
      </h4>
      <div className="flex items-center gap-1 mt-1">
        <span class="bg-gray-800 gap-1 text-blue-200 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2">
          <AssignmentIndOutlinedIcon />@{data?.details?.strategyLeader}
        </span>
        <span class="bg-gray-800 gap-1 text-indigo-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 ">
          <OfflineBoltOutlinedIcon />
          {data?.details?.points}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <p className="font-medium text-gray-300">60%</p>
        <progress
          className="progress progress-info w-full"
          value="60"
          max="100"
        ></progress>
      </div>
      <div className="py-2">
        {data?.subs.map((sub) => (
          <div key={sub?.title}>
            <a
              href="#xc"
              className="flex items-center text-gray-300 mt-1 bg-gray-800 hover:bg-gray-600 hover:text-gray-100 gap-1"
            >
              {sub?.type === "M" ? (
                <small className="p-1 text-gray-300">
                  <ShoppingCart />
                </small>
              ) : (
                <small className="p-1 text-gray-300">
                  <PostAddIcon />
                </small>
              )}
              <p className="text-md font-semibold ">{sub?.title}</p>
              {sub?.completed ? (
                <small className="p-1 text-green-500">
                  <VerifiedOutlinedIcon />
                </small>
              ) : null}
            </a>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleOpen(data?.details?.slug)}
        className="flex text-gray-200 rounded-md py-1 w-full bg-gray-600 justify-center items-center gap-1 hover:bg-gray-500"
      >
        <PostAddIcon />
        <p className="font-semibold">Add Sub Strategy</p>
      </button>
    </div>
  );
};

export default InProgressStrategy;
