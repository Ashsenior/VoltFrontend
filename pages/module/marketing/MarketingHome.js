import { Container } from '@mui/system';
import React from 'react';
import MarketingMajor from './MarketingMajor';
import Router from 'next/router';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Socials from './Socials';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
                <Box sx={{ p: 3 }}>
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
            {/* Link Buttons */}
            <Container maxWidth='w-full my-4'>
                {/* MUI tabs */}

                <div className="relative pb-5 border-b border-gray-200 sm:pb-0">
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
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="In Progress" {...a11yProps(0)} />
                                    <Tab label="Completed" {...a11yProps(1)} />
                                    <Tab label="Closed" {...a11yProps(2)} />
                                    <Tab label="Task" {...a11yProps(3)} />
                                    <Tab label="Socials" {...a11yProps(4)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                In Progress
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Completed
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Closed
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                {/* Strategy Cards */}
                                {/* Major */}
                                <Container maxWidth='lg'>
                                    <h1 className='text-base my-1 font-semibold  ml-1'>Major</h1>
                                    <div xs={12} md={6} lg={6} className='grid grid-cols-1 xl:grid-cols-1'>
                                        <MarketingMajor></MarketingMajor>
                                    </div>
                                </Container>
                                {/* Minor */}
                                <Container maxWidth='lg'>
                                    <h1 className='text-base my-1 font-semibold mt-6 ml-1'>Minor</h1>
                                    <div className='grid grid-cols-1 xl:grid-cols-1'>
                                        <MarketingMajor></MarketingMajor>
                                    </div>
                                </Container>
                                {/* Minor */}
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <Container maxWidth='lg'>
                                    <div className='grid grid-cols-1 xl:grid-cols-1'>
                                        <Socials></Socials>
                                    </div>
                                </Container>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default MarketingHome;