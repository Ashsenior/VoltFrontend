import React from 'react';
import {
    InputLabel, Select, TextField, MenuItem, FormControl, Checkbox, FormControlLabel
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import '@mui/lab';

const CreateMeetingModal = () => {
    return (
        <div>
            <input type="checkbox" id="create-meeting-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <h4 className='text-2xl text-center mb-4'>Lets MeetUp</h4>
                    <div className="relative focus:outline-none mb-4">
                        <TextField
                            required
                            style={{ width: "100%" }}
                            id="outlined-search"
                            label="Meetup title"
                            type="search"

                        />
                    </div>
                    <div className="relative margin focus:outline-none mb-4">
                        <TextField
                            style={{ width: "100%" }}
                            id="outlined-multiline-static"
                            label="Meetup description"
                            multiline
                            minRows={4}
                        />
                    </div>
                    <div className="relative margin focus:outline-none mb-4">
                        <DatePicker
                            required
                            label="Date Time"
                            onChange={(newValue) => {

                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className="relative margin focus:outline-none mb-4">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Importance</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="Normal"
                                label="Importance"
                            >
                                <MenuItem value={10}>Important</MenuItem>
                                <MenuItem value={20}>Discussion</MenuItem>
                                <MenuItem value={30}>Normal</MenuItem>
                                <MenuItem value={30}>Daily</MenuItem>
                                <MenuItem value={30}>Optional</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            value="meetup"
                            control={<Checkbox />}
                            label="Instant Meetup ?"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="meetup"
                            control={<Checkbox />}
                            label="Meetup only for Members of Board ?"
                            labelPlacement="start"
                        />
                    </div>


                    <div className="modal-action">
                        <label htmlFor="create-meeting-modal" className="btn">Cancel</label>
                        <button
                            onClick={() => Router.push('/dashboards')}
                            type="button" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-large rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateMeetingModal;

