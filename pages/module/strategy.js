import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import StrategyHome from './strategy/StrategyHome';
import { useState } from 'react';
import { getStartups } from '../../config/commonApi';

function StrategyModule() {

  const [startup, setsSartup] = useState([]);

  const getAllStartus = () => {
    getStartups().then((data) => {
      setAuthors(data);
    });
  }

    return (
        <>
            <Head>
                <title>Strategy Module</title>
            </Head>
            <StrategyHome></StrategyHome>

            <Container maxWidth="lg">
            </Container>
            <Footer />
        </>
    );
}

StrategyModule.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default StrategyModule;