import React from 'react';
import { Router } from 'next/router';
import { Link, Button } from '@mui/material';
import { Biotech, Home } from "@mui/icons-material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';


import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const socials = [
    {
        id: 1,
        title: 'Facebook',
        likes: '541',
        comments: '241',
        shares: '110',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
        link: 'https://somethingsomethig.com'
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
        link: 'https://somethingsomethig.com'
    },
]

const Socials = () => {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='mt-10'>
            <div>
                {/* New Design */}



                <div>
                    {socials.map(social => (<>
                        <div

                            className='p-2 bg-white rounded-lg mb-4 shadow-md hover:shadow-lg'>
                            <div className='flex items-center justify-between mb-5'>
                                <button
                                    onClick={() => Router.push('/social')}
                                    type='button'
                                    className="text-lg font-medium truncate flex items-center gap-2 cursor-pointer"><FacebookIcon className='text-indigo-600' /> {social.title}</button>
                                <div className="ml-2 flex-shrink-0 flex">
                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        @ashsenior
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-5'>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>200</span>
                                    <ThumbUpIcon />
                                    <span>Likes</span>
                                </div>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>800</span>
                                    <QuestionAnswerIcon />
                                    <span>Comments</span>
                                </div>
                            </div>
                        </div>
                    </>))}
                </div>




                {/* Socials accordion */}

                {/*
.
                    

                <Accordion className='border-none my-4 ' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        className='h-28 rounded-lg bg-white shadow-lg'
                        aria-controls="panel1d-content" id="panel1d-header">
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-medium truncate flex items-center gap-2"><FacebookIcon className='text-indigo-600' /> Facebook</p>
                            <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    @ashsenior
                                </p>
                            </div>
                            <div className='flex items-center justify-start gap-10'>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>200</span>
                                    <ThumbUpIcon />
                                    <span>Likes</span>
                                </div>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>800</span>
                                    <QuestionAnswerIcon />
                                    <span>Comments</span>
                                </div>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h4 className='text-xl font-bold border-b-2 my-2'>Posts</h4>
                        <div className="bg-white shadow overflow-hidden">
                            <ul role="list" className="divide-y divide-gray-200">
                                {socials.map((post) => (
                                    <li key={post.id}>
                                        <a href="#" className="border-l-x-4 border-green-200 block hover:bg-gray-100">
                                            <div className="px-3 py-3 sm:px-3">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-lg font-medium text-indigo-600 truncate">  {post.link}</p>
                                                    <div className="ml-2 flex-shrink-0 flex">
                                                        <h4 className='font-semibold mr-2'>Manager</h4>
                                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            @ashsenior
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
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
                                                                        {post.likes} Likes
                                                                    </Button>
                                                                </h3>
                                                                <h3 className='flex items-center rounded-lg p-1'>
                                                                    <Button
                                                                        className='text-green-700 bg-green-50'
                                                                        disableRipple
                                                                        component="a"
                                                                        startIcon={<QuestionAnswerIcon className='text-gray-600' />}
                                                                    >
                                                                        {post.likes} Comments
                                                                    </Button>
                                                                </h3>
                                                                <h3 className='flex items-center rounded-lg p-1'>
                                                                    <Button
                                                                        className='text-green-700 bg-green-50'
                                                                        disableRipple
                                                                        component="a"
                                                                        startIcon={<SendIcon className='text-green-700' />}
                                                                    >
                                                                        {post.shares} Shares
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
                    </AccordionDetails>
                </Accordion>
                <Accordion className='border-none my-4 ' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        className='h-28 rounded-lg bg-white shadow-lg'
                        aria-controls="panel1d-content" id="panel1d-header">
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-medium truncate flex items-center gap-2"><LinkedInIcon className='text-indigo-700' /> LinkedIn</p>
                            <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    @ashsenior
                                </p>
                            </div>
                            <div className='flex items-center justify-start gap-10'>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>200</span>
                                    <ThumbUpIcon />
                                    <span>Likes</span>
                                </div>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>800</span>
                                    <QuestionAnswerIcon />
                                    <span>Comments</span>
                                </div>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h4 className='text-xl font-bold border-b-2 my-2'>Posts</h4>
                        <div className="bg-white shadow overflow-hidden">
                            <ul role="list" className="divide-y divide-gray-200">
                                {socials.map((post) => (
                                    <li key={post.id}>
                                        <a href="#" className="border-l-x-4 border-green-200 block hover:bg-gray-100">
                                            <div className="px-3 py-3 sm:px-3">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-lg font-medium text-indigo-600 truncate">  {post.link}</p>
                                                    <div className="ml-2 flex-shrink-0 flex">
                                                        <h4 className='font-semibold mr-2'>Manager</h4>
                                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            @ashsenior
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
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
                                                                        {post.likes} Likes
                                                                    </Button>
                                                                </h3>
                                                                <h3 className='flex items-center rounded-lg p-1'>
                                                                    <Button
                                                                        className='text-green-700 bg-green-50'
                                                                        disableRipple
                                                                        component="a"
                                                                        startIcon={<QuestionAnswerIcon className='text-gray-600' />}
                                                                    >
                                                                        {post.likes} Comments
                                                                    </Button>
                                                                </h3>
                                                                <h3 className='flex items-center rounded-lg p-1'>
                                                                    <Button
                                                                        className='text-green-700 bg-green-50'
                                                                        disableRipple
                                                                        component="a"
                                                                        startIcon={<SendIcon className='text-green-700' />}
                                                                    >
                                                                        {post.shares} Shares
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
                    </AccordionDetails>
                </Accordion>
                <Accordion className='border-none my-4 ' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        className='h-28 rounded-lg bg-white shadow-lg'
                        aria-controls="panel1d-content" id="panel1d-header">
                        <div className="flex items-center gap-5">
                            <p className="text-lg font-medium truncate flex items-center gap-2"><RedditIcon className='text-orange-600' /> Reddit</p>
                            <div className="ml-2 flex-shrink-0 flex">
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    @ashsenior
                                </p>
                            </div>
                            <div className='flex items-center justify-start gap-10'>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>200</span>
                                    <ThumbUpIcon />
                                    <span>Likes</span>
                                </div>
                                <div className='flex items-center gap-1 p-1 border-2 w-fit rounded-lg'>
                                    <span>800</span>
                                    <QuestionAnswerIcon />
                                    <span>Comments</span>
                                </div>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h4 className='text-xl font-bold border-b-2 my-2'>Posts</h4>
                        <div className="bg-white shadow overflow-hidden">
                            <ul role="list" className="divide-y divide-gray-200">
                                {socials.map((post) => (
                                    <li key={post.id}>
                                        <a href="#" className="border-l-x-4 border-green-200 block hover:bg-gray-100">
                                            <div className="px-3 py-3 sm:px-3">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-lg font-medium text-indigo-600 truncate">  {post.link}</p>
                                                    <div className="ml-2 flex-shrink-0 flex">
                                                        <h4 className='font-semibold mr-2'>Manager</h4>
                                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            @ashsenior
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
                                                    <p className='text-blue-700'> <span >#</span>tags</p>
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
                                                                        {post.likes} Likes
                                                                    </Button>
                                                                </h3>
                                                                <h3 className='flex items-center rounded-lg p-1'>
                                                                    <Button
                                                                        className='text-green-700 bg-green-50'
                                                                        disableRipple
                                                                        component="a"
                                                                        startIcon={<QuestionAnswerIcon className='text-gray-600' />}
                                                                    >
                                                                        {post.likes} Comments
                                                                    </Button>
                                                                </h3>
                                                                <h3 className='flex items-center rounded-lg p-1'>
                                                                    <Button
                                                                        className='text-green-700 bg-green-50'
                                                                        disableRipple
                                                                        component="a"
                                                                        startIcon={<SendIcon className='text-green-700' />}
                                                                    >
                                                                        {post.shares} Shares
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
                    </AccordionDetails>
                </Accordion>
                */}

            </div>

        </div>
    );
};

export default Socials;