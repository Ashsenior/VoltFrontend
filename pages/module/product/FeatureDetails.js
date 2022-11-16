import React from 'react';
import FeatureTabs from './FeatureTabs';

const FeatureDetails = () => {
    return (
        <div>
            <div className='w-11/12 bg-white mx-auto rounded-b-3xl shadow-lg'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h4 className='text-xl font-semibold'>Feature completed </h4>
                    <button
                        // onClick={() => Router.push('/create_startup')}
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Completed
                    </button>
                </div>
            </div>
            <div>
                <div className='flex justify-between mt-6'>
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-semibold'>Name of Feature</h4>
                        <p>
                            assigned to <span className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@userId</span>
                        </p>
                    </div>
                    <div>
                        <button
                            type="button" className="uppercase inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            In Progress
                        </button>
                        <p>10/12/2022</p>
                    </div>


                </div>
                {/* Feature Tabs */}

                <FeatureTabs></FeatureTabs>
            </div>
        </div>
    );
};

export default FeatureDetails;