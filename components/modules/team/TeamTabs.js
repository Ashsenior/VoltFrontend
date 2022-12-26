import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import StudentsTab from "./StudentsTab";
import CorporateTab from "./CorporateTab";
import MemberModal from "./MemberModal";

const TeamTabs = ({ people }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="p-0 xl:p-4">
      <h4 className="text-lg flex flex-wrap justify-between font-semibold text-gray-400 ml-4 my-2">
        <p className="flex">
          Find the best team and employee for your next dream project
        </p>
        <div class="relative flex">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for member"
          />
        </div>
      </h4>
      <div class="text-sm font-medium text-center bg-white text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap px-4 xl:p-0 -mb-px border-b border-gray-200">
          <li
            className={
              "text-base font-medium capitalize px-5 py-3 block leading-normal " +
              (openTab === 1
                ? "border-b-2 border-indigo-600 text-indigo-500"
                : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
            }
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              className="flex items-center gap-2"
              href="#"
            >
              <MenuBookIcon /> Students
            </a>
          </li>
          {/* <li
            className={
              "text-base font-medium capitalize px-5 py-3 block leading-normal " +
              (openTab === 2
                ? "border-b-2 border-indigo-600 text-indigo-500"
                : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
            }
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              className="flex items-center gap-2"
              href="#"
            >
              <CorporateFareIcon /> Corporate Professionals
            </a>
          </li> */}
        </ul>
        <div className="flex flex-col break-words bg-white w-full mb-6 rounded mt-2">
          <div className=" flex-auto">
            <div className="tab-space items-start">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <StudentsTab people={people} />
              </div>
              {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <CorporateTab />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;
