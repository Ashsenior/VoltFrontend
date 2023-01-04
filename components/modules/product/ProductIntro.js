import React from "react";
import Router from "next/router";
import { GoIssueClosed } from "react-icons/go";
import { MdFeaturedVideo } from "react-icons/md";
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

const ProductIntro = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row mt-8">
      <div className="w-full md:w-7/12 bg-white rounded-lg shadow p-1 md:p-6 flex flex-col-reverse md:flex-row items-center mt-4 mr-4">
        <div className="p-2 md:p-6">
          <h1 className="text-xl font-semibold mb-2">
            {product?.product?.name}({product?.product?.version})
          </h1>
          <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            @{product?.product?.productLeader}
          </p>
          <h3 className="text-xl font-semibold mb-2">
            {product?.product?.deployed_link}
          </h3>
          <h5 className="text-md font-semibold mb-2">
            Platform : {checkPlatformChoices(product?.product?.platform)}
          </h5>
          <h5 className="text-md font-semibold mb-2">
            Phase : {checkphaseChoice(product?.product?.phase)}
          </h5>
          <h5 className="text-md font-semibold mb-2">
            Keyword : {checkKeywordChoices(product?.product?.keyword)}
          </h5>
          <p>{product?.product?.desc}</p>
          <button className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 rounded-sm mt-4">
            Features
          </button>
        </div>
        <div>
          {product?.product?.live === true ? (
            <button
              type="button"
              class="inline-block mb-3 px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-lime-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
            >
              Live
            </button>
          ) : (
            <button
              type="button"
              class="inline-block px-6 py-3 mr-3 mb-3 font-bold text-center text-white uppercase align-middle transition-all bg-red-500 rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
            >
              Under Development
            </button>
          )}
          <img
            className="w-52 h-52 rounded-lg"
            src="https://www.pngitem.com/pimgs/m/217-2179955_ui-ux-designing-png-transparent-png.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-5/12 mt-4 flex flex-col justify-between gap-4">
        <div className="flex w-full h-full gap-4">
          <div className="bg-white rounded-md p-4 h-full w-full shadow hidden md:block relative">
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
          <div className="bg-white rounded-md p-4 h-full w-full shadow relative">
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
        <div className="bg-white rounded-md p-4 flex items-center justify-between shadow">
          <GoIssueClosed className="text-4xl bg-indigo-400 rounded-full text-white p-2"></GoIssueClosed>
          <p className="text-xl">
            <span>8</span> Member Working
          </p>
          <BsFillArrowRightSquareFill
            onClick={() => Router.push("/module/product/product_team")}
            className="text-2xl text-indigo-500 cursor-pointer"
          ></BsFillArrowRightSquareFill>
        </div>
        <div className="bg-white rounded-md p-4 flex items-center justify-between shadow">
          <MdFeaturedVideo className="text-4xl bg-indigo-400 rounded-full text-white p-2"></MdFeaturedVideo>
          <p className="text-xl">
            <span>5</span> New Features
          </p>
          <BsFillArrowRightSquareFill className="text-2xl text-indigo-500"></BsFillArrowRightSquareFill>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
