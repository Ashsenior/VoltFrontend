import React from 'react';
import FeaturesCard from './FeaturesCard';
import ProductTimeline from './ProductTimeline';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/system';
import { Link } from '@mui/material';
import ProductAnalytics from './ProductAnalytics';
import ProductSuggestions from './ProductSuggestions';
import TeamMembers from './TeamMembers';
import FeatureDetails from './FeatureDetails';

const ProductDetails = () => {


    return (
        <div>
            <Container>
                <ProductAnalytics></ProductAnalytics>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-9/12'>
                        <ProductSuggestions></ProductSuggestions>
                        <FeatureDetails></FeatureDetails>
                        <TeamMembers />
                    </div>
                    <div className='w-full md:w-3/12 flex justify-end'>
                        <ProductTimeline></ProductTimeline>
                    </div>
                </div>

                <div>

                </div>


            </Container>
        </div>
    );
};

ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;