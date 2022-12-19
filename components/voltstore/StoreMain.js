import React from 'react';
import PurchaseModal from './Modal/PurchaseModal';
import Meetings from './StoreItems/Meetings';
import MultipleColsItem from './StoreItems/MultipleColsItem';
import MultiRowItems from './StoreItems/MultiRowItems';
import StoreReports from './StoreItems/StoreReports';
import ThreeItemsCols from './StoreItems/ThreeItemsCols';

const StoreMain = () => {
    return (
        <div className='mt-6 ml-4'>
            <div className='flex items-center gap-2 mb-2' >
                <h1 className='text-3xl font-medium text-gray-700'>Welcome to Volt Store</h1>
            </div>
            <div>
                <MultiRowItems></MultiRowItems>
                <MultipleColsItem></MultipleColsItem>
                <ThreeItemsCols></ThreeItemsCols>
                <Meetings></Meetings>
                <StoreReports />
            </div>
            <PurchaseModal />
        </div>
    );
};

export default StoreMain;