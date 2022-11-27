import React from 'react';
import Router from 'next/router';

const FeaturesCard = ({ feature }) => {

    return (
        <div
            onClick={() => Router.push('/module/product/FeatureDetails')}
            className="w-150 flex flex-col bg-white hover:scale-105 translate-x-2  hover:ease-in-out duration-200 ">
            <div className="flex justify-between mt-2 p-2">
                <h2 className="text-base font-semibold">{feature.title}</h2>
                <p>
                    <span className="px-2 py-1 text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">@{feature.user}</span>
                </p>
            </div>
            <figure><img className='w-72 h-40 p-1 rounded-xl' src={feature.logo} alt="design" /></figure>
        </div>
    );
};

export default FeaturesCard;