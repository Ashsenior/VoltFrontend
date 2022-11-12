import React from 'react';
import { useState, useEffect } from 'react';
import { DatePicker } from "@mui/lab";
import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider, Button, TextField, MenuItem, Box
} from '@mui/material';

const NewStrategy = () => {

    const [value, setValue] = useState(0);


    return (
        <div className='mt-6'>
            <div>
                <h1 className='text-2xl font-semibold text-center'>New Strategy</h1>
                <h4 className='p-3 bg-white rounded-lg mt-4 text-center'>Here is the new Strategy</h4>
            </div>

            <div className="form-control mt-4">
                <div className="rounded-l-lg">
                    <select className="select">
                        <option disabled selected>Pick category</option>
                        <option>Major</option>
                        <option>Minor</option>
                    </select>
                </div>
            </div>
            <div className='mt-6'>
                <DatePicker
                    label="Start Date"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    minDate={new Date()}
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>
            <div className=''>
                <div className="form-control mt-4">
                    <div className="rounded-l-lg">
                        <select className="select">
                            <option disabled selected>Leader</option>
                            <option>One</option>
                            <option>Two</option>
                        </select>
                    </div>
                </div>
                <Box
                    className='mt-4'
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Description" id="fullWidth" />
                </Box>
            </div>

            <div>
                <h1 className='text-base font-semibold mt-4'>Success Metrics</h1>
                <div className='flex items-center gap-4'>
                    <Box
                        className='mt-4'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Metrics" id="fullWidth" />
                    </Box>
                    <Box
                        className='mt-4'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Metrics" id="fullWidth" />
                    </Box>
                    <Box
                        className='mt-4'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Metrics" id="fullWidth" />
                    </Box>
                </div>

                <div className='mt-4 flex items-center justify-end'>
                    <button
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create
                    </button>
                </div>

            </div>

        </div>
    );
};

export default NewStrategy;