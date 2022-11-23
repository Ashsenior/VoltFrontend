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
    title: "Task 1",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    link:
      "https://hero.something.com/post?id=sjdfnskdlfdsm",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 2,
    title: "Task 2",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    link:
    "https://hero.something.com/post?id=sjdfnskdlfdsm",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
  {
    id: 3,
    title: "Task 3",
    type: "Full-time",
    location: "Remote",
    department: "Design",
    link:
    "https://hero.something.com/post?id=sjdfnskdlfdsm",
  closeDate: "2020-01-07",
    closeDateFull: "January 14, 2020",
  },
];

const MarketingModuleComponent = () => {
  return (
    <>
      <div className='w-full bg-indigo-500 border-b rounded-b-xl '>
            <div className='w-12/12 flex items-center justify-between mx-auto px-2 rounded-lg py-2'>
                <h1 className='text-lg text-white font-semibold'>Did the strategy worked?</h1>
                <label
                    // onClick={() => Router.push('/create_startup')}
                    htmlFor="edit-startups-modal"
                    type="button" className="inline-flex items-center px-2 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit the results
                </label>
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
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              optio unde! Inventore repudiandae magni sed porro maiores omnis
              possimus eos voluptatem aliquam aperiam ex quos velit fugiat
              voluptatum, vel suscipit distinctio est perspiciatis quam earum
              nisi facere! Saepe fuga accusantium velit voluptate ea
              necessitatibus repellat reiciendis qui tempora ad.
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
                    <p className="text-lg font-medium row text-indigo-600 truncate">
                      {" "}
                      {position.title}
                    </p>
                    <div className='flex gap-2 text-sm'>
                      <p className='text-red-'> <span >#</span>ctohunt</p>
                      <p className='text-red-'> <span >#</span>entrepreneur</p>
                      <p className='text-red-'> <span >#</span>startup</p>
                    </div>
                  </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center justify-start">
                          <h3 className="flex items-center rounded-lg p-1">
                            <Button
                              className="text-red-700 bg-pink-50"
                              disableRipple
                              component="a"
                              startIcon={<FavoriteIcon />}
                            >
                              30 Likes
                            </Button>
                          </h3>
                          <h3 className="flex items-center rounded-lg p-1">
                            <Button
                              className="text-green-700 bg-green-50"
                              disableRipple
                              component="a"
                              startIcon={<CommentIcon />}
                            >
                              6 comments
                            </Button>
                          </h3>
                          <h3 className="flex items-center rounded-lg p-1">
                            <Button
                              className="text-blue-100 bg-blue-50"
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
    </>
  );
};

export default MarketingModuleComponent;
