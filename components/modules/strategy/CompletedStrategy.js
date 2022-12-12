import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { ShoppingCart } from '@mui/icons-material';

const CompletedStrategy = ({ data }) => {
    return (
        <div className='bg-white border mt-4 rounded-md p-3'>
            <h4 className='text-lg font-semibold text-gray-600 pb-1'>{data?.title}</h4>
            <div className='flex items-center gap-2 mt-1'>
                <p className='font-medium'>60%</p>
                <progress className="progress progress-success w-full" value="100" max="100"></progress>
            </div>
            <div className='flex item-center gap-1 mt-1'>
                <h4 className='font-medium text-gray-400'>LEAD </h4>
                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    @{data?.head}
                </p>
            </div>
            <div className='flex items-center gap-1 mt-1'>
                <h4 className='font-medium text-gray-400'>DEADLINE </h4>
                <p className='text-md font-semibold text-black'>{data?.deadline}</p>
            </div>
            <p className=' my-1 rounded-md text-gray-700 '>{data?.content.slice(0, 100)}...</p>
            <div className='flex items-center text-gray-500 gap-6 my-2 border-green-300 pt-1'>
                <button className='flex gap-1 items-center hover:text-green-500'>
                    <ShoppingCart />
                    <p className='font-semibold'>{data?.marketing}</p>
                    <small className='text-gray-400'>Marketing</small>
                </button>
                <button className='flex button items-center gap-1 hover:text-lime-400'>
                    <PostAddIcon />
                    <p className='font-semibold'>{data?.research}</p>
                    <small className='text-gray-400 '>Research</small>
                </button>
                <button className='flex button items-center gap-1 hover:text-indigo-400'>
                    <WysiwygIcon />
                    <p className='font-semibold'>{data?.research}</p>
                    <small className='text-gray-400 '>Product</small>
                </button>
            </div>
        </div>
    );
};

export default CompletedStrategy;