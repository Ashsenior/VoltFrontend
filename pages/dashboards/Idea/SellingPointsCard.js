import { TextField } from '@mui/material';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

const SellingPointsCard = () => {
    return (
        <div className='mx-4 mt-4 md:mt-0'>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="selling-point-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action flex flex-col">
                        <TextField
                            required
                            id="outlined-search"
                            label="Add Points"
                            type="search"
                        // onChange={handlename}
                        />
                        <label htmlFor="selling-point-modal" className="btn btn-xs btn-circle mx-auto mt-2">X</label>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-full bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="card-body">
                    <h4 className='text-xl font-semibold'>Unique Selling Points</h4>
                    <ul>
                        <li className='flex'><BiChevronRight className='text-xl text-blue-500'></BiChevronRight> Lorem ipsum dolor sit amet consectetur</li>
                        <li className='flex'><BiChevronRight className='text-xl text-blue-500'></BiChevronRight> Lorem ipsum dolor sit amet consectetur</li>
                        <li className='flex'><BiChevronRight className='text-xl text-blue-500'></BiChevronRight> Lorem ipsum dolor sit amet consectetur</li>
                        <li className='flex'><BiChevronRight className='text-xl text-blue-500'></BiChevronRight> Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                    <div className="card-actions justify-end">
                        {/* The button to open modal */}
                        <label type="button" htmlFor="selling-point-modal" className="inline-flex items-center px-3 py-1 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-1">Add</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellingPointsCard;