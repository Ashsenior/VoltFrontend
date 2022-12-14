import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const StoreReports = () => {
    var items = [
        {
            name: "Report File #1",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #2",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #3",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #4",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #5",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #6",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #7",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #8",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
        {
            name: "Report File #8",
            description: "Sells and strategy report",
            type: 'Product',
            downloads: '42',
            icon: 'https://cdn.iconscout.com/icon/free/png-256/sales-analysis-report-progress-dollar-finance-analytics-1-9602.png'
        },
    ]
    return (
        <div className='mt-4'>
            <div className='flex items-center justify-between mb-2'>
                <h4 className='text-xl font-semibold text-gray-700 text-left mb-2'>Top Report file</h4>
                <button className='btn btn-outline btn-sm rounded-md'>All Reports</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {
                    items.map(item =>
                        <div className='border border-gray-200 hover:bg-gray-100 rounded-lg p-2' key={item.name}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='w-16 rounded-xl m-2' src={item.icon} alt="" />
                                    <div className='flex flex-col items-start ml-2'>
                                        <h1 className='text-base font-medium text-gray-800'>{item.name}</h1>
                                        <p>Downloads: {item.downloads}</p>
                                    </div>
                                </div>
                                <label htmlFor="purchaseModal" className='btn btn-sm btn-ghost rounded-sm capitalize'><ShoppingBasketIcon /></label>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default StoreReports;