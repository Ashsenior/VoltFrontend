import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { ShoppingCart } from '@mui/icons-material';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

const CompletedStrategy = ({ data }) => {
    return (
        <div className='bg-gray-800 border mt-2 rounded-xl p-4'>
            <h4 className='text-lg font-semibold text-gray-200 pb-1'>{data?.title}</h4>
            <div className='flex items-center gap-1 mt-1'>
                <span class="bg-gray-100 gap-1 border border-green-200 text-green-200 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
                    <AssignmentIndOutlinedIcon />
                    @ashsenior
                </span>
                <span class="bg-gray-100 gap-1 border ml-2 border-green-200 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
                    <OfflineBoltOutlinedIcon />
                    350
                </span>
            </div>
            <div className='flex items-center gap-2 mt-1'>
                <p className='font-medium text-gray-300'>100%</p>
                <progress className="progress progress-success w-full" value="100" max="100"></progress>
            </div>
            <div className='py-2'>
            <a href="#xc" className='flex items-center text-gray-300 mt-1 bg-gray-700 hover:bg-gray-500 hover:text-gray-100 gap-1'>
                    <small className='p-1 text-white'><ShoppingCart /></small>
                    <p className='text-md font-semibold '>Reach out to mentors and ecells.</p>
                    <small className='p-1 text-green-500'><VerifiedOutlinedIcon /></small>
                </a>
                <a href="#xc" className='flex items-center  mt-1 bg-gray-700 gap-1 hover:bg-gray-500 hover:text-gray-100'>
                    <small className='p-1 text-white'><PostAddIcon /></small>
                    <p className='text-md font-semibold text-gray-300'>Find out the pain points of e-cells in delhi.</p>
                    <small className='p-1 text-green-500'><VerifiedOutlinedIcon /></small>
                </a>
            </div>
            <button className='flex text-gray-100 rounded-md py-1 w-full bg-gray-500 justify-center items-center gap-1 hover:text-lime-400'>
                <PostAddIcon />
                <p className='font-semibold'>Add Sub Strategy</p>
            </button>
        </div>
    );
};

export default CompletedStrategy;