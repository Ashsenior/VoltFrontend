import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import DesignImages from './DesignImages';

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

const FeatureTabs = () => {
    const tabs = [
        { name: 'Chats', href: '#', current: false },
        { name: 'Description', href: '#', current: false },
        { name: 'Design', href: '#', current: false },
        { name: 'Screenshots', href: '#', current: true },
    ]

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className='mt-6'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Chats" {...a11yProps(0)} />
                            <Tab label="Description" {...a11yProps(1)} />
                            <Tab label="Design" {...a11yProps(2)} />
                            <Tab label="Screenshots" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Chats
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Description
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className='flex gap-4 mb-6'>
                            <div className='flex items-center gap-2 border p-2 rounded-md bg-white w-fit'>
                                <input className='w-5 h-5' type="checkbox" name="" id="" />
                                <h4 className='font-semibold'>Front Page</h4>
                            </div>
                            <div className='flex items-center gap-2 border p-2 rounded-md bg-white w-fit'>
                                <input className='w-5 h-5' type="checkbox" name="" id="" />
                                <h4 className='font-semibold'>Dashboard</h4>
                            </div>
                        </div>
                        <DesignImages></DesignImages>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Screenshots
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
};

export default FeatureTabs;