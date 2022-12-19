import React from 'react';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';

const PurchaseModal = () => {
    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-fit rounded-md">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle bg-indigo-400 hover:bg-indigo-600 border-0 absolute right-2 top-2 z-20">✕</label>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className='w-full lg:w-1/2'>
                            <figure><img className='w-full rounded-md' src="https://play-lh.googleusercontent.com/btV2oGBaKZk8x2yXC8ZLNmaT9xL077JgWC65MrEl4XwcxCboknSt5BKtVFovnjKHLJc=s256-rw" alt="Album" /></figure>
                        </div>

                        <div className="w-40 lg:w-1/2 card text-left">
                            <div className='card-title flex items-center gap-1'>
                                <img className='w-8 rounded-full ring-2 ring-teal-400' src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=2000" alt="" />
                                <h1 className='text-xl font-semibold text-gray-400'>101 Tech ltd</h1>
                            </div>
                            <h4 className='text-base font-medium'>Item Name</h4>
                            <p className='text-sm font-medium text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi placeat ut</p>
                            <p className='flex items-center gap-1'>Price: <span className='text-indigo-500 flex items-center'>10 <OfflineBoltOutlinedIcon className='text-base' /> </span></p>
                            <p>Current Balance: <span className='bg-indigo-50 p-1 rounded-full text-indigo-600 py-0.5'>12 Volt</span> </p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-sm border-0 rounded-md bg-indigo-500 hover:bg-indigo-600 w-full mt-4'>Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;

// <div className='flex flex-col' >
//     <img className='p-4 w-60 md:w-72' src="https://play-lh.googleusercontent.com/btV2oGBaKZk8x2yXC8ZLNmaT9xL077JgWC65MrEl4XwcxCboknSt5BKtVFovnjKHLJc=s256-rw" alt="" />
//     <div className='text-start ml-2'>
//         <div className='flex items-center gap-1'>
//             <img className='w-8 rounded-full ring-2 ring-teal-400' src="https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=2000" alt="" />
//             <h1 className='text-base font-medium'>101 Tech ltd</h1>
//         </div>
//         <h1>Product Name</h1>
//         <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi placeat ut, porro velit facilis?</p>
//         <p className='flex items-center gap-1'>Price: <span className='text-indigo-500 flex items-center'>10 <OfflineBoltOutlinedIcon className='text-base' /> </span></p>
//         <p>Current Balance: <span className='bg-indigo-50 p-1 rounded-full text-indigo-600 py-0.5'>12 Volt</span> </p>
//     </div>
//     <div>
//         <button className='btn btn-sm border-0 rounded-md bg-indigo-500 hover:bg-indigo-600 w-full mt-4'>Purchase</button>
//     </div>
// </div>