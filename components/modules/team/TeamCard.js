import React from 'react';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';

const TeamCard = ({ member }) => {
    return (
        <div
            key={member.id}
        >
            <div className="grid grid-cols-2 border p-2 rounded-md">
                <div>
                    <img className='w-14 rounded-full mx-auto' src={member.image} alt="" />
                    <div className="items-center text-center p-2 mx-2">
                        <p className="px-2 inline-flex text-xs align-middle leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                            {member?.progress} Points
                        </p>
                    </div>

                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h2 className="text-base font-medium">{member.name}</h2>
                        <p className='text-sm font-semibold'>{member?.role}</p>
                        <span className='text-sm'><span className={`text-gray-400`}> {member?.status}</span> </span>
                        
                        <div className='flex mt-1 text-gray-400'>
                            <div className="tooltip tooltip-info" data-tip="Tasks">
                                <button
                                    // onClick={() => Router.push('/module/product/ProductDetails')}
                                    className="flex hover:bg-white"><TaskAltOutlinedIcon className='text-xl'></TaskAltOutlinedIcon>10</button>
                            </div>
                            <div className="tooltip tooltip-success ml-4" data-tip="Jobs">
                                <button className="flex hover:bg-white"><PendingActionsOutlinedIcon className='text-xl'></PendingActionsOutlinedIcon>3</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className='flex'>
                        <button className='btn btn-xs bg-indigo-400 hover:bg-indigo-600 rounded-sm border-0 mx-auto'>Connect <IoMdAdd className='text-xl text-gray-500'></IoMdAdd> </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;