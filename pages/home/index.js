import React from 'react';
import Router from "next/router";
import { FiSearch } from 'react-icons/fi';

import BaseLayout from 'src/layouts/BaseLayout';
import StartupCard from './StartupCard';
import PublicStartupCard from './PublicStartupCard';
import Head from 'next/head';
import { Container } from '@mui/system';

const Home = () => {

    const startups = [
        {
            id: '00001',
            image: 'https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg',
            title: 'Startup Title',
            founded: '2005',
            members: '4',
            vision: 'Think Big Do Small',
            voltPoints: '45',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed'
        },
        {
            id: '00002',
            image: 'https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg',
            title: 'Startup Title',
            founded: '2005',
            members: '4',
            vision: 'Think Big Do Small',
            voltPoints: '45',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed'
        },
        {
            id: '00003',
            image: 'https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg',
            title: 'Startup Title',
            founded: '2005',
            members: '4',
            vision: 'Think Big Do Small',
            voltPoints: '45',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed'
        },
        {
            id: '00004',
            image: 'https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg',
            title: 'Startup Title',
            founded: '2005',
            members: '4',
            vision: 'Think Big Do Small',
            voltPoints: '45',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed'
        },
        {
            id: '00005',
            image: 'https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg',
            title: 'Startup Title',
            founded: '2005',
            members: '4',
            vision: 'Think Big Do Small',
            voltPoints: '45',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed'
        },
    ]



    return (
        <div className='bg-white'>
            {/* Title and Startup Button */}
            <div className='mx-6 bg-indigo-500 border-b rounded-b-xl '>
                <div className='w-12/12 flex items-center justify-between mx-auto px-4 rounded-lg py-2'>
                    <h1 className='text-xl text-white font-semibold'>Any new idea💡?</h1>
                    <button
                        onClick={() => Router.push('/create_startup')}
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create New Startup
                    </button>
                </div>
            </div>
            {/* Fine Startup Searchbar */}
            {/*<div className='w-8/12 flex items-center justify-center gap-2 mx-auto mt-10'>
                <input className='text-xl p-3 pl-6 w-full bg-white rounded-full focus:outline-white shadow-lg' type="search" name="searchStartup" id="" placeholder='Find Startups' />
                <FiSearch className='text-4xl text-indigo-500 cursor-pointer'></FiSearch>
            </div>*/}
            {/* Startups Card Section Title */}
            <Container maxWidth='lg'>
                <div className='w-full mx-auto my-2 mt-6 flex items-center justify-start gap-2'>
                    <h1 className='text-l font-semibold'>Your Startups</h1>
                    <div className='h-0.5 w-40 bg-indigo-500 rounded-full mt-2'></div>
                </div>
                {/* Startup cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
                    {
                        startups.slice(0, 2).map(startup => <><StartupCard
                            key={startup.id}
                            startup={startup}
                        ></StartupCard>
                        </>
                        )
                    }
                </div>
            </Container>
            {/* All Startups */}
            <Container maxWidth='lg'>
                <div className='w-full mx-auto my-2 mt-6 flex items-center justify-start gap-2'>
                    <h1 className='text-l font-semibold'>All Startups</h1>
                    <div className='h-0.5 w-40 bg-indigo-500 rounded-full mt-2'></div>
                </div>
                {/* All startup Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
                    {
                        startups?.map(startup => <><PublicStartupCard
                            key={startup.id}
                            startup={startup}
                        ></PublicStartupCard>
                        </>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

Home.getLayout = (page) => <BaseLayout>{page}</BaseLayout>;

export default Home;