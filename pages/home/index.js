import React from 'react';
import Head from 'next/head';
import { FiSearch } from 'react-icons/fi';

import SidebarLayout from 'src/layouts/SidebarLayout';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Head>
                <title>Home</title>
            </Head>
            {/* Title and Startup Button */}
            <div className='w-11/12 mx-auto mt-5'>
                <div className='flex items-center justify-between  text-indigo-500 bg-white px-5 h-16 rounded-lg border-2 ease-in-out duration-150'>
                    <h1 className='text-2xl font-semibold'>Create New Startups</h1>
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">New Startups</button>

                </div>
            </div>
            {/* Fine Startup Searchbar */}
            <div className='w-8/12 flex items-center justify-center gap-4 mx-auto mt-10'>
                <input className='text-xl p-3 pl-8 w-full rounded-full focus:outline-indigo-600 focus:border-white shadow-lg' type="search" name="searchStartup" id="" placeholder='Find Startups' />
                <FiSearch className='text-4xl text-indigo-500 cursor-pointer'></FiSearch>
            </div>
            {/* Startups Card Section Title */}
            <div className='w-11/12 mx-auto mt-6 flex items-center justify-start gap-2'>
                <h1 className='text-2xl font-semibold'>Your Startups</h1>
                <div className='h-0.5 w-10 bg-indigo-500 rounded-full mt-2'></div>
            </div>
            {/* Startup cards */}
            <div className='w-11/12 mx-auto my-6'>
                <div className='flex justify-between border-2 border-indigo-500 rounded-lg p-4'>
                    <div className='w-8/12'>
                        <h1 className='text-xl font-bold'>Startup Title</h1>
                        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed consequatur nulla nemo, molestias alias libero, maiores dolores? Explicabo, dolor fugiat amet officia cumque ad.</p>
                    </div>
                    <div className='w-4/12 flex flex-col items-end justify-between gap-2'>
                        <div>
                            <h4 className='font-semibold'>S Member</h4>
                            <h4>750 <span className='text-indigo-500 font-bold'>Volts</span></h4>
                        </div>
                        <button type="button" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hassle</button>
                    </div>
                </div>
            </div>
            {/* All Startups */}
            <div className='w-11/12 mx-auto mt-6 flex items-center justify-start gap-2'>
                <h1 className='text-2xl font-semibold'>All Startups</h1>
                <div className='h-0.5 w-10 bg-indigo-500 rounded-full mt-2'></div>
            </div>
            {/* All startup Cards */}
            <div className='w-11/12 mx-auto my-6'>
                <div className='flex justify-between border-2 border-indigo-500 rounded-lg p-4'>
                    <div className='w-8/12'>
                        <h1 className='text-xl font-bold'>Startup Title</h1>
                        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed consequatur nulla nemo, molestias alias libero, maiores dolores? Explicabo, dolor fugiat amet officia cumque ad.</p>
                    </div>
                    <div className='w-4/12 flex flex-col items-end justify-between gap-2'>
                        <div>
                            <h4 className='font-semibold'>S Member</h4>
                            <h4>750 <span className='text-indigo-500 font-bold'>Volts</span></h4>
                        </div>
                        <button type="button" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hassle</button>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto my-6'>
                <div className='flex justify-between border-2 border-indigo-500 rounded-lg p-4'>
                    <div className='w-8/12'>
                        <h1 className='text-xl font-bold'>Startup Title</h1>
                        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed consequatur nulla nemo, molestias alias libero, maiores dolores? Explicabo, dolor fugiat amet officia cumque ad.</p>
                    </div>
                    <div className='w-4/12 flex flex-col items-end justify-between gap-2'>
                        <div>
                            <h4 className='font-semibold'>S Member</h4>
                            <h4>750 <span className='text-indigo-500 font-bold'>Volts</span></h4>
                        </div>
                        <button type="button" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hassle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Home;