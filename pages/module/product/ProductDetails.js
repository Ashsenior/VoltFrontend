import React from 'react';
import FeaturesCard from './FeaturesCard';
import ProductTimeline from './ProductTimeline';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/system';
import { Link } from '@mui/material';
import ProductAnalytics from './ProductAnalytics';
import TeamMembers from './TeamMembers';
import FeatureDetails from './FeatureDetails';
import ProductIntro from './ProductIntro';
import ProductFeatures from './ProductFeatures';
import Footer from 'src/components/Footer';

const ProductDetails = () => {

    return (
        <>
            <>
                <ProductIntro></ProductIntro>
                <ProductAnalytics></ProductAnalytics>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-10/12 mr-4'>
                        <ProductFeatures></ProductFeatures>
                        <TeamMembers />
                    </div>
                    <div className='w-full md:w-2/12 flex justify-end'>
                        <ProductTimeline></ProductTimeline>
                    </div>
                </div>
            </>
            <Footer></Footer>


        </>
    );
};

ProductDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ProductDetails;