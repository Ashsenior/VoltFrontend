import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';

const Task = ({ data }) => {
    return (
        <div className='bg-white mt-4 border rounded-md p-3'>
            <h4 className='text-lg flex font-semibold text-gray-600 pb-1'>
                <small className='flex mr-2 items-center text-red-500'>
                    <YouTubeIcon />
                </small>
                {data?.title}
                <small className='flex ml-2 items-center text-indigo-500'>
                    <OfflineBoltOutlinedIcon />
                    <p className='font-semibold'>150</p>
                </small>
            </h4>
            <div className='flex items-center gap-2 mt-1'>
                <p className='font-medium'>7/12</p>
                <progress className="progress w-full" value="60" max="100"></progress>
            </div>
            <div className='flex item-center gap-1 mt-1'>
                <h4 className='font-medium text-gray-400'>ASSIGNED TO</h4>
                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    @{data?.head}
                </p>
            </div>
            <div className='flexy mt-1'>
            <table class="min-w-full border text-center">
                <thead class="border-b">
                    <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-1 border-r">
                        High
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-1 border-r">
                        Medium
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-1">
                        Low
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
                        12 posts
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap border-r">
                        2 posts
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        6 posts
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Task;