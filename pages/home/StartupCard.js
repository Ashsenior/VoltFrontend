import React from 'react';
import Router from "next/router";

const PublicStartupCard = ({ all_startup }) => {

    return (
        <>
        {all_startup?.map((startup,index)=>(
        <div className='w-full flex justify-between border-b border-r items-center p-1 hover:bg-gradient-to-tr from-white to-blue-100'>
            <div className='flex my-1'>
                <img className='w-20 h-20 mx-1 rounded-lg' src={startup?.image} alt="img" />
                <div className='flex flex-col p-2 justify-between'>
                    <div>
                        <h1><e className='text-base md:text-xl font-semibold'>{startup.name} </e></h1>
                        <medium className='font-semibold text-gray-500 mb-1'>{startup.market}</medium>
                        <p className='py-2'>{startup?.description}</p>
                    </div>
                </div>
            </div>

            <div className='w-4/12 flex flex-col items-end justify-between gap-2 mx-2'>
                <div>
                    <h4 className='font-semibold flex'>{startup.members} Members</h4>
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {startup?.points} Volts
                    </p>
                </div>
                <button
                    onClick={() => Router.push('/dashboards')}>
                </button>
            </div>
        </div>
        ))}
        </>

    );
};

export default PublicStartupCard;