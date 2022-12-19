import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ProductTeamTable from './ProductTeamTable';
import { TextField, MenuItem } from '@mui/material';

const filters = [
    {
        value: "overall",
        label: "All Rounders",
        icon: <PsychologyIcon />,
    },
    {
        value: "research",
        label: "Research Guru's",
        icon: <PostAddIcon />,
    },
    {
        value: "research",
        label: "Marketing Genius",
        icon: <LocalGroceryStoreIcon />,
    },
    {
        value: "research",
        label: "Technical Jedi's",
        icon: <WysiwygIcon />,
    },
  ];

const CorporateTab = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [dropdownCorporate, setDropdownCorporate] = React.useState(false);
    const [filter, setFilter] = React.useState("overall");

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>
            <TextField
                select
                label="Filters"
                className='w-60 mt-2 p-0'
                onChange={handleFilter}
            >
            {filters.map((filter) => (
                <MenuItem className='justify-between' key={filter.value} value={filter.value}>
                {filter.icon} {filter.label}
                </MenuItem>
            ))}
            </TextField>
            <div
                onClick={() => setDropdownCorporate(false)}
                class="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 relative">
                

                <div className="relative flex flex-col min-w-0 break-words bg-white mt-2 w-full mb-6 rounded">
                    <div className="flex-auto">
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
        </>
    );
};

export default CorporateTab;