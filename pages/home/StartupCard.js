import React from 'react';
import Router from "next/router";

const StartupCard = ({ startup }) => {

    return (
        <div className='w-full mx-auto flex justify-between items-center rounded-xl mt-8 p-2 hover:bg-gradient-to-tr from-white to-blue-100'>
            <div className='flex my-1'>
                <img className='w-24 h-24 mx-1 rounded-lg' src={startup.image} alt="img" />
                <div className='flex flex-col justify-between'>
                    <div>
                        <h1><e className='text-base md:text-xl font-bold'>{startup.title} </e></h1>
                        <e className="text-grey text-xs" >( Founded {startup.founded} ) </e>
                        {/* <p className='py-2'>{startup.description}</p> */}
                    </div>
                    <small className='font-semibold mb-1'>{startup.vision}</small>
                </div>
            </div>

            <div className='w-4/12 flex flex-col items-end justify-between gap-2 mx-2'>
                <div>
                    <h4 className='font-semibold flex'>{startup.members} Members</h4>
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {startup.voltPoints} Volts
                    </p>
                </div>
                <button
                    onClick={() => Router.push('/dashboards')}
                    type="button" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hustle</button>
            </div>
        </div>
    );
};

export default StartupCard;