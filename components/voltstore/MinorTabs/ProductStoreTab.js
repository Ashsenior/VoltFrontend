import React from 'react';
import Meetings from '../StoreItems/Meetings';
import MultipleColsItem from '../StoreItems/MultipleColsItem';
import MultiRowItems from '../StoreItems/MultiRowItems';
import StoreReports from '../StoreItems/StoreReports';
import ThreeItemsCols from '../StoreItems/ThreeItemsCols';

const ProductStoreTab = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 ml-4">
                <ul class="flex flex-wrap gap-2 -mb-px">
                    <li className={
                        "text-base font-medium capitalize px-3 py-1 block leading-normal " +
                        (openTab === 1
                            ? "bg-indigo-100 rounded-full text-indigo-600"
                            : "bg-white border border-gray-500 rounded-full text-gray-600 hover:bg-gray-200")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Volt Content</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-3 py-1 block leading-normal " +
                        (openTab === 2
                            ? "bg-indigo-100 rounded-full text-indigo-600"
                            : "bg-white border border-gray-500 rounded-full text-gray-600 hover:bg-gray-200")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Content Card</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-3 py-1 block leading-normal " +
                        (openTab === 3
                            ? "bg-indigo-100 rounded-full text-indigo-600"
                            : "bg-white border border-gray-500 rounded-full text-gray-600 hover:bg-gray-200")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Reports</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-3 py-1 block leading-normal " +
                        (openTab === 4
                            ? "bg-indigo-100 rounded-full text-indigo-600"
                            : "bg-white border border-gray-500 rounded-full text-gray-600 hover:bg-gray-200")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(4);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        > Option 4</a>
                    </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded mt-2">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <MultiRowItems></MultiRowItems>
                                <MultipleColsItem></MultipleColsItem>
                                <ThreeItemsCols></ThreeItemsCols>
                                <Meetings></Meetings>
                                <StoreReports />
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductStoreTab;