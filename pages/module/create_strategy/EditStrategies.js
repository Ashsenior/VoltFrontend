import { Accordion, AccordionDetails, AccordionSummary, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ShoppingCart } from '@mui/icons-material';

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

const EditStrategies = () => {
    return (
        <>
        <div className='w-full bg-white'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-4 rounded-lg py-3'>
                    <h1 className='text-xl font-semibold'>Submit💡?</h1>
                    <button
                        onClick={() => Router.push('/create_startup')}
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Create New Startup
                    </button>
                </div>
            </div>
        <div className='mt-6'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Strategy Name (Major)</h1>
                <Link to="" type='button' className='btn btn-sm'>In Progress</Link>
            </div>
            <medium>Strategy leader 
                <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                @ashsenior
                </p></medium>
            <h4>Start Date: <span>11/12/2022</span></h4>
            <div className='grid grid-cols-1 xl:grid-cols-2 p-3' >
                <div className='mt-6'>
                    <h4 className='text-lg font-semibold'>Customer it impacts</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, mollitia est nihil laudantium explicabo itaque omnis impedit fugiat officiis, voluptas, aut saepe voluptates odio praesentium recusandae velit? Debitis dignissimos nesciunt eos qui! Blanditiis nisi id esse omnis, consectetur modi nulla sit sunt! Reiciendis illo explicabo laboriosam voluptates consequuntur vel quas corporis.</p>
                </div>
                <div className='mt-6'>
                    <h4 className='text-lg font-semibold'>Strategy description</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, optio unde! Inventore repudiandae magni sed porro maiores omnis possimus eos voluptatem aliquam aperiam ex quos velit fugiat voluptatum, vel suscipit distinctio est perspiciatis quam earum nisi facere! Saepe fuga accusantium velit voluptate ea necessitatibus repellat reiciendis qui tempora ad. Exercitationem omnis mollitia consequuntur quaerat non! Quis soluta ex at numquam suscipit illum rerum, ipsa, earum laboriosam nobis velit quia placeat reprehenderit, officiis quo ut porro distinctio optio accusantium praesentium? Dolor, molestias corrupti, eos laudantium assumenda ullam voluptates rerum dignissimos quam.</p>
                </div>
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
        </>
    );
};

export default EditStrategies;