import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';

function StrategyModule() {
    return (
        <>
            <Head>
                <title>Strategy Module</title>
            </Head>
            <Container maxWidth="lg">

            </Container>
            <Footer />
        </>
    );
}

StrategyModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default StrategyModule;