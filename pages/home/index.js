import React from 'react';
import Router from "next/router";
import { FiSearch } from 'react-icons/fi';

import BaseLayout from 'src/layouts/BaseLayout';
import StartupCard from './StartupCard';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            {/* Title and Startup Button */}
            <div className='w-full bg-white'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h1 className='text-xl font-semibold'>Any new idea💡?</h1>
                    <button
                        onClick={() => Router.push('/create_startup')}
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Create New Startup
                    </button>
                </div>
            </div>
            {/* Fine Startup Searchbar */}
            <div className='w-8/12 flex items-center justify-center gap-2 mx-auto mt-10'>
                <input className='text-xl p-3 pl-6 w-full bg-white rounded-full focus:outline-white shadow-lg' type="search" name="searchStartup" id="" placeholder='Find Startups' />
                <FiSearch className='text-4xl text-indigo-500 cursor-pointer'></FiSearch>
            </div>
            {/* Startups Card Section Title */}
            <div className='w-11/12 mx-auto mt-6 flex items-center justify-start gap-2'>
                <h1 className='text-l font-semibold'>Your Startups</h1>
                <div className='h-0.5 w-10 bg-indigo-500 rounded-full mt-2'></div>
            </div>
            {/* Startup cards */}
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2'>
                <StartupCard />
                <StartupCard />
            </div>
            {/* All Startups */}
            <div className='w-11/12 mx-auto mt-6 flex items-center justify-start gap-2'>
                <h1 className='text-l font-semibold'>All Startups</h1>
                <div className='h-0.5 w-10 bg-indigo-500 rounded-full mt-2'></div>
            </div>
            {/* All startup Cards */}
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2'>

                <StartupCard />
                <StartupCard />
                <StartupCard />
                <StartupCard />
            </div>
        </div>
    );
};

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Home;