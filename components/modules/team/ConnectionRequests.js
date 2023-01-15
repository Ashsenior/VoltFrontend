import { Card } from "flowbite-react";
import React from "react";
import { checkTeamDomain } from "../../../utils/data-modifiers";

const ConnectionRequests = ({ request , cat }) => {
  console.log(request);
  return (
    <div>
      <div className="">
        <div className="justify-center items-center bg-gray-900 rounded-lg">
          <>
            {/* <Dropdown inline={true} label="">
              <Dropdown.Item>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Export Data
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </a>
              </Dropdown.Item>
            </Dropdown> */}
          </>
          <div className="items-center p-4">
            <div className="grid grid-cols-2 rounded-md justify-center items-center">
              <div>
                <img
                  className="w-10 rounded-full mx-auto"
                  src={
                    "https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h5 className="mb-1 text-lg text-gray-300">
                  {request?.user?.first_name} {request?.user?.last_name}
                  <br />@{request?.user.username}
                </h5>
                <span className="text-sm mb-4 text-gray-500 dark:text-gray-400">
                  {checkTeamDomain(request?.user?.profile?.domain)} Guy
                </span>
              </div> 
            </div>
            <center className="text-sm text-gray-300 mb-1">
              {request?.user?.profile?.skills.split(",").map((skill) => (
                <span className="mx-1 rounded-full px-2 bg-gray-700">{skill}</span>
              ))}
            </center>
            <center className=" text-sm font-medium text-gray-300">
              {request?.message}
            </center>
            {
              cat==="R"?
              <div className=" flex space-x-3 mt-3 items-center justify-center">
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-purple-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  Accept Request
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Decline
                </a>
              </div>
              :
              null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionRequests;
