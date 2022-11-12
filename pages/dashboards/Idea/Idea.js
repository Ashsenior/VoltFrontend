import { Grid } from '@mui/material';
import React from 'react';
import IdeaCard from './IdeaCard';
import SellingPointsCard from './SellingPointsCard';

const Idea = () => {
    return (

        <div className='mt-10 mx-auto'>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} lg={8}>
                    <IdeaCard></IdeaCard>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <SellingPointsCard></SellingPointsCard>
                </Grid>
            </Grid>
        </div>
    );
};

export default Idea;