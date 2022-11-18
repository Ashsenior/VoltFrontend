import Head from 'next/head';
import MarketingHome from 'pages/module/marketing/MarketingHome'
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import MarketingModuleComponent from '../../components/marketing-module/marketing-module';
import MarketingHome from './marketing/MarketingHome';

function MarketingModule() {
    return (
        <>
            <Head>
                <title>Marketing Module</title>
            </Head>
            <MarketingHome></MarketingHome>
<<<<<<< HEAD
=======
            <Container maxWidth="lg">
                <MarketingModuleComponent />
            </Container>
>>>>>>> a42db189b889414b47f70f5b7798b6251002eef0
            <Footer />
        </>
    );
}

MarketingModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MarketingModule;
