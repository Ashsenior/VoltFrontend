import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LinkedIn } from '@mui/icons-material';

const Completed = ({ data }) => {
    return (
        <div className='bg-white mt-4 rounded-md shadow-md p-3'>
            <h4 className='text-base font-semibold text-gray-600 border-b border-indigo-300 pb-1'>{data?.title}</h4>
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
                <button className='flex items-center gap-2  hover:text-red-500'>
                    <YouTubeIcon />
                    <p className=''>{data?.youtube}</p>
                </button>
                <button className='flex button items-center gap-2 hover:text-orange-400'>
                    <LinkedIn />
                    <p className=''>{data?.linkedIn}</p>
                </button>
                <button className='flex button items-center gap-2 hover:text-red-500'>
                    <InstagramIcon />
                    <p className=''>{data?.instagram}</p>
                </button>
            </div>
        </div>
    );
};

export default Completed;