import { Button } from "@mui/material";
import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import { Biotech } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import Tabs from "./tabs";

const positions = [
  {
    id: 1,
    title: "Campaign 1",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt atque voluptatem reprehenderit veniam repudiandae aspernatur doloremque! Quisquam, ",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Campaign 2",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt atque voluptatem reprehenderit veniam repudiandae aspernatur doloremque! Quisquam, ",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "Campaign 3",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt atque voluptatem reprehenderit veniam repudiandae aspernatur doloremque! Quisquam, ",
  closeDate: "2020-01-07",
    closeDateFull: "January 14, 2020",
  },
];

const MarketingModuleComponent = () => {
  return (
    <div>
      <div className="w-full bg-white">
        <div className=" flex items-center justify-between mx-auto  rounded-lg py-3">
          <h1 className="text-xl font-semibold">
            Submit results and close campaign💡?
          </h1>
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
          <h1 className="text-xl font-semibold">
            Marketing Strategy Name (Major)
          </h1>
          <Link href={"./"} type="button">
            <a className="btn btn-sm">In Progress</a>
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
            <h4 className="text-lg font-semibold">
              Marketing Strategy description
            </h4>
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
      <Tabs />
      <div className="bg-white shadow overflow-hidden">
        <ul role="list" className="divide-y divide-gray-200">
          {positions.map((position) => (
            <li key={position.id}>
              <a
                href="#"
                className="border-l-x-4 border-green-200 block hover:bg-gray-100"
              >
                <div className="px-3 py-3 sm:px-3">
                  <div className="flex items-center justify-between">
                    <div className="border-spacing-2 border-l-teal-800">
                    <p className="text-lg font-medium text-indigo-600 truncate">
                      {" "}
                      {position.title}
                    </p>
                    <p className="text-md font-small text-black-600 ">
                      {" "}
                      {position.description}
                    </p>
                    </div>

                    <div className="ml-2 flex-shrink-0 col text-center">
                      <p className="px-2 my-2  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        #linkedin
                      </p>
                      <p className="px-2 my-2  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        #CTOHUNT
                      </p>
                      <p className="px-2 my-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        #ENTERPRENUER
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center justify-start">
                          <h3 className="flex items-center rounded-lg ">
                            <Button
                              className="text-red-100 bg-pink-500"
                              disableRipple
                              component="a"
                              startIcon={<FavoriteIcon sx={{ color: "red" }} />}
                            >
                              30 Likes
                            </Button>
                          </h3>
                          <h3 className="flex items-center rounded-lg p-1">
                            <Button
                              className="text-green-700 bg-green-100"
                              disableRipple
                              component="a"
                              startIcon={<CommentIcon />}
                            >
                              6 comments
                            </Button>
                          </h3>
                          <h3 className="flex items-center rounded-lg p-1">
                            <Button
                              className="text-blue-100 bg-blue-100"
                              disableRipple
                              component="a"
                              startIcon={<SendIcon />}
                            >
                              4 shares
                            </Button>
                          </h3>
                        </div>
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p className="px-2 mx-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        50 Volts
                      </p>
                      <p>
                        Start Date{" "}
                        <time dateTime={position.closeDate}>
                          {position.closeDateFull}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketingModuleComponent;
