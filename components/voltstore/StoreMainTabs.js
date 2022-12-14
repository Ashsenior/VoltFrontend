import React from 'react';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import ProductStoreTab from './MinorTabs/ProductStoreTab';
import StrategyStoreTab from './MinorTabs/StrategyStoreTab';
import PurchaseModal from './Modal/PurchaseModal';

const StoreMainTabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 ml-4">
                <ul class="flex flex-wrap -mb-px">
                    <OfflineBoltOutlinedIcon className='text-blue-500 text-4xl rounded-full ring ring-green-400 mt-2 mr-2' />
                    <li className={
                        "text-base font-medium capitalize px-5 py-3 block leading-normal " +
                        (openTab === 1
                            ? "border-b-2 border-indigo-600 text-indigo-500"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Product</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-5 py-3 block leading-normal " +
                        (openTab === 2
                            ? "border-b-2 border-indigo-600 text-indigo-500"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Strategy</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-5 py-3 block leading-normal " +
                        (openTab === 3
                            ? "border-b-2 border-indigo-600 text-indigo-500"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Research</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-5 py-3 block leading-normal " +
                        (openTab === 4
                            ? "border-b-2 border-indigo-600 text-indigo-500"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(4);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Marketing</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-5 py-3 block leading-normal " +
                        (openTab === 5
                            ? "border-b-2 border-indigo-600 text-indigo-500"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(5);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Team</a>
                    </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded mt-2">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <ProductStoreTab />
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <StrategyStoreTab />
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                            </div>
                            <div className={openTab === 4 ? "block" : "hidden"} id="link4">

                            </div>
                            <div className={openTab === 5 ? "block" : "hidden"} id="link5">

                            </div>
                        </div>
                    </div>
                </div>
                <PurchaseModal></PurchaseModal>
            </div>
        </div>
    );
};

export default StoreMainTabs;