import React from 'react';
import FeaturesCard from './FeaturesCard';
import ProductTimeline from './ProductTimeline';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/system';
import { Link } from '@mui/material';
import ProductAnalytics from './ProductAnalytics';
import ProductSuggestions from './ProductSuggestions';

const ProductDetails = () => {


    return (
        <div>
            <Container>
                <ProductAnalytics></ProductAnalytics>
                <div className='flex'>
                    <div className='w-9/12'>
                        <ProductSuggestions></ProductSuggestions>
                    </div>
                    <div className='w-3/12'>
                        <ProductTimeline></ProductTimeline>
                    </div>
                </div>


            </Container>
        </div>
    );
};

ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;