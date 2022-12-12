import React from 'react';
import { MdOutlineWorkOutline, MdTask } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';
const TeamCard = ({ member }) => {
    return (
        <div
            key={member.id}
        >
            <div className="grid grid-cols-2 border p-2 rounded-md">
                <div>
                    <img className='w-14 rounded-full mx-auto' src={member.image} alt="" />
                    <div className="items-center text-center p-2 border-b mx-2">
                        <p className='text-sm font-semibold'>{member?.role}</p>
                        <p className="px-2 inline-flex text-xs align-middle leading-5 font-semibold rounded-full bg-green-100 text-blue-800">
                            {member?.progress} Points
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <div className="tooltip tooltip-info" data-tip="Tasks">
                            <button
                                // onClick={() => Router.push('/module/product/ProductDetails')}
                                className="btn btn-ghost hover:bg-white"><MdTask className='text-xl text-blue-500'></MdTask>10</button>
                        </div>
                        <div className="tooltip tooltip-success" data-tip="Jobs">
                            <button className="btn btn-ghost hover:bg-white"><MdOutlineWorkOutline className='text-xl text-green-400'></MdOutlineWorkOutline>3</button>
                        </div>
                        <div className="tooltip tooltip-error" data-tip="Rating">
                            <button className="btn btn-ghost hover:bg-white"><BiStar className='text-xl text-orange-500'></BiStar>4.5</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h2 className="text-base font-medium">{member.name}</h2>
                        <p className='text-sm font-semibold'>Status: <span className={`text-${member?.color}-400`}> {member?.status}</span> </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur</p>
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