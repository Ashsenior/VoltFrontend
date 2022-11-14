import React from 'react';
import { Link, Button } from '@mui/material';
import { Biotech, Home } from "@mui/icons-material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import RedditIcon from '@mui/icons-material/Reddit';

const socials = [
    {
        id: 1,
        title: 'Facebook',
        likes: '541',
        comments: '241',
        shares: '110',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
    },
    {
        id: 2,
        title: 'Instagram',
        likes: '321',
        comments: '1240',
        shares: '12',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
    },
    {
        id: 3,
        title: 'LinkedIn',
        likes: '24',
        comments: '12',
        shares: '18',
        closeDate: '2020-01-14',
        closeDateFull: 'January 14, 2020',
    },
    {
        id: 4,
        title: 'Reddit',
        likes: '24',
        comments: '12',
        shares: '18',
        closeDate: '2020-01-14',
        closeDateFull: 'January 14, 2020',
    },
]

const Socials = () => {

    return (
        <div className='mt-10'>
            <div className="bg-white shadow overflow-hidden">
                <ul role="list" className="divide-y divide-gray-200">
                    {socials.map((position) => (
                        <li key={position.id}>
                            <a href="#" className="border-l-x-4 border-green-200 block hover:bg-gray-100">
                                <div className="px-3 py-3 sm:px-3">
                                    <div className="flex items-center justify-between">
                                        <p className="text-lg font-medium text-indigo-600 truncate">  {position.title}</p>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <h4 className='font-semibold mr-2'>Manager</h4>
                                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                @ashsenior
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                <div className='flex items-center justify-start'>
                                                    <h3 className='flex items-center rounded-lg '>
                                                        <Button
                                                            className='text-green-700 bg-green-50'
                                                            disableRipple
                                                            component="a"
                                                            startIcon={< ThumbUpIcon className='text-blue-600' />}
                                                        >
                                                            {position.likes} Likes
                                                        </Button>
                                                    </h3>
                                                    <h3 className='flex items-center rounded-lg p-1'>
                                                        <Button
                                                            className='text-green-700 bg-green-50'
                                                            disableRipple
                                                            component="a"
                                                            startIcon={<QuestionAnswerIcon className='text-gray-600' />}
                                                        >
                                                            {position.likes} Comments
                                                        </Button>
                                                    </h3>
                                                    <h3 className='flex items-center rounded-lg p-1'>
                                                        <Button
                                                            className='text-green-700 bg-green-50'
                                                            disableRipple
                                                            component="a"
                                                            startIcon={<SendIcon className='text-green-700' />}
                                                        >
                                                            {position.shares} Shares
                                                        </Button>
                                                    </h3>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Socials;