import { TextField } from '@mui/material';
import React from 'react';

const EditModal = () => {
    return (
        <div>
            <div className='w-full bg-white'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-1 md:px-5 rounded-lg py-3'>
                    <h4 className='text-xl font-semibold'>Edit Startup Details</h4>
                    {/* The button to open modal */}
                    <label
                        // onClick={() => Router.push('/create_startup')}
                        htmlFor="edit-startups-modal"
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Edit Startups
                    </label>
                </div>
            </div>
            <input type="checkbox" id="edit-startups-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action flex flex-col">
                        <h1 className='text-xl font-semibold text-center m-2'>Edit Startup Here</h1>
                        <TextField
                            required
                            id="outlined-search"
                            label="Add Points"
                            type="search"
                        // onChange={handlename}
                        />
                        <TextField
                            required
                            id="outlined-search"
                            label="Add Points"
                            type="search"
                        // onChange={handlename}
                        />
                        <TextField
                            required
                            id="outlined-search"
                            label="Add Points"
                            type="search"
                        // onChange={handlename}
                        />
                        <TextField
                            required
                            id="outlined-search"
                            label="Add Points"
                            type="search"
                        // onChange={handlename}
                        />
                        <label htmlFor="edit-startups-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <label type="button" htmlFor="edit-startups-modal" className="btn btn-sm mt-2 w-16">Add</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EditModal;