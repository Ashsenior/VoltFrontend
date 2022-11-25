import React from 'react';
import FeaturesCard from './FeaturesCard';
import ProductTimeline from './ProductTimeline';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/system';
import {Link} from '@mui/material';

const ProductDetails = () => {

    const featuresInfo = [
        {
            title: 'Product Module',
            id: '11',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://i.pinimg.com/originals/12/e9/a3/12e9a39e53c458c5e9f7fc653273f6b1.png'
        },
        {
            title: 'Title',
            id: '12',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://assets.justinmind.com/wp-content/uploads/2021/07/ux-design-portfolio-aurora.png'
        },
        {
            title: 'Title',
            id: '13',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://cdn-proxy.slickplan.com/wp-content/uploads/2022/06/ux-portfolio-example-1.jpg'
        },
        {
            title: 'Title',
            id: '14',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://i.pinimg.com/originals/7a/d6/f0/7ad6f0b4db6bb652fdc4932418854bae.jpg'
        },
        {
            title: 'Title',
            id: '15',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://i.pinimg.com/originals/60/05/00/600500b6e2ab058330f532a3cabf0828.png'
        },
        {
            title: 'Title',
            id: '16',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://i.pinimg.com/originals/c0/45/8a/c0458a123a5d311bd0451092a0ab0ddd.png'
        }
    ]


    return (
        <div>
            <Container>
                <div className='w-full bg-indigo-500 border-b rounded-b-xl '>
                    <div className='w-12/12 flex items-center justify-between mx-auto px-2 rounded-2xl py-2'>
                        <h1 className='text-xl text-white font-semibold'>Did the strategy worked?</h1>
                        <label
                            // onClick={() => Router.push('/create_startup')}
                            htmlFor="edit-startups-modal"
                            type="button" className="inline-flex items-center px-2 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit the results
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
                        <Link to="" type='button' className='btn btn-sm'>Prototype</Link>
                    </div> </div>


                <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>
                    <div className='w-full flex flex-col '>
                        <h4 className='text-xl font-semibold'>Timeline</h4>
                        {/* Time Line */}
                        <ProductTimeline></ProductTimeline>
                    </div>
                    <div className='w-full mt-4 flex flex-col '>
                        <h4 className='text-xl font-semibold'>Features</h4>
                        <div className='grid grid-cols-2 md:grid-cols-2 mt-6 mb-10'>
                            {
                                featuresInfo.map(feature => <FeaturesCard
                                    key={feature.id}
                                    feature={feature}
                                ></FeaturesCard>)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;