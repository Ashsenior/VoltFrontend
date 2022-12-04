import React from 'react';
import Router from 'next/router';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard';


const ProductHome = () => {
    return (
        <>
            <div className='w-full bg-white'>
                <div className='w-full flex px-4'>
                    <button
                        // onClick={() => Router.push('/module/product/ProductDetails')}
                        style={{width:"100%"}}
                        type="button" className="rounded-b-2xl items-center px-4 py-2 border border-transparent text-base font-medium justify-center text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add new product
                    </button>
                </div>
            </div>
            <ProductCard />

        </ >
    );
};

export default ProductHome;