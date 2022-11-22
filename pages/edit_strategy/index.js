import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import EditStrategies from '../module/create_strategy/EditStrategies';
import { useState } from 'react';

function EditStrategy() {
  const [strategy, setStrategy] = useState({});

    return (
        <>
            <Head>
                <title>Create Strategy</title>
            </Head>


            <Container maxWidth="lg">
                <EditStrategies strategy={strategy} />
            </Container>
            <Footer />
        </>
    );
}

EditStrategy.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default EditStrategy;