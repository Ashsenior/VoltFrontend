import React from 'react';
import AllTeamMember from './AllTeamMembers';
import DesignImages from './DesignImages';
import ProductIssues from './ProductIssues';
import ProductSuggestions from './ProductSuggestions';
import Screenshots from './Screenshots';

const FeatureTabs = () => {


    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-3 list-none flex-wrap pt-3 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 1
                                        ? "text-indigo-500 border-b-2 border-indigo-500"
                                        : "text-gray-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Designs UI/UX
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal  " +
                                    (openTab === 2
                                        ? "text-indigo-500 border-b-2 border-indigo-500"
                                        : "text-gray-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Screenshots
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 3
                                        ? "text-indigo-500 border-b-2 border-indigo-500"
                                        : "text-gray-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Team States
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 4
                                        ? "text-indigo-500 border-b-2 border-indigo-500"
                                        : "text-gray-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Issues
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                                    (openTab === 5
                                        ? "text-indigo-500 border-b-2 border-indigo-500"
                                        : "text-gray-600")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Suggestions
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <DesignImages></DesignImages>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <Screenshots />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    {/* <AllTeamMember></AllTeamMember> */}
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">

                                    {/* <ProductIssues /> */}
                                </div>
                                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                                    <ProductSuggestions></ProductSuggestions>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureTabs;