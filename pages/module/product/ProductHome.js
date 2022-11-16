import React from 'react';
import Router from 'next/router';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const ProductHome = () => {

    const productCards = [
        {
            name: 'Name',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            name: 'Name',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            name: 'Name',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            name: 'Name',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            name: 'Name',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        },
        {
            name: 'Name',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://static.vecteezy.com/system/resources/previews/000/350/228/non_2x/idea-vector-icon.jpg'
        }
    ]

    return (
        <div>
            <div className='w-full bg-white'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h4 className='text-xl font-semibold'>Add New Product</h4>
                    {/* The button to open modal */}
                    <label
                        // onClick={() => Router.push('/create_startup')}
                        htmlFor="edit-startups-modal"
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Product
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
                {productCards.map(productCard => <>
                    <div className='flex flex-col bg-white w-fit p-2 rounded-lg shadow-md hover:shadow-xl mx-auto'>
                        <div className='flex'>
                            <img className='w-32' src={productCard.logo} alt="" />
                            <div>
                                <h4 className='text-base font-semibold'>{productCard.name}</h4>
                                <h6 className='text-sm mb-1 mt-4'>{productCard.date}</h6>
                                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    @{productCard.user}
                                </p>
                            </div>
                        </div>
                        <Button
                            className='text-green-700 bg-green-50 mb-4'
                            disableRipple
                            component="a"
                        >
                            {productCard.feature} Features
                        </Button>
                        <Button
                            className='text-green-700 bg-green-50 mb-4'
                            disableRipple
                            component="a"
                        >
                            {productCard.members} Members
                        </Button>
                    </div>
                </>)}
            </div>

        </div>
    );
};

export default ProductHome;