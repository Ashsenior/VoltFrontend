import React from 'react';
import Router from "next/router";

const StartupCard = () => {
    return (
        <div className='w-11/12 mx-auto my-1'>
            <div className='flex flex-col border-solid border-green-500 md:flex-row shadow-lg bg-white rounded-xl '>
                <img className='md:w-40 m-2 rounded-2xl' src="https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg" alt="img" />
                <div className='flex justify-between rounded-b-xl md:rounded-r-xl bg-white  p-4'>
                    <div className='w-8/12'>
                        <h1><e className='text-xl font-bold'>Startup Title </e></h1>
                        <e className="text-grey text-xs" >( Founded 2021 ) </e>
                        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed </p>
                        <h5>Website 🔗 <a className='text-blue-400' href="https://something.com">https://something.com</a></h5>
                    </div>
                    <div className='w-4/12 flex flex-col items-end justify-between gap-2'>
                        <div>
                            <h4 className='font-semibold'>5 Members</h4>
                            <h4>750 <span className='text-indigo-500 font-bold'>Volts</span></h4>
                            <h4><span className='text-green-500 font'>Registered</span></h4>
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