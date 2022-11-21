import React from 'react';
import Router from 'next/router';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';

const ProductHome = () => {

    const productCards = [
        {
            name: 'Product name',
            id: '11',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://st4.depositphotos.com/16583842/30033/v/600/depositphotos_300337104-stock-illustration-initial-logo-design-inspirations-hexagonal.jpg'
        },
        {
            name: 'Product name',
            id: '12',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://img.freepik.com/free-vector/orange-logo-arrow-shape_1043-53.jpg?w=2000'
        },
        {
            name: 'Company name',
            id: '13',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://t3.ftcdn.net/jpg/02/98/33/68/360_F_298336858_vl1uRUh2rRColK9p9Igz5CqfV6DYgxDS.jpg'
        },
        {
            name: 'Company name',
            id: '14',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://st3.depositphotos.com/27847728/33929/v/600/depositphotos_339295410-stock-illustration-initial-alphabet-logo-design-vector.jpg'
        },
        {
            name: 'Company name',
            id: '15',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://www.vector-eps.com/wp-content/gallery/corporate-logo-vector-icons/corporate-logo-vector-icon4.jpg'
        },
        {
            name: 'Company name',
            id: '16',
            date: '10/10/2022',
            user: 'username',
            feature: '15',
            members: '12',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AxmjlHpun8-I139PMcKiycbltR8J3hjd9Q&usqp=CAU'
        }
    ]

    return (
        <div>
            <div className='w-full bg-white'>
                <div className='w-full flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h4 className='text-xl font-semibold'>Add New Product</h4>
                    <button
                        // onClick={() => Router.push('/module/product/ProductDetails')}
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Product
                    </button>
                </div>
            </div>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-6 mx-2'>
                    {productCards.map(productCard => 
                    <>
                        <div
                            onClick={() => Router.push('/module/product/ProductDetails')}
                            className='w-full flex flex-col bg-white p-2 rounded-lg mx-auto '>
                            <img className='flex w-20 m-1 rounded-md' src={productCard.logo} alt="" />
                            <div className='flex items-center justify-between gap-10'>
                                <h4 className='text-xl font-semibold cursor-pointer'>{productCard.name}</h4>
                                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    @{productCard.user}
                                </p>
                            </div>
                            <h6 className='text-sm mb-4'>{productCard.date}</h6>
                            <p className='text-base font-light mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod incidunt possimus praesentium in, ea eum.</p>
                            <div className='flex items-center justify-between gap-2'>
                                <Button
                                    onClick={() => Router.push('/module/product/FeatureDetails')}
                                    className='w-full text-indigo-800 p-2 bg-indigo-50 rounded-xl mb-4'
                                    disableRipple
                                    component="a"
                                >
                                    {productCard.feature} Features
                                </Button>
                                <Button
                                    className='w-full text-indigo-800 p-2 bg-indigo-50 rounded-xl mb-4'
                                    disableRipple
                                    component="a"
                                >
                                    {productCard.members} Members
                                </Button>
                            </div>



                        </div>
                    </>)
                    }
                </div >
            </Container>
        </div >
    );
};

export default ProductHome;