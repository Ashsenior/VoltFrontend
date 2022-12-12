import { Box, TextField } from '@mui/material';
import React from 'react';

const MemberModal = () => {
    return (
        <div>
            <input type="checkbox" id="teamMemberModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="teamMemberModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div class="modal-body">
                            <div className='flex items-center justify-start gap-2 mt-4'>
                                <img className='w-14 rounded-full' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                <div className='flex flex-col items-start gap-1'>
                                    <h4>Member name</h4>
                                    <p>@username</p>
                                </div>
                            </div>
                            <div class="tags flex gap-1 ml-2 mt-1">
                                <label htmlFor="" className='font-semibold'>Skills: </label>
                                <span className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-green-500 ml-1">tag1</span>
                                <span className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-green-500 ml-1">tag2</span>
                                <span className="tag bg-blue-100 px-2 rounded-full w-fit ring-1 ring-green-500 ml-1">tag3</span>
                            </div>
                            <p class="description text-left p-2">User description goes here. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum similique nam perspiciatis quia veniam rem iure, voluptas ut odio sit vero tempora assumenda amet. Repudiandae.</p>

                            <Box
                                className="my-4"
                                sx={{
                                    maxWidth: "100%",
                                }}
                            >
                                <TextField
                                    style={{ width: "100%" }}
                                    id="outlined-multiline-static"
                                    label="Job description"
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
                            <button class="btn btn-sm bg-indigo-500 hover:bg-indigo-600 rounded-sm border-0">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberModal;