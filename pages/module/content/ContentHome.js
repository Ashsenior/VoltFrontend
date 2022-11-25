import React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Contents from './Contents';
import ContentTab from './ContentTab';
import ContentSubmitted from './ContentSubmitted';

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



const ContentHome = () => {
    const tabs = [
        { name: 'Active Content', href: '#', current: false },
        { name: 'Content', href: '#', current: false },
        { name: 'Submitted', href: '#', current: false },
    ]

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
        <div>
            <div className="relative mt-4 px-2 pb-5 border-b border-gray-200 sm:pb-0 xl:px-10">
                <div className="ml-4 md:flex md:items-center md:justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Marketing Models</h3>
                    <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
                        <button
                            onClick={() => Router.push('/module/create_marketing/NewMarketing')}
                            type="button"
                            className="inline-flex items-center mr-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create new content
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <Box>
                        <Box className='justify-center pb-2' sx={{ borderBottom: 0, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Active Task" {...a11yProps(0)} />
                                <Tab label="Content" {...a11yProps(1)} />
                                <Tab label="Submitted" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Contents></Contents>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <ContentTab></ContentTab>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <ContentSubmitted></ContentSubmitted>
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default ContentHome;