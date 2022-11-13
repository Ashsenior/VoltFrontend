import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import EditStrategies from '../module/create_strategy/EditStrategies';

function EditStrategy() {
    return (
        <>
            <Head>
                <title>Create Strategy</title>
            </Head>


            <Container maxWidth="lg">
                <EditStrategies></EditStrategies>
            </Container>
            <Footer />
        </>
    );
}

EditStrategy.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default EditStrategy;