import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import StudentsTab from './StudentsTab';
import CorporateTab from './CorporateTab';
import MemberModal from './MemberModal';

const TeamTabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <MemberModal />
            <h4 className='text-xl font-semibold text-gray-600 text-center mt-4'>Find the best team and employee for your next dream project</h4>
            <div class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 ml-4">
                <ul class="flex flex-wrap -mb-px border-b border-gray-200">
                    <li className={
                        "text-base font-medium capitalize px-5 py-3 block leading-normal " +
                        (openTab === 1
                            ? "border-b-2 border-blue-600 text-blue-500"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        ><MenuBookIcon /> Students</a>
                    </li>
                    <li className={
                        "text-base font-medium capitalize px-5 py-3 block leading-normal " +
                        (openTab === 2
                            ? "border-b-2 border-blue-600 text-blue-500"
                            : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                    }>
                        <a
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            className='flex items-center gap-2'
                            href="#"
                        ><CorporateFareIcon /> Corporate Professionals</a>
                    </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded mt-2">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <StudentsTab></StudentsTab>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <CorporateTab></CorporateTab>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamTabs;