import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';

function MarketingModule() {
    return (
        <>
            <Head>
                <title>Marketing Module</title>
            </Head>
            <Container maxWidth="lg">

            </Container>
            <Footer />
        </>
    );
}

MarketingModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MarketingModule;