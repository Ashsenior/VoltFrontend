import React from 'react';
import { Link, Button } from '@mui/material';
import { Biotech, Home } from "@mui/icons-material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Favorite } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/system';

const Social = () => {

    const socials = [
        {
            id: 1,
            title: 'Facebook',
            likes: '541',
            comments: '241',
            shares: '110',
            closeDate: '2020-01-07',
            closeDateFull: 'January 7, 2020',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:6997170312828084224/'
        },
        {
            id: 2,
            title: 'Instagram',
            likes: '321',
            comments: '1240',
            shares: '12',
            closeDate: '2020-01-07',
            closeDateFull: 'January 7, 2020',
            link: 'https://somethingsomethig.com'
        },
        {
            id: 3,
            title: 'LinkedIn',
            likes: '24',
            comments: '12',
            shares: '18',
            closeDate: '2020-01-14',
            closeDateFull: 'January 14, 2020',
            link: 'https://somethingsomethig.com'
        },
        {
            id: 4,
            title: 'Reddit',
            likes: '24',
            comments: '12',
            shares: '18',
            closeDate: '2020-01-14',
            closeDateFull: 'January 14, 2020',
            link: 'https://somethingsomethiglnvd.com'
        },
    ]

    return (
        <div className='p-4'>
            <>
                <div>
                    <p className="text-lg font-medium truncate flex items-center gap-2 mt-4"><FacebookIcon className='text-indigo-600' /> Facebook</p>
                    <div className="flex-shrink-0 flex">
                        Social Media Manager 
                        <p className="px-2 inline-flex ml-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            @ashsenior
                        </p>
                    </div>
                </div>
                <h4 className='text-xl font-bold border-b-2 my-2'>Posts</h4>
                <div className="bg-white shadow overflow-hidden">
                    <ul role="list" className="divide-y divide-gray-200">
                        {socials.map((post) => (
                            <li key={post.id}>
                                <a href="#" className="border-l-x-4 border-green-200 block hover:bg-gray-100">
                                    <div className="px-3 py-3 sm:px-3">
                                        <div className="flex items-center justify-between">
                                            <p className=" font-medium text-indigo-600 truncate">  {post.link}</p>
                                            <div className="ml-2 flex-shrink-0 flex">
                                                <h4 className='font-semibold mr-2'>By</h4>
                                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    @ashsenior
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex gap-2 text-red-100'>
                                            <p className='text-green-700'> <span >#</span>tags</p>
                                            <p className='text-green-700'> <span >#</span>tags</p>
                                            <p className='text-green-700'> <span >#</span>tags</p>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    <div className='text-sm flex '>
                                                        <h3 className='flex items-center rounded-lg p-1'>
                                                            <Button
                                                                className='text-red-700 text-sm bg-red-50'
                                                                disableRipple
                                                                component="a"
                                                                startIcon={<Favorite />}
                                                            >
                                                                {post.likes}
                                                            </Button>
                                                        </h3>
                                                        <h3 className='flex items-center rounded-lg p-1'>
                                                            <Button
                                                                className='text-purple-700 bg-purple-50'
                                                                disableRipple
                                                                component="a"
                                                                startIcon={<QuestionAnswerIcon />}
                                                            >
                                                                {post.likes}
                                                            </Button>
                                                        </h3>
                                                        <h3 className='flex items-center rounded-lg p-1'>
                                                            <Button
                                                                className='text-green-700 bg-green-50'
                                                                disableRipple
                                                                component="a"
                                                                startIcon={<SendIcon />}
                                                            >
                                                                {post.shares}
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
            </>
        </div>
    );
};

Social.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Social;