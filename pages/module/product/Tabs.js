import React from 'react';
import AllTeamMembers from 'pages/module/product/AllTeamMembers';
import DesignImages from './DesignImages';

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div className='mt-6'>
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
                                Product Features
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
                                Team States
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
                                Features
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
                                UI Designs
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
                                Issues
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <p>
                                        Collaboratively administrate empowered markets via
                                        plug-and-play networks. Dynamically procrastinate B2C users
                                        after installed base benefits.
                                        <br />
                                        <br /> Dramatically visualize customer directed convergence
                                        without revolutionary ROI.
                                    </p>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <AllTeamMembers />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions
                                        without functional solutions.
                                    </p>
                                </div>
                                <div className={openTab === 4 ? "block" : "hidden"} id="link4">

                                    <DesignImages></DesignImages>
                                </div>
                                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions
                                        without functional solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;