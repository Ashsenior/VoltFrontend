import { Link } from '@mui/material';
import React from 'react';

const StrategyMajor = () => {
    return (
        <div className=' border-b p-2'>
            < div className='flex items-center justify-between' >
                <Link to='/create_startups' className='font-semibold text-base no-underline cursor-pointer'>Name Of Strategy</Link>
                <span>@username</span>
            </div >
            <small>01/07/2022 Start Date</small>
            {/* <div className='flex items-center justify-between'>
                <h4 className='capitalize text-base'>success metrics</h4>
                <div className='bg-green-500 p-1 w-20 h-8 rounded-lg flex items-center justify-center'>
                    <p className='text-xl font-semibold'>500</p>
                </div>
                <div className='bg-yellow-500 p-1 w-20 h-8 rounded-lg flex items-center justify-center'>
                    <p className='text-xl font-semibold'>300</p>
                </div>
                <div className='bg-red-500 p-1 w-20 h-8 rounded-lg flex items-center justify-center'>
                    <p className='text-xl font-semibold'>100</p>
                </div>
            </div> */}
            <div className='flex items-center justify-start gap-10 mt-4'>
                <h4 className='capitalize text-base'>Sub Strategies</h4>
                <h3 className='flex items-center'><p className='border-2 border-black rounded-full w-6 h-6 text-center mr-1'>3</p> Marketing</h3>
                <h3 className='flex items-center'><p className='border-2 border-black rounded-full w-6 h-6 text-center mr-1'>2</p> sales</h3>
                <h3 className='flex items-center'><p className='border-2 border-black rounded-full w-6 h-6 text-center mr-1'>1</p> Research</h3>

            </div>
        </div >
    );
};

export default StrategyMajor;