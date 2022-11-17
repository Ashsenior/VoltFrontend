import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import ProductHome from './product/ProductHome';
import ProductDetails from './product/ProductDetails';
import FeatureDetails from './product/FeatureDetails';

function MarketingModule() {
    return (
        <>
            <Head>
                <title>Product Module</title>
            </Head>
            <ProductHome></ProductHome>


            <Container maxWidth="lg">
                {/* <ProductDetails></ProductDetails> */}
                {/* <FeatureDetails></FeatureDetails> */}

            </Container>
            <Footer />
        </>
    );
}

MarketingModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MarketingModule;