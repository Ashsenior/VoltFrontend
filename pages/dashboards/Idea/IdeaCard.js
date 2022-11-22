import React from 'react';

const IdeaCard = ({startup}) => {
    return (
        <div className='mr-0 md:mr-4'>
            <div className="card card-compact w-full stats rounded-lg stats-vertical lg:stats-horizontal shadow-lg">
                <div className="card-body">
                    <h4 className='text-xl text-gray-700 font-semibold'>Idea 💡</h4>
                    <p>{startup?.idea}</p>
                    <div className="card-actions justify-between border-t-2">
                        <h4 className=' text-blue-500 font-semibold mt-1'>Idea Phase</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;