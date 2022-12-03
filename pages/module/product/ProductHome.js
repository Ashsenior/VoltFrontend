import React from 'react';
import Router from 'next/router';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard';


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


const ProductHome = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className='w-full bg-white'>
                <div className='w-full flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <Tabs
                            value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="All" {...a11yProps(0)} />
                            <Tab label="New" {...a11yProps(1)} />
                            <Tab label="Complete" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <button
                        // onClick={() => Router.push('/module/product/ProductDetails')}
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Product
                    </button>
                </div>
            </div>
            <Box>
                <TabPanel value={value} index={0}>
                    <ProductCard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    New
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Complete
                </TabPanel>
            </Box>

        </div >
    );
};

export default ProductHome;