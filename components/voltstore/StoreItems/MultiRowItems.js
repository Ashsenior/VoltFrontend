import React from 'react';

import StarIcon from '@mui/icons-material/Star';

const MultiRowItems = () => {
    var items = [
        {
            name: "Item #1",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/c240yqpF4BzB8XE4UF0yY4UTOzp9zVslIWHxsdEzVSg3v0BYKGcrTH5ZIcxED1z94Dcb=s64-rw'
        },
        {
            name: "Item #2",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s64-rw'
        },
        {
            name: "Item #3",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/KzEk8vKXTBztnDAU1XCwME43i70BTtwTH-xYhlFWOhvkBMXZh0cno_PR9XAU-P2xQgQ=s64-rw'
        },
        {
            name: "Item #4",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/Bl6ehsJWLuBaethzMiD3Kpfid_TNNV7ECLp-1QETcNhQ75uPTxW1zLpXEPiq9rcPkps=s64-rw'
        },
        {
            name: "Item #5",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/WG9LoxydQHtU2S7iUvlLAdt1_fc5edPzT0Q_pJ7QJLhriQlz4G-ToaG6UJDiNJoBSAoA=s64-rw'
        },
        {
            name: "Item #6",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/kh2_eN-8jLapLGca6E7EupoEpv9e7IWXGxWLPwCBKl888d8IiLPAuPWAhgmFLk4EoA=s64-rw'
        },
        {
            name: "Item #7",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/4cYUaOl_BfnT47O9sIstXdbSFU1JEIhWpLgfAaWY0SGYzUr760_1sFErEDfYK63AXcQ=s64-rw'
        },
        {
            name: "Item #8",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/hYLElG0RAgn60XE6cfgsPPW_JB63PEVWvDtvhipAGvTpxBX5YgLGt3UXvnJ_kRwKhnE=s64-rw'
        },
        {
            name: "Item #8",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/L28fJKvmMH9X3EDjDgJyAEK4UgkTzW2zAZCYG5H-wQSwdhfnv4NRQ34g0LDGDJi9nLt6=s64-rw'
        },
    ]

    return (
        <div>
            <div className='flex items-center justify-between mb-2'>
                <h4 className='text-xl font-semibold text-gray-700 text-left mb-2'>Top Sold</h4>
                <button className='btn btn-outline btn-sm rounded-md'>All Items</button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {
                    items.map((item, index) =>
                        <div
                            key={item.name}

                        >
                            <label htmlFor="purchaseModal" className='flex hover:bg-gray-100 rounded-lg'>
                                <p className='flex items-center justify-center p-2'>{index + 1}</p>
                                <img className='rounded-xl shadow-xl m-2' src={item.image} alt="" />
                                <div className='flex flex-col items-start ml-2'>
                                    <h1 className='text-base font-medium text-gray-800'>{item.name}</h1>
                                    <p>{item.type}</p>
                                    <p className='flex items-center'>{item.rating} <StarIcon className='text-sm' /></p>
                                </div>
                            </label>
                        </div>)
                }
            </div>
        </div >
    );
};


export default MultiRowItems;