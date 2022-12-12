import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import MarketingTeamTable from './MarketingTeamTable';
import ProductTeamTable from './ProductTeamTable';
import ResearchTeamTable from './ResearchTeamTable';

const StudentsTab = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [dropdownStudents, setDropdownStudents] = React.useState(false);

    return (
        <div>
            <button
                onClick={() => setDropdownStudents(!dropdownStudents)}
                className='btn btn-ghost flex'>Dropdown Students</button>
            <div
                onClick={() => setDropdownStudents(false)}
                class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 relative">
                {
                    dropdownStudents && <ul class={"w-40 block bg-gray-100 p-2 rounded absolute z-20"}>
                        <li className={
                            "text-sm capitalize px-5 py-3 block leading-normal " +
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
                            ><LocalGroceryStoreIcon /> Marketing</a>
                        </li>
                        <li className={
                            "text-sm capitalize px-5 py-3 block leading-normal " +
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
                            ><WysiwygIcon /> Product </a>
                        </li>
                        <li className={
                            "text-sm capitalize px-5 py-3 block leading-normal " +
                            (openTab === 3
                                ? "border-b-2 border-blue-600 text-blue-500"
                                : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")
                        }>
                            <a
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                className='flex items-center gap-2'
                                href="#"
                            ><PostAddIcon /> Research</a>
                        </li>
                    </ul>
                }

                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded mt-2">
                    <div
                        className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <h4 className='text-start text-base p-2'>Marketing members</h4>
                                <MarketingTeamTable />
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <h4 className='text-start text-base p-2'>Product members</h4>
                                <ProductTeamTable />
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                                <h4 className='text-start text-base p-2'>Research members</h4>
                                <ResearchTeamTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsTab;