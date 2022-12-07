import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';

const InProgressStrategy = ({ data }) => {
    console.log(data)
    return (
        <div className='bg-white mt-4 rounded-md shadow-md p-3'>
            <h4 className='text-base font-semibold text-gray-600 border-b border-indigo-300 pb-1'>{data?.title}</h4>
            <div className='flex items-center gap-2 mt-1'>
                <p className='font-medium'>Progress</p>
                <progress className="progress w-full" value="60" max="100"></progress>
            </div>
            <div className='flex item-center gap-1 mt-1'>
                <h4 className='font-medium'>Head </h4>
                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    @{data?.head}
                </p>
            </div>
            <div className='flex items-center gap-1 mt-1'>
                <h4 className='font-medium'>Deadline: </h4>
                <p className='text-xs'>{data?.deadline}</p>
            </div>
            <p>{data?.content}</p>
            <div className='flex items-center gap-6 my-2 border-t border-indigo-300 pt-1'>
                <button className='flex items-center gap-2  hover:text-indigo-500'>
                    <PsychologyIcon />
                    <p className=''>{data?.marketing}</p>
                    <p>Marketing</p>
                </button>
                <button className='flex button items-center gap-2 hover:text-lime-400'>
                    <PostAddIcon />
                    <p className=''>{data?.research}</p>
                    <p>Research</p>
                </button>
            </div>
        </div>
    );
};

export default InProgressStrategy;