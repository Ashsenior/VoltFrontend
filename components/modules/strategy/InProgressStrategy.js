import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { ShoppingCart } from '@mui/icons-material';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const InProgressStrategy = ({ data }) => {
    console.log(data)
    return (
        <div className='bg-gray-800 border rounded-lg mt-2 p-4'>
            <h4 className='text-lg flex font-semibold text-gray-200 pb-1'>
              {data?.details?.strategyTitle}
            </h4>
            <div className='flex items-center gap-1 mt-1'>
                <span class="bg-gray-100 gap-1 text-blue-200 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
                    <AssignmentIndOutlinedIcon />
                    @{data?.details?.strategyLeader}
                </span>
                <span class="bg-gray-100 gap-1 text-indigo-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-indigo-300">
                    <OfflineBoltOutlinedIcon />
                    {data?.details?.points}
                </span>
            </div>
            <div className='flex items-center gap-2 mt-1'>
                <p className='font-medium text-gray-300'>60%</p>
                <progress className="progress progress-info w-full" value="60" max="100"></progress>
            </div>
            <div className='py-2'>
                <a href="#xc" className='flex items-center text-gray-300 mt-1 bg-gray-700 hover:bg-gray-500 hover:text-gray-100 gap-1'>
                    <small className='p-1 text-gray-300'><ShoppingCart /></small>
                    <p className='text-md font-semibold '>Reach out to mentors and ecells.</p>
                    <small className='p-1 text-green-500'><VerifiedOutlinedIcon /></small>
                </a>
                <a href="#xc" className='flex items-center  mt-1 bg-gray-700 gap-1 hover:bg-gray-500 hover:text-gray-100'>
                    <small className='p-1 text-gray-300'><PostAddIcon /></small>
                    <p className='text-md font-semibold text-gray-300'>Find out the pain points of e-cells in delhi.</p>
                    <small className='p-1 text-green-500'><VerifiedOutlinedIcon /></small>
                </a>
                <a href="#xc" className='flex items-center  mt-1 bg-gray-700 gap-1 hover:bg-gray-500 hover:text-gray-100'>
                    <small className='p-1 text-gray-300'><ShoppingCart /></small>
                    <p className='text-md font-semibold text-gray-300'>Recreate the meme marketing strategy.</p>
                </a>
                <a href="#xc" className='flex items-center  mt-1 bg-gray-700 gap-1 hover:bg-gray-500 hover:text-gray-100'>
                    <small className='p-1 text-gray-300'><PostAddIcon /></small>
                    <p className='text-md font-semibold text-gray-300'>Work on the solution for ecells with R&D team.</p>
                </a>
            </div>
            <button className='flex text-gray-100 rounded-md py-1 w-full bg-gray-500 justify-center items-center gap-1 hover:text-lime-400'>
                <PostAddIcon />
                <p className='font-semibold'>Add Sub Strategy</p>
            </button>
        </div>
    );
};

export default InProgressStrategy;
