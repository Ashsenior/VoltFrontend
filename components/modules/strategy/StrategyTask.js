import React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';

const StrategyTask = ({ data }) => {
    return (
        <div className='bg-white mt-4 rounded-md border p-3'>
            <h4 className='text-lg font-semibold text-gray-600 pb-1'>{data?.title} <VerifiedOutlinedIcon className='text-green-400' /></h4>
            <div className='flex item-center gap-1 mt-1'>
                <h4 className='font-medium text-gray-400'>LEAD </h4>
                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    @{data?.head}
                </p>
            </div>

            <div className='flex items-center gap-1 mt-1'>
                <h4 className='font-medium text-gray-400'>COMPLETED ON </h4>
                <p className='text-md'>11/12/2022</p>
            </div>
            <button className='w-full button p-2 border rounded-lg item-center font-semibold text-gray-400 my-2' ><FileDownloadOutlinedIcon /> DOWNLOAD REPORT</button>
            <div className='flex flex-row'>
            <h3 className='w-1/2 flex gap-1 items-center p-2 text-indigo-500 justify-center'>
                <OfflineBoltOutlinedIcon />
                <p className='font-semibold'>350</p>
            </h3>
            <h3 className='w-1/2 flex gap-1 items-center bg-indigo-500 p-2 justify-center text-white'>
                <p className='font-semibold'>High Success</p>
            </h3>
            </div>
        </div>
    );
};

export default StrategyTask;