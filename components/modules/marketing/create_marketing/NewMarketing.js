import React from 'react';
import { useState, useEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import {
    Checkbox,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider, Button, TextField, MenuItem, Box, FormControlLabel
} from '@mui/material';

const NewMarketing = () => {
    const [value, setValue] = useState(0);

    return (
        <div className='mt-4 bg-white shadow rounded-lg p-3 sm: m-0 '>
            <div>
                <h1 className='text-2xl font-semibold text-center'>⚡ Marketing plans for your Startup</h1>
                <TextField className='mt-4' label="Marketing Name" id="fullWidth" />
            </div>
            <FormControlLabel
                value="meetup"
                control={<Checkbox />}
                label="Major Strategy?"
                labelPlacement="start"
            />
            <div className='mt-6'>
                <DatePicker
                    label="Start Date"
                    value={value}
                    onChange={(newValue) => {
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </div>
            <div className=''>
                <div className="form-control mt-4">
                    <div className="rounded-l-lg">
                        <select className="select bg-white border-gray-300">
                            <option disabled selected>Assign a Leader</option>
                            <option>@ashsenior</option>
                            <option>@honeysingh</option>
                        </select>
                    </div>
                </div>
                <Box
                    className='mt-4'
                    sx={{
                        maxWidth: '100%',
                    }}
                >
                    <TextField
                        style={{ width: "100%" }}
                        id="outlined-multiline-static"
                        label="Customer it impacts"
                        multiline
                        minRows={2}
                    />
                </Box>
                <Box
                    className='mt-4'
                    sx={{
                        maxWidth: '100%',
                    }}
                >
                    <TextField
                        style={{ width: "100%" }}
                        id="outlined-multiline-static"
                        label="Marketing description"
                        multiline
                        minRows={4}
                    />
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
                        <TextField fullWidth label="Facebook" id="fullWidth" />
                    </Box>
                    <Box
                        className='mt-4'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Instagram" id="fullWidth" />
                    </Box>
                    <Box
                        className='mt-4'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="LinkedIn" id="fullWidth" />
                    </Box>
                    <Box
                        className='mt-4'
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="Reddit" id="fullWidth" />
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

export default NewMarketing;