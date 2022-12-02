import React from 'react';
import Router from 'next/router';
import { TbListDetails } from 'react-icons/tb';

const FeaturesCard = ({ feature }) => {

    return (
        <div
            // onClick={() => Router.push('/module/product/FeatureDetails')}
            className="bg-white p-2 border-b">
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-24 bg-gray-200 rounded-md p-2' src={feature.image} alt="" />
                    <div className='flex flex-col justify-start'>
                        <h1 className='text-sm md:text-base font-semibold'>{feature.name}</h1>
                        <p className='text-xs'>{feature.startDate}</p>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <p className='font-semibold'>Deadline </p>
                        <p>{feature.deadline}</p>
                    </div>
                    <div className='hidden md:flex flex-col justify-between'>
                        <p className='font-semibold'>Priority</p>
                        <p className={`bg-${feature.priorityColor}-400 rounded-sm mx-auto px-1 py-0.5`}>{feature.priority}</p>
                    </div>
                </div>
                <div className="tooltip flex justify-end" data-tip="details">
                    <button className="btn btn-ghost hover:bg-white"><TbListDetails className='text-2xl text-indigo-500'></TbListDetails></button>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;