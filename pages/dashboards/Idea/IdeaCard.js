import React from 'react';

const IdeaCard = () => {
    return (
        <div className='mx-4'>
            <div className="card card-compact w-full bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="card-body">
                    <h4 className='text-xl font-semibold'>Idea</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta hic consequatur commodi quaerat aperiam deserunt. Inventore saepe quis pariatur sed earum natus, ullam voluptas, minus quas quisquam cum tempore odit?</p>
                    <div className="card-actions justify-between border-t-2">
                        <h4 className=' text-blue-500 font-semibold mt-1'>Idea Phase</h4>
                        <button
                            type="button" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-1">Change</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;