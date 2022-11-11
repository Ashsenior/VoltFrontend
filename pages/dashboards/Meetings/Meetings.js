import React from 'react';
import MeetingCard from './MeetingCard';
import { BsPlusLg } from 'react-icons/bs';
import CreateMeetingModal from './CreateMeetingModal';


const Meetings = () => {
    return (

        <div className='mt-6 mx-auto'>
            {/* The button to open modal */}

            <CreateMeetingModal></CreateMeetingModal>
            {/* Put this part before </body> tag */}

            <div className='flex gap-3'>
                <MeetingCard></MeetingCard>
                <MeetingCard></MeetingCard>
                <MeetingCard></MeetingCard>

                <div className='flex items-center justify-center'>
                    <label htmlFor="my-modal-6"><BsPlusLg className='text-4xl ml-10 bg-white rounded-full shadow-lg p-2 hover:text-5xl hover:text-green-500 ease-in-out duration-300'></BsPlusLg></label>
                </div>
            </div>
        </div>
    );
};

export default Meetings;