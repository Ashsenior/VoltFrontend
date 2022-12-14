import React from 'react';

const PurchaseModal = () => {
    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex flex-col lg:flex-row' >
                        <img src="https://play-lh.googleusercontent.com/btV2oGBaKZk8x2yXC8ZLNmaT9xL077JgWC65MrEl4XwcxCboknSt5BKtVFovnjKHLJc=s256-rw" alt="" />
                        <div className='text-start ml-2'>
                            <h1>Product Name</h1>
                            <p>Price: 100$</p>
                            <p>Current Balance: 12 Volt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;