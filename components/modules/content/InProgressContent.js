import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { ShoppingCart } from '@mui/icons-material';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import ShortTextOutlinedIcon from '@mui/icons-material/ShortTextOutlined';

const InProgressStrategy = ({ data }) => {
    console.log(data)
    return (
        <a href="#" class="block my-2 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"><AssignmentOutlinedIcon /> {data?.title}</h5>
            <span class="bg-gray-100 gap-1 border border-green-300 text-green-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-green-300">
                <AssignmentIndOutlinedIcon />
                @ashsenior
            </span>
            <span class="bg-gray-100 gap-1 border border-indigo-300 text-indigo-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-indigo-300">
                <OfflineBoltOutlinedIcon />
                350
            </span>
            <span class="bg-gray-100 gap-1 border border-orange-300 text-orange-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-orange-300">
                <ShortTextOutlinedIcon />
                BRIEF
            </span>
        </a>
    );
};

export default InProgressStrategy;