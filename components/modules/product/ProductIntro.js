import React from "react";
import Router from "next/router";
import { GoIssueClosed } from "react-icons/go";
import { MdFeaturedVideo } from "react-icons/md";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import {
  BsFillArrowRightSquareFill,
  BsBarChartFill,
  BsQuestionDiamond,
} from "react-icons/bs";
import {
  checkPlatformChoices,
  checkKeywordChoices,
  checkphaseChoice,
} from "../../../utils/data-modifiers";
import TagIcon from '@mui/icons-material/Tag';
import LinkIcon from '@mui/icons-material/Link';
import CodeIcon from '@mui/icons-material/Code';
import AssistantIcon from "@mui/icons-material/Assistant";
import { useState } from "react";
import { TbBulb } from "react-icons/tb";

const ProductIntro = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col md:flex-row  ">
      <div className="w-full text-gray-300 md:w-7/12 bg-gray-900 rounded-lg shadow p-1 md:p-6 flex flex-col-reverse md:flex-row items-center mt-4 mr-4">
        
        <div className="w-1/4 ">
          <img
            className="w-42 h-42 rounded-lg"
            src="https://www.pngitem.com/pimgs/m/217-2179955_ui-ux-designing-png-transparent-png.png"
            alt=""
          />
        </div>
        <div className="w-3/4 p-4 md:p-6">
          <p className="text-2xl uppercase font-semibold mb-2">
            {product?.product?.name} <span className="text-gray-300 text-sm">({product?.product?.version})</span>
            {product?.product?.live === true ? (
              <button
                type="button"
                class="inline-block mb-3 text-sm px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-lime-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
              >
                Live
              </button>
            ) : (
              <button
                onClick={handleOpen}
                type="button"
                className="rounded-full text-sm bg-gray-700 ml-2 px-4 py-2 my-3 mr-4 hover:bg-gray-700 text-purple-400 justify-center items-center"
              >
                <AssistantIcon />{" "}
                <small className="text-gray-200 font-medium ">Volt Assistant</small>
              </button>
            )}
          </p>
          <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
              <AssignmentIndOutlinedIcon />
              @{product?.product?.productLeader}
          </span>
          <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
              <LinkIcon />
              {product?.product?.deployed_link}
          </span>
          <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
              <CodeIcon />
              {checkPlatformChoices(product?.product?.platform)}
          </span>
          <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
              <TagIcon />
              {checkphaseChoice(product?.product?.phase)}
          </span>
          <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
              <TagIcon />
              {checkKeywordChoices(product?.product?.keyword)}
          </span>
          <p className="px-2.5 py-0.5 bg-gray-800 rounded-lg">{product?.product?.desc}</p>
        </div>
      </div>
      <div className="w-full md:w-5/12 mt-4 flex flex-col justify-between gap-4">
        <div className="flex w-full h-full gap-4">
          <div className="bg-gray-900 text-gray-300 rounded-md p-4 h-full w-full shadow hidden md:block relative">
            <p className="absolute -top-3 bg-gray-700 p-4 rounded-lg">
              <BsBarChartFill className="text-white text-2xl"></BsBarChartFill>
            </p>
            <div className="flex flex-col items-end absolute top-2 right-4">
              <h4 className="text-base font-light">New Commits</h4>
              <h3 className="text-2xl font-bold">35</h3>
            </div>
            <div className="absolute bottom-4 left flex border-t w-52">
              <p>
                <span className="text-green-500 font-bold">+23%</span> then last
                week
              </p>
            </div>
          </div>
          <div className="bg-gray-900 text-gray-300 rounded-md p-4 h-full w-full shadow relative">
            <p className="absolute -top-3 bg-green-400 p-4 rounded-lg">
              <BsQuestionDiamond className="text-white text-2xl"></BsQuestionDiamond>
            </p>
            <div className="flex flex-col items-end absolute top-2 right-4">
              <h4 className="text-base font-light">Issue Solved</h4>
              <h3 className="text-2xl font-bold">14</h3>
            </div>
            <div className="absolute bottom-4 left flex border-t w-52">
              <p>
                <span className="text-green-500 font-bold">+12%</span> then last
                week
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-300 flex items-center justify-between shadow">
          <button onClick={() => Router.push("/module/product/product_team")} className="text-xl w-1/2 justify-center bg-indigo-800 rounded-l-xl p-4 flex items-center">
            <AssignmentIndOutlinedIcon className="text-gray-300 mr-2"></AssignmentIndOutlinedIcon>
            8 Members Working
          </button>
          <button className="text-xl flex p-4 bg-gray-900 w-1/2 justify-center rounded-r-xl items-center">
              <TbBulb className="text-gray-300 mr-2"></TbBulb>
              5 New Features
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
