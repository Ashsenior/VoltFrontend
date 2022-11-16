import React from 'react';

const IdeaCard = () => {
    return (
        <div className='mx-4'>
            <div className="card card-compact w-full stats rounded-lg stats-vertical lg:stats-horizontal shadow-lg">
                <div className="card-body">
                    <h4 className='text-xl text-gray-700 font-semibold'>Idea 💡</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta hic consequatur commodi quaerat aperiam deserunt. Inventore saepe quis pariatur sed earum natus, ullam voluptas, minus quas quisquam cum tempore odit?</p>
                    <div className="card-actions justify-between border-t-2">
                        <h4 className=' text-blue-500 font-semibold mt-1'>Idea Phase</h4>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;