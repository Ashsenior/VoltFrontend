import React from 'react';

const CreateMeetingModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h4 className='text-2xl font-bold text-center mb-4'>New Meet</h4>
                    <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none mb-4">
                        <label
                            htmlFor="name"
                            className="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white font-medium text-gray-900"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-none sm:text-sm"
                            placeholder=""
                        />
                    </div>
                    <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none mb-4">
                        <label
                            htmlFor="name"
                            className="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white font-medium text-gray-900"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-none sm:text-sm"
                            placeholder=""
                        />
                    </div>

                    <input type="datetime" name="" id="" />



                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateMeetingModal;