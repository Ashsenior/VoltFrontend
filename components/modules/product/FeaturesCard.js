import React from 'react';
import Router from 'next/router';
import { TbListDetails } from 'react-icons/tb';
const FeaturesCard = ({ feature }) => {

    return (
        <div
            className="bg-white p-2 border-b">
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-24 bg-gray-200 rounded-md p-2' src={feature.image} alt="" />
                    <div className='flex flex-col justify-start'>
                        <h1
                            onClick={() => Router.push('/features_details')}
                            className='text-sm md:text-base font-semibold'>{feature.name}</h1>
                        <p className='text-xs'>{feature.startDate}</p>
                        <span className='text-white bg-indigo-600 rounded-full' >Important</span>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='font-semibold'>Deadline in {feature.deadline}</p>
                        <p></p>
                    </div>
                </div>
                <div className="tooltip flex justify-end" data-tip="details">
                    <button
                        onClick={() => Router.push('/features_details')}
                        className="btn btn-ghost hover:bg-white"><TbListDetails className='text-2xl text-indigo-500'></TbListDetails></button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;