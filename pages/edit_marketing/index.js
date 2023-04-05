import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
// import EditMarketings from '../module/create_marketing/EditMarketings';

function EditMarketing() {
    return (
        <>
            <Head>
                <title>Create Strategy</title>
            </Head>
            <Container>
                {/* <EditMarketings></EditMarketings> */}
            </Container>
        </>
    );
}

EditMarketing.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default EditMarketing;