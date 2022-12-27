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
        <div className='bg-gray-800 mt-2 rounded-xl border p-4'>
            <h4 className='text-lg flex font-semibold text-gray-200 pb-1'>
                {data?.title}
            </h4>
            <div className='flex items-center gap-1 mt-1'>
                <span class="bg-gray-100 gap-1 border border-gray-200 text-gray-200 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
                    <AssignmentIndOutlinedIcon />
                    @ashsenior
                </span>
                <span class="bg-gray-100 gap-1 border ml-2 border-gray-200 text-gray-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700">
                    <OfflineBoltOutlinedIcon />
                    350
                </span>
            </div>

            <div className='flex items-center gap-1 mt-2'>
                <h4 className='font-medium text-gray-400'>COMPLETED ON </h4>
                <p className='text-md text-gray-300'>11/12/2022</p>
            </div>
            <button className='w-full button p-1 rounded-lg item-center text-white font-semibold bg-gray-400 my-2' ><FileDownloadOutlinedIcon /> DOWNLOAD REPORT</button>
           
        </div>
    );
};

export default StrategyTask;