import React from 'react';
import Router from 'next/router';

const FeaturesCard = ({ feature }) => {

    return (
        <div
            onClick={() => Router.push('/module/product/FeatureDetails')}
            className="card card-compact w-fit bg-base-100 shadow-md hover:scale-105 translate-x-2  hover:shadow-xl ease-in-out duration-200 mx-auto">
            <figure><img className='w-72 p-1 rounded-xl' src={feature.logo} alt="design" /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                    {feature.title}
                    <div className="badge badge-info">{feature.user}</div>
                </h2>
                <p className='w-64'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet atque numquam laborum delectus iure facere laboriosam minus, distinctio dolorum quas!</p>
                <div className="card-actions flex flex-col justify-end">
                    <div className="badge badge-lg badge-outline w-full">Important!!</div>
                    <div className="badge badge-lg badge-outline w-full">Products</div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;