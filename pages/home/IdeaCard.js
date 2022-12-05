import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';

const IdeaCard = ({ idea }) => {
    return (
        <div className='flex gap-1 border-b border-gray-500 my-2'>
            <div className='flex items-start justify-start'>
                <img className='w-12 rounded-full p-1' src={idea.image} alt="" />
            </div>
            <div className='flex flex-col p-1'>
                <div className='flex items-center gap-1'>
                    <h4 className='text-base font-semibold'>{idea.name}</h4>
                    <h4 className='text-gray-600'>@{idea.tag}</h4>
                </div>
                <p>{idea.content}</p>
                <div className='flex items-center gap-6 my-2 '>
                    <div className='flex items-center gap-1  hover:text-green-500'>
                        <FaHandsHelping className='text-base'></FaHandsHelping>
                        <p>Support</p>
                        <p>{idea.support}</p>
                    </div>
                    <div className='flex items-center gap-1 hover:text-red-500'>
                        <BsPeopleFill className='text-base'></BsPeopleFill>
                        <p>Work</p>
                        <p>{idea.work}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;