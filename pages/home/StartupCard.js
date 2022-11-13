import React from 'react';
import Router from "next/router";

const StartupCard = () => {
    return (
        <div className='w-12/12 mx-auto border-b'>
            <div className='flex flex-col border-solid rounded-top-xl border-green-500 md:flex-row bg-white'>
                <img className='md:w-20 m-2 rounded-lg' src="https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg" alt="img" />
                <div className='flex justify-between rounded-b-xl md:rounded-r-xl bg-white  p-4'>
                    <div className='w-12/12'>
                        <h1><e className='text-xl font-bold'>Startup Title </e></h1>
                        <e className="text-grey text-xs" >( Founded 2021 ) </e>
                        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed </p>

                    </div>
                    <div className='w-4/12 flex flex-col items-end justify-between gap-2'>
                        <div>
                            <h4 className='font-semibold'>5 Members</h4>
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            50 Volts
                            </p>
                        </div>
                        <button
                            onClick={() => Router.push('/dashboards')}
                            type="button" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hustle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupCard;