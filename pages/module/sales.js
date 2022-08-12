import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';

function SalesModule() {
    return (
        <>
            <Head>
                <title>Sales Module</title>
            </Head>
            <Container maxWidth="lg">

            </Container>
            <Footer />
        </>
    );
}

SalesModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default SalesModule;