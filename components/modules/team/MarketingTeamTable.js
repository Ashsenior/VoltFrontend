import React from "react";
import { useState } from "react";
import MemberModal from "./MemberModal";

const MarketingTeamTable = ({ people }) => {
  console.log("people", people);
  const [open, setOpen] = useState(false);
  const [member, setMember] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (member) => {
    setOpen(true);
    setMember(member);
    console.log(member);
  };

  return (
    <div class="overflow-x-auto relative">
      <MemberModal member={member} open={open} handleClose={handleClose} />
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-50 uppercase bg-green-400 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="py-3 px-6" scope="col">
              Name
            </th>
            <th className="py-3 px-6" scope="col">
              Status
            </th>
            <th className="py-3 px-6" scope="col">
              Skills
            </th>
            <th className="py-3 px-6 hidden xl:block" scope="col">
              Points
            </th>
            <th className="py-3 px-6" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {people?.open_to_work?.map((member) => (
            <tr
              key={member.id}
              class=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={member?.image}
                  alt="Jese image"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">
                    {member?.user?.first_name} {member?.user?.last_name}
                    <span class="font-normal text-sm text-gray-500">
                      @{member?.user?.username}
                    </span>
                  </div>
                  <div class="font-normal text-gray-600">{member?.skills}</div>
                </div>
              </th>
              <td class="py-4 px-6">
                <div class="flex items-center">
                  <div
                    class={`h-2.5 w-2.5 rounded-full bg-green-400 mr-2`}
                  ></div>{" "}
                  Open to Work
                </div>
              </td>
              <td class="py-4 px-6 hidden xl:block">
                <p className="w-fit px-2 font-medium bg-green-100 rounded-full">
                  {member?.points} volts
                </p>
              </td>
              <td class="py-4 px-6">
                <button
                  htmlFor="teamMemberModal"
                  onClick={() => handleOpenModal(member)}
                  className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 hover:border-0 text-white rounded-md text-sm capitalize"
                >
                  Connect
                </button>
              </td>
            </tr>
          ))}

          {people?.working?.map((member) => (
            <tr
              key={member.id}
              class=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={member?.image}
                  alt="Jese image"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">
                    {member?.name}{" "}
                    <span class="font-normal text-sm text-gray-500">
                      @{member?.user?.username}
                    </span>
                  </div>
                  <div class="font-normal text-gray-400">{member?.role}</div>
                </div>
              </th>

              <td class="py-4 px-6">
                <div class="flex items-center">
                  <div
                    class={`h-2.5 w-2.5 rounded-full bg-blue-400 mr-2`}
                  ></div>{" "}
                  Working
                </div>
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center">{member?.skills}</div>
              </td>
              <td class="py-4 px-6 hidden xl:block">
                <p className="w-fit px-2 font-medium bg-green-100 rounded-full">
                  {member?.points} volts
                </p>
              </td>
              <td class="py-4 px-6">
                <button
                  htmlFor="teamMemberModal"
                  onClick={() => handleOpenModal(member)}
                  className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 hover:border-0 text-white rounded-md text-sm capitalize"
                >
                  Connect
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketingTeamTable;
