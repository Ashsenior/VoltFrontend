import React from 'react';
import FeatureTabs from './FeatureTabs';
import { Container } from '@mui/system';

const FeatureDetails = () => {
    return (
        <div className='mt-6'>
            <div>
                <h4 className='text-base font-semibold'>Features</h4>
            </div>

            <FeatureTabs></FeatureTabs>

        </div>
    );
};

export default FeatureDetails;