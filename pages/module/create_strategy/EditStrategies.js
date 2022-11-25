import { Accordion, AccordionDetails, AccordionSummary, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ShoppingCart } from '@mui/icons-material';
import CreateMeetingModal from '../../dashboards/Meetings/CreateMeetingModal';
import { useState } from 'react';

const applications = [
    {
        applicant: {
            name: 'New LinkedIn Campaign',
            leader: '@newcadet',
        },
        date: '2020-01-07',
        dateFull: 'January 7, 2020',
        tasks: '4',
        href: '#',
    },
    {
        applicant: {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        date: '2020-01-07',
        dateFull: 'January 7, 2020',
        stage: 'Completed phone screening',
        href: '#',
    },
    {
        applicant: {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        date: '2020-01-07',
        dateFull: 'January 7, 2020',
        stage: 'Completed phone screening',
        href: '#',
    },
]

const EditStrategies = ({ strategy }) => {

    return (
        <>
            <div className='w-full bg-indigo-500 border-b rounded-b-xl '>
                <div className='w-12/12 flex items-center justify-between mx-auto px-2 rounded-lg py-2'>
                    <h1 className='text-xl text-white font-semibold'>Did the strategy worked?</h1>
                    <label
                        // onClick={() => Router.push('/create_startup')}
                        htmlFor="edit-startups-modal"
                        type="button" className="inline-flex items-center px-2 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit the results
                    </label>
                </div>
            </div>

            <input type="checkbox" id="edit-startups-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <div className="modal-action flex flex-col">
                        <h1 className='text-xl font-semibold my-4 text-center m-2'>Submit and close this strategy</h1>
                        <Box
                            className='mt-4'
                            sx={{
                                maxWidth: '100%',
                            }}
                        >
                            <TextField
                                style={{ width: "100%" }}
                                id="outlined-multiline-static"
                                label="Strategy outcomes"
                                multiline
                                minRows={4}
                            />
                        </Box>
                        <Box
                            className='mt-4'
                        >
                            <TextField label="Metrics met" id="fullWidth" />
                        </Box>
                        <div className="max-w-xl m-4">
                            <label
                                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Drop result documents , or
                                        <span className="text-blue-600 underline mx-1">browse</span>
                                    </span>
                                </span>
                                <input type="file" name="file_upload" className="hidden" />
                            </label>
                        </div>
                        <label htmlFor="edit-startups-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <label type="button" htmlFor="edit-startups-modal" className="btn mt-2 border-0 bg-indigo-500 text-white">Submit and Close Strategy</label>
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Strategy Name {strategy?.strategyTitle}</h1>
                    <Link to="" type='button' className='btn btn-sm'>In Progress</Link>
                </div>
                <medium>Strategy leader
                    <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {strategy?.strategyLeader}
                    </p></medium>
                <h4>Start Date: <span>{strategy?.approxStartDate}</span></h4>
                <div className='grid grid-cols-1 xl:grid-cols-2 p-2' >
                    <div className='mt-6'>
                        <h4 className='text-lg font-semibold'>Customer it impacts</h4>
                        <p className='p-1'>{strategy?.customer}</p>
                    </div>
                    <div className='mt-2'>
                        <h4 className='text-base font-semibold'>Success Metrics</h4>
                        <div className='flex gap-4 text-sm'>
                            <div className=' p-2 rounded-xl bg-green-100 text-green-700 flex items-center justify-center'>
                                <p>1,200 Likes on LinkedIn</p>
                            </div>
                            <div className=' p-2 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center'>
                                <p>1,200 Likes on LinkedIn</p>
                            </div>
                            <div className=' p-2 rounded-xl bg-red-100 text-red-700 flex items-center justify-center'>
                                <p>1,200 Likes on LinkedIn</p>
                            </div>

                        </div>
                        {/* Accordion for Marketing Sales Researchers */}

                        <div className='mt-6 text-white'>
                            <Accordion className='bg-base-200 text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className="text-white" />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Marketing 3</Typography>
                                </AccordionSummary>
                                <AccordionDetails className='bg-white text-base'>
                                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                        <ul role="list" className="divide-y divide-gray-200">
                                            {applications.map((application) => (
                                                <li key={application.applicant.email}>
                                                    <a href={application.href} className="block hover:bg-gray-50">
                                                        <div className="flex items-center px-4 py-4 sm:px-6">
                                                            <div className="min-w-0 flex-1 flex items-center">
                                                                <div className="flex-shrink-0">
                                                                    <ShoppingCart className='text-purple-500 bg-purple-100' />
                                                                </div>
                                                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                                    <div>
                                                                        <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                                                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                                            @ashsenior
                                                                        </p>
                                                                    </div>
                                                                    <div className="hidden md:block">
                                                                        <div>
                                                                            <p className="text-sm text-gray-900">
                                                                                Start Date: <time dateTime={application.date}>{application.dateFull}</time>
                                                                            </p>
                                                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                                <e className="px-2 py bg-green-100 text-green-700 text-white rounded-2xl mx-2" >3 tasks</e>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='bg-base-200 text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className="text-white" />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Sales 2</Typography>
                                </AccordionSummary>
                                <AccordionDetails className='bg-white text-base'>
                                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                        <ul role="list" className="divide-y divide-gray-200">
                                            {applications.map((application) => (
                                                <li key={application.applicant.email}>
                                                    <a href={application.href} className="block hover:bg-gray-50">
                                                        <div className="flex items-center px-4 py-4 sm:px-6">
                                                            <div className="min-w-0 flex-1 flex items-center">
                                                                <div className="flex-shrink-0">
                                                                    <ShoppingCart className='text-purple-500 bg-purple-100' />
                                                                </div>
                                                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                                    <div>
                                                                        <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                                                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                                            @ashsenior
                                                                        </p>
                                                                    </div>
                                                                    <div className="hidden md:block">
                                                                        <div>
                                                                            <p className="text-sm text-gray-900">
                                                                                Start Date: <time dateTime={application.date}>{application.dateFull}</time>
                                                                            </p>
                                                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                                <e className="px-2 py bg-green-100 text-green-700 text-white rounded-2xl mx-2" >3 tasks</e>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='bg-base-200 text-white'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className="text-white" />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Researchers 1</Typography>
                                </AccordionSummary>
                                <AccordionDetails className='bg-white text-base'>
                                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                        <ul role="list" className="divide-y divide-gray-200">
                                            {applications.map((application) => (
                                                <li key={application.applicant.email}>
                                                    <a href={application.href} className="block hover:bg-gray-50">
                                                        <div className="flex items-center px-4 py-4 sm:px-6">
                                                            <div className="min-w-0 flex-1 flex items-center">
                                                                <div className="flex-shrink-0">
                                                                    <ShoppingCart className='text-purple-500 bg-purple-100' />
                                                                </div>
                                                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                                    <div>
                                                                        <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                                                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                                                                            @ashsenior
                                                                        </p>
                                                                    </div>
                                                                    <div className="hidden md:block">
                                                                        <div>
                                                                            <p className="text-sm text-gray-900">
                                                                                Start Date: <time dateTime={application.date}>{application.dateFull}</time>
                                                                            </p>
                                                                            <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                                <e className="px-2 py bg-green-100 text-green-700 text-white rounded-2xl mx-2" >3 tasks</e>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditStrategies;