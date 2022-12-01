import React from "react";
import MeetingCard from "./MeetingCard";
import { BsPlusLg } from "react-icons/bs";
import CreateMeetingModal from "./CreateMeetingModal";

const Meetings = ({ startup }) => {
  return (
    <div className="mt-6 mx-auto">
      {/* The button to open modal */}

      <CreateMeetingModal></CreateMeetingModal>
      {/* Put this part before </body> tag */}

      <div className="flex">
        <MeetingCard></MeetingCard>
        <MeetingCard></MeetingCard>
        <MeetingCard></MeetingCard>

        <div className="flex items-center justify-center mx-auto md:mx-0">
          <label htmlFor="create-meeting-modal">
            <BsPlusLg className="text-4xl ml-0 md:ml-10 bg-white rounded-full shadow-lg p-2 hover:text-5xl hover:text-green-500 ease-in-out duration-300 "></BsPlusLg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
