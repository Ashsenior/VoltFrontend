import React from "react";
import { MdAccessAlarm } from "react-icons/md";

const MeetingCard = () => {
  return (
    <div className="w-full md:w-160 flex flex-col rounded-xl shadow-lg hover:shadow-2xl bg-white p-4 mx-auto md:mx-0">
      <h4 className="text-xl font-semibold">Daily Design Meeting</h4>
      <div className="flex items-center gap-1 mt-4">
        <MdAccessAlarm className="text-2xl mb-2"></MdAccessAlarm>
        <div>
          <p>10:00 - 11:30</p>
          <small>12 minutes ago</small>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <button
          type="button"
          className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Attend
        </button>
      </div>
    </div>
  );
};

export default MeetingCard;
