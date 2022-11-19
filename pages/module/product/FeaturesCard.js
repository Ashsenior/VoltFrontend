import React from 'react';
import Router from 'next/router';

const FeaturesCard = ({ feature }) => {

    return (
        <div
            onClick={() => Router.push('/module/product/FeatureDetails')}
            className="w-72 flex flex-col bg-white rounded-lg hover:scale-105 translate-x-2  hover:shadow-xl ease-in-out duration-200 mx-auto ">
            <figure><img className='w-72 h-40 p-1 rounded-xl' src={feature.logo} alt="design" /></figure>
            <div className="flex justify-between mt-2 p-2">
                <h2 className="text-base font-semibold">{feature.title}</h2>
                <p>
                    <span className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{feature.user}</span>
                </p>
            </div>
            <p className='hidden lg:block p-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet atque numquam laborum delectus iure facere laboriosam minus, distinctio dolorum quas!</p>
            <div className="flex flex-col gap-2 p-4">
                <div className="badge badge-lg badge-outline w-full">Important!!</div>
                <div className="badge badge-lg badge-outline w-full">Products</div>
            </div>
        </div>
    );
};

export default FeaturesCard;