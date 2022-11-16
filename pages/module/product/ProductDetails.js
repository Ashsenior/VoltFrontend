import React from 'react';
import FeaturesCard from './FeaturesCard';
import ProductTimeline from './ProductTimeline';

const ProductDetails = () => {

    const featuresInfo = [
        {
            title: 'Title',
            id: '11',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            title: 'Title',
            id: '12',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            title: 'Title',
            id: '13',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            title: 'Title',
            id: '14',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            title: 'Title',
            id: '15',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            title: 'Title',
            id: '16',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        }
    ]


    return (
        <div>
            <div className='w-11/12 bg-white mx-auto rounded-b-3xl shadow-lg'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h4 className='text-xl font-semibold'>Get access to developer tool</h4>
                    {/* The button to open modal */}
                    <label
                        // onClick={() => Router.push('/create_startup')}
                        htmlFor=""
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Access
                    </label>
                </div>
            </div>
            <div>

                <div className='flex justify-between mt-6'>
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-semibold'>Name of Product</h4>
                        <p>
                            lead <span className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@userId</span>
                        </p>
                    </div>
                    <label
                        htmlFor=""
                        type="button" className="uppercase inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Prototype
                    </label>
                </div>
                <h4 className='text-base font-semibold mt-6'>Descriptions</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, corrupti ex libero assumenda, non qui alias dolor debitis ducimus porro molestias nemo necessitatibus saepe amet cumque voluptate! Quos, nobis quod ab doloribus rerum vel maxime? Libero, possimus ea non sunt eos reiciendis optio et officia alias consequatur impedit esse dicta sapiente provident natus animi aperiam fuga. Pariatur voluptates odio alias quia, excepturi accusamus quis eum? Possimus modi, iure dicta, soluta voluptatem quia, eum maiores totam saepe magnam molestias debitis accusamus facilis illum ipsum omnis amet obcaecati! Quo laboriosam obcaecati ullam consequuntur, distinctio totam iste ipsam, error reiciendis quibusdam cupiditate ab?</p>
            </div>


            <div className='flex mt-10'>
                <div className='w-5/12'>
                    <h4 className='text-base font-semibold'>Timeline</h4>
                    {/* Time Line */}
                    <ProductTimeline></ProductTimeline>
                </div>
                <div className='w-7/12'>
                    <h4 className='text-base font-semibold'>Features</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-6'>
                        {
                            featuresInfo.map(feature => <FeaturesCard
                                key={feature.id}
                                feature={feature}
                            ></FeaturesCard>)
                        }
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ProductDetails;