import { Box, TextField } from '@mui/material';
import React from 'react';

const MemberModal = () => {
    return (
        <div>
            <input type="checkbox" id="teamMemberModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-white">
                    <label htmlFor="teamMemberModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div class="modal-body">
                            <div className='flex items-center justify-start gap-2 mt-4'>
                                <img className='w-14 rounded-full' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                <div className='flex flex-col items-start gap-1'>
                                    <h4>Member name</h4>
                                    <p className='px-2  rounded-full bg-gray-200 border text-gray-600 small'>@username</p>
                                </div>
                            </div>
                            <div class="tags flex gap-1 text-gray-600 font-semibold mt-3">
                                <small className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-blue-500 ml-1">PYTHON</small>
                                <small className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-blue-500 ml-1">HTML5</small>
                                <small className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-blue-500 ml-1">DJANGO</small>
                            </div>
                            <p class="description text-left p-1">User description goes here. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum similique nam perspiciatis quia veniam rem iure, voluptas ut odio sit vero tempora assumenda amet. Repudiandae.</p>

                            <Box
                                className="my-4"
                                sx={{
                                    maxWidth: "100%",
                                }}
                            >
                                <TextField
                                    style={{ width: "100%" }}
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    minRows={4}
                                    name="jobInvitation"
                                />
                            </Box>

                        </div>
                        <div class="modal-footer flex justify-between">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" className="checkbox" /> <label>Send Idea with invitation</label>
                            </div>
                            <button class="btn btn-sm bg-indigo-500 text-indigo-100 hover:bg-indigo-600 rounded-lg border-0">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberModal;