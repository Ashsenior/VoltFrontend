import { Grid } from '@mui/material';
import React from 'react';
import IdeaCard from './IdeaCard';
import SellingPointsCard from './SellingPointsCard';

const Idea = ({startup}) => {
    return (
        <div className='mt-10 mx-auto'>
            <Grid container spacing={0}>
                <Grid item={true} xs={12} md={6} lg={6}>
                    <IdeaCard startup={startup}/>
                </Grid>
                <Grid item={true} xs={12} md={6} lg={6}>
                    <SellingPointsCard/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Idea;