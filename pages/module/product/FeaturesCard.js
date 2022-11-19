import React from 'react';
import Router from 'next/router';

const FeaturesCard = ({ feature }) => {

    return (
        <div
            onClick={() => Router.push('/module/product/FeatureDetails')}
            className="card card-compact w-fit bg-white hover:scale-105 translate-x-2 hover:ease-in-out duration-200 mx-auto">
            <figure><img className='w-30 p-1 rounded-xl' src={feature.logo} alt="design" /></figure>
            <div className="card-body">
                <h4 className="card-title flex justify-between">
                    {feature.title}
                    <span className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@userId</span>
                </h4>
                <div className="card-actions flex flex-col justify-end">
                    <div className="p-3 rounded-2xl bg-gray-100 text-black w-full">Hey, any update?</div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;