import React from 'react';
import Router from "next/router";

const StartupCard = () => {


    return (
        <div className='w-11/12 mx-auto my-6'>
            <div className='flex flex-col md:flex-row shadow-lg bg-white rounded-xl '>
                <img className='w-full md:w-52 rounded-t-xl md:rounded-l-xl' src="https://www.chalgenius.com/wp-content/uploads/2021/08/startup-4.jpg" alt="img" />
                <div className='flex justify-between rounded-b-xl md:rounded-r-xl bg-white  p-4'>
                    <div className='w-8/12'>
                        <h1 className='text-xl font-bold'>Startup Title</h1>
                        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perferendis at inventore debitis nobis quibusdam aspernatur voluptate veritatis laudantium sed consequatur nulla nemo, molestias alias libero, maiores dolores? Explicabo, dolor fugiat amet officia cumque ad.</p>
                        <h5>Website: <a className='text-blue-400' href="https://something.com">https://something.com</a></h5>

                    </div>
                    <div className='w-4/12 flex flex-col items-end justify-between gap-2'>
                        <div>
                            <h4 className='font-semibold'>S Member</h4>
                            <h4>750 <span className='text-indigo-500 font-bold'>Volts</span></h4>
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