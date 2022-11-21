import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { useEffect, useState } from 'react';
import { get } from '../../config/axiosClient';

function SalesModule() {
    const [data, setData] = useState([])
const getData = () =>{
    
    get('todos')
    .then((res)=>{
        setData(res.json)
    })
    .catch((err)=>{
        console.log(err);
    })
}
console.log(data)
useEffect(()=>{
    getData();
},[])
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