import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

const StrategyTask = ({ data }) => {
    return (
        <div className='bg-white mt-4 rounded-md shadow-md p-3'>
            <h4 className='text-base font-semibold text-gray-600 border-b border-red-300 pb-1'>{data?.title}</h4>
            <div className='flex item-center gap-1 mt-1'>
                <h4 className='font-medium'>Head </h4>
                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    @{data?.head}
                </p>
            </div>
            <div className='flex gap-1 mt-1'>
                <h4 className='font-medium'>Assigned</h4>
                <div className='flex flex-wrap gap-1'>
                    <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        @tag1
                    </p>
                    <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        @tag2
                    </p>
                    <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        @tag3
                    </p>
                    <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        @tag4
                    </p>
                </div>
            </div>
            <a href="">{data?.link}</a>
            <div className='grid grid-cols-3 gap-4 my-2 border-t border-gray-300 pt-1'>
                <div className='flex items-center text-indigo-500'>
                    <PsychologyIcon />
                    <p>Marketing</p>
                </div>
                <div className='flex items-center text-lime-500'>
                    <PostAddIcon />
                    <p>Research</p>
                </div>
                <div className='flex items-center text-blue-400'>
                    <WysiwygIcon />
                    <p>Product</p>
                </div>
            </div>
        </div>
    );
};

export default StrategyTask;