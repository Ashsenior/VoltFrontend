import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import MarketingModuleComponent from '../../../components/marketing-module/marketing-module';

function MarketingModule() {
    return (
        <>
            <MarketingModuleComponent/>
            <Footer />
        </>
    );
}

MarketingModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default MarketingModule;
