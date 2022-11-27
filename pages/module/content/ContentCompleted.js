import React from 'react';

const ContentCompleted = () => {
    return (
        <div>
            <div className='w-full bg-white mx-auto rounded-b-3xl shadow-lg'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h4 className='text-xl font-semibold'>Get access to developer tool</h4>
                    {/* The button to open modal */}
                    <button
                        onClick={() => Router.push('/module/create_marketing/NewMarketing')}
                        type="button"
                        className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Brief
                    </button>
                    <label
                        // onClick={() => Router.push('/')}
                        htmlFor=""
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Access
                    </label>
                </div>
            </div>

        </div>
    );
};

export default ContentCompleted;