import React from 'react';

const FeaturesCard = ({ feature }) => {
    return (
        <div className="card card-compact w-fit bg-base-100 shadow-xl mx-auto">
            <figure><img className='w-32' src={feature.logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {feature.title}
                    <div className="badge badge-info">{feature.user}</div>
                </h2>
                <div className="card-actions flex flex-col justify-end">
                    <div className="badge badge-lg badge-outline w-full">Important!!</div>
                    <div className="badge badge-lg badge-outline w-full">Products</div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCard;