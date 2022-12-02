import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import FeatureTabs from 'pages/module/product/FeatureTabs';


function AllTeamMember() {
    return (
        <>
            <Head>
                <title>Product Details</title>
            </Head>

            <Container maxWidth="lg">
                {/* Product Info */}
                <div className='mt-6'>
                    <h1 className='text-xl font-semibold'>Product name</h1>
                    <p>Deadline <span className='text-red-300'>March 7, 2014</span></p>
                    <div className='flex items-center gap-2'>
                        <p>Completed</p>
                        <div className="radial-progress mt-2" style={{ "--value": "70", "--size": "3rem", "--thickness": "0.3rem" }}>70%</div>
                    </div>

                    <FeatureTabs></FeatureTabs>

                </div>

            </Container>
            <Footer />
        </>
    );
}

AllTeamMember.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default AllTeamMember;