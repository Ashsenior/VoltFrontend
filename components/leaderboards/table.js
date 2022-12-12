import React from "react";
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';

const LeaderBoardTable = () => {
  const rows = [
    {
      index: "1",
      name: "Neil Sims",
      designation: "React Developer",
      points: "350"
    },
    {
      index: "1",
      name: "Neil Sims",
      designation: "React Developer",
      points: "350"
    },
  ];
  return (
    <>
      <div className="overflow-x-auto relative mt-4 shadow-md xl:m-3">
        <div className="flex px-4 py-2 text-white dark:bg-gray-900">
          <h2 className="text-md">Technical Jedi's</h2>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" className="py-3 px-6">
                Index
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {
              rows?.map((row) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-4 px-6 text-md">{row.index}</td>
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{row.name}</div>
                      <div className="font-normal text-gray-300">
                        {row.designation}
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">
                    <span class="bg-gray-400 gap-1 border border-indigo-200 text-indigo-200 text-lg inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-indigo-200">
                        <OfflineBoltOutlinedIcon />
                        {row.points}
                    </span>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderBoardTable;
