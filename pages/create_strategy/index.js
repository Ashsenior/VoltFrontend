import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import NewStrategy from '../module/create_strategy/NewStrategy';

function CreateStrategy() {
    return (
        <>
            <Head>
                <title>Create Strategy</title>
            </Head>


            <Container maxWidth="lg">
                <NewStrategy/>
            </Container>
            <Footer />
        </>
    );
}

CreateStrategy.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default CreateStrategy;