import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LinkedIn } from '@mui/icons-material';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';

const InProgress = ({ data }) => {
    console.log(data)
    return (
        <div className='bg-white mt-4 border rounded-md p-3'>
            <h4 className='text-lg flex font-semibold text-gray-600 pb-1'>
                {data?.title}
                <small className='flex ml-2 items-center text-blue-500'>
                    <OfflineBoltOutlinedIcon />
                    <p className='font-semibold'>350</p>
                </small>
            </h4>
            <div className='flex items-center gap-2 mt-1'>
                <p className='font-medium'>60%</p>
                <progress className="progress progress-info w-full" value="60" max="100"></progress>
            </div>
            <div className='flex item-center gap-1 mt-1'>
                <h4 className='font-medium text-gray-400'>LEAD </h4>
                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    @{data?.head}
                </p>
            </div>
            <div className='flex items-center gap-1 mt-1'>
                <h4 className='font-medium text-gray-400'>DEADLINE </h4>
                <p className='text-md font-semibold text-black'>{data?.deadline}</p>
            </div>
            <p className='p-1 my-1 rounded-md text-gray-700'>{data?.content.slice(0, 100)}...</p>
            <div className='flex items-center gap-6 border-indigo-300 pt-2'>
                <button className='w-1/3 font-semibold justify-center flex items-center gap-1 text-red-500'>
                    <YouTubeIcon />
                    <p className='font-semibold'>{data?.youtube}</p>
                    <small className='text-gray-400'>Posts</small>
                </button>
                <button className='w-1/3 justify-center flex button items-center gap-1 text-indigo-600'>
                    <LinkedIn />
                    <p className='font-semibold'>{data?.linkedIn}</p>
                    <small className='text-gray-400'>Posts</small>
                </button>
                <button className='w-1/3 justify-center flex button items-center gap-1 text-pink-500'>
                    <InstagramIcon />
                    <p className='font-semibold'>{data?.instagram}</p>
                    <small className='text-gray-400'>Posts</small>
                </button>
            </div>
        </div>
    );
};

export default InProgress;