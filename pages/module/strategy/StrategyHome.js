import { Container } from '@mui/system';
import React from 'react';
import StrategyMajor from './StrategyMajor';
import Router from 'next/router';

const StrategyHome = () => {
    return (
        <div>
            <div className='w-full bg-white'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h1 className='text-xl font-semibold'>Create New Strategy</h1>
                    <button
                        onClick={() => Router.push('/create_strategy')}
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create
                    </button>
                </div>
            </div>
            {/* Link Buttons */}
            <Container maxWidth='lg'>
                <div className="btn-group border-b-2 w-full">
                    <button className="btn btn-link no-underline capitalize text-xl text-black mx-auto hover:no-underline">In Progress</button>
                    <button className="btn btn-link no-underline capitalize text-xl text-black mx-auto hover:no-underline">Completed</button>
                    <button className="btn btn-link no-underline capitalize text-xl text-black mx-auto hover:no-underline">Closed</button>
                </div>
            </Container>
            {/* Strategy Cards */}
            {/* Major */}
            <Container maxWidth='lg'>
                <h1 className='text-base font-bold mt-6 ml-1'>Major</h1>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
                    <StrategyMajor></StrategyMajor>
                    <StrategyMajor></StrategyMajor>
                </div>
            </Container>

            {/* Minor */}
            <Container maxWidth='lg'>
                <h1 className='text-base font-bold mt-6 ml-1'>Minor</h1>
                <div className='grid grid-cols-1 xl:grid-cols-1'>
                    <StrategyMajor></StrategyMajor>
                    <StrategyMajor></StrategyMajor>
                </div>
            </Container>
        </div>
    );
};

export default StrategyHome;