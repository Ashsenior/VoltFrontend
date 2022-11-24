import React, { useState } from 'react';
import Router from "next/router";
import { FiSearch } from 'react-icons/fi';
import StartupCard from './StartupCard';
import BaseLayout from 'src/layouts/BaseLayout';
import Head from 'next/head';
import { get } from '../../config/axiosClient';
import { useEffect } from 'react';
import { Button, Container } from '@mui/material';
import axiosInstance from "../../src/axiosAPi";

const Home = () => {
    const [your_startups, setYourStartups] = useState([]);
    const [all_startups, setAllStartups] = useState([]);

    useEffect(() => {
        var access_token = localStorage.getItem("access_token");
        var refresh_token = localStorage.getItem("refresh_token");
        if (access_token && refresh_token) {
            console.log("index ", refresh_token)
            getEnrolledStatus();
        }
      }, []);
      const getEnrolledStatus = () => {
        try {
          axiosInstance
            .get("/user/get-startups/", {
              params: { username: localStorage.getItem("username") },
            })
            .then((response) => {
              if (response.status == 200) {
                console.log(response);
              }
            });
        } catch (error) {
          throw error;
        }
      };

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
            <div className='w-11/12 mx-3 my-2 mt-6 flex items-center justify-start gap-2'>
                <h1 className='text-l font-semibold'>Your Startups</h1>
                <div className='h-0.5 w-40 bg-indigo-500 rounded-full mt-2'></div>
            </div>
            {/* Startup cards */}
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1'>
                <StartupCard startup={your_startups} />
                <StartupCard />
            </div>
            {/* All Startups */}
            <div className='w-11/12 mx-3 my-2 mt-6 flex items-center justify-start gap-2'>
                <h1 className='text-l font-semibold'>All Startups</h1>
                <div className='h-0.5 w-40 bg-indigo-500 rounded-full mt-2'></div>
            </div>
            {/* All startup Cards */}
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1'>
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