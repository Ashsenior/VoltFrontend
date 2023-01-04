import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';

const StrategyTask = ({ data }) => {
    return (
        <div className='bg-gray-800 mt-2 rounded-lg border p-4'>
            <h4 className='text-lg flex font-semibold text-gray-200 pb-1'>
                {data?.title}
            </h4>
            <div className='flex items-center gap-1 mt-1'>
                <span class="bg-gray-100 gap-1 text-gray-200 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
                    <AssignmentIndOutlinedIcon />
                    @ashsenior
                </span>
                <span class="bg-gray-100 gap-1 text-gray-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
                    <OfflineBoltOutlinedIcon />
                    350
                </span>
                <span class="bg-gray-100 gap-1 text-green-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-green-300">
                    <VerifiedOutlinedIcon />
                    11/12/2022
                </span>
            </div>
            <button className='w-full button p-1 rounded-md item-center text-white font-semibold bg-gray-500 mt-2' ><FileDownloadOutlinedIcon /> Download Report</button>
           
        </div>
    );
};

export default StrategyTask;