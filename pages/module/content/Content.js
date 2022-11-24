import React from 'react';

const content = ({ content }) => {
    return (
        <div className='border-b-2 p-2'>
            <div className='flex justify-between'>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-base font-medium text-black truncate"> {content.title.slice(0, 60)}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                        <p >
                            Assigned to  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@{content.user}</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <p>{content.date}</p>
                    <button
                        type="button" className="px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Brief</button>
                </div>
            </div>
            <div>
                <p className='p-2'>{content?.description}</p>
            </div>
            {
                content.image && <div className="flex flex-wrap">
                    <img className='w-44 rounded-lg mx-auto' src={content?.image} alt="img" />

                    <img className='w-44 rounded-lg mx-auto' src={content?.image2} alt="img" />
                </div>
            }

        </div>
    );
};

export default content;