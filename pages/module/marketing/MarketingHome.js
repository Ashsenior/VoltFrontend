import { Container } from '@mui/system';
import React from 'react';
import Router from 'next/router';


import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MarketingStatus from './MarketingStatus';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MarketingHome = () => {
    const tabs = [
        { name: 'In Progress', href: '#', current: false },
        { name: 'Completed', href: '#', current: false },
        { name: 'Closed', href: '#', current: false },
        { name: 'Task', href: '#', current: true },
        { name: 'Socials', href: '#', current: false },
    ]

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="relative mt-4 pb-5 sm:pb-0 xl:px-0">
                <div className="md:flex md:items-center md:justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Marketing Models</h3>
                    <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add New Social
                        </button>
                        <button
                            onClick={() => Router.push('/module/create_marketing/NewMarketing')}
                            type="button"
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create new Marketing
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <MarketingStatus></MarketingStatus>
                </div>
            </div>

        </div>
    );
};

export default MarketingHome;