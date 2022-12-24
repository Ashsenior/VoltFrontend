import React from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const IdeaCard = ({ idea }) => {
    return (
        <div className='flex gap-1 text-gray-600 hover:bg-gray-100 border-b border-gray-200 my-1'>
            <img className='w-12 h-12 rounded-full p-1' src={idea.image} alt="" />
            <div className='flex flex-col p-1'>
                <div className='flex items-center gap-1'>
                    <h4 className='text-base font-semibold'>{idea.name}</h4>
                    <h4 className='text-gray-400'>@{idea.tag}</h4>
                </div>
                <p className='text-gray-500'>{idea.content}</p>
                <div className='flex items-center gap-6 my-2 '>
                    <button className='flex items-center gap-2  hover:text-green-500'>
                        <TipsAndUpdatesOutlinedIcon />
                        <p className='font-semibold'>{idea.support}</p>
                        <p className='text-gray-400'>Support</p>
                    </button>
                    <button className='flex button items-center gap-2 hover:text-red-500'>
                        <WorkOutlineOutlinedIcon />
                        <p className='font-semibold'>{idea.work}</p>
                        <p className='text-gray-400'>Open to Work</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;