import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PostAddIcon from '@mui/icons-material/PostAdd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ProductTeamTable from './ProductTeamTable';

const CorporateTab = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [dropdownCorporate, setDropdownCorporate] = React.useState(false);
    return (
        <div>
            <button
                onClick={() => setDropdownCorporate(!dropdownCorporate)}
                className='btn btn-ghost flex'>Dropdown Corporate</button>
            <div
                onClick={() => setDropdownCorporate(false)}
                class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 relative">
                {
                    dropdownCorporate && <ul class={"w-40 block bg-gray-100 p-2 rounded absolute z-20"}>
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
                            ><HandshakeIcon /> Mentor</a>
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
                            ><PostAddIcon /> Hello</a>
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
                            ><EmojiEventsIcon /> Pioneer</a>
                        </li>
                    </ul>
                }

                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded mt-2">
                    <div
                        className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <ProductTeamTable></ProductTeamTable>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <ProductTeamTable></ProductTeamTable>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                                <ProductTeamTable></ProductTeamTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateTab;