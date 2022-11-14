import { Link, Button } from '@mui/material';
import React from 'react';
import { Biotech, Home } from "@mui/icons-material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const positions = [
    {
        id: 1,
        title: 'Extensive Student Hackathons',
        type: 'Full-time',
        location: 'Remote',
        department: 'Engineering',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
    },
    {
        id: 2,
        title: 'Strategy 2',
        type: 'Full-time',
        location: 'Remote',
        department: 'Engineering',
        closeDate: '2020-01-07',
        closeDateFull: 'January 7, 2020',
    },
    {
        id: 3,
        title: 'Strategy 3',
        type: 'Full-time',
        location: 'Remote',
        department: 'Design',
        closeDate: '2020-01-14',
        closeDateFull: 'January 14, 2020',
    },
]

const StrategyMajor = () => {
    return (
        <div className="bg-white shadow overflow-hidden">
            <ul role="list" className="divide-y divide-gray-200">
                {positions.map((position) => (
                    <li key={position.id}>
                        <a href="#" className="border-l-x-4 border-green-200 block hover:bg-gray-100">
                            <div className="px-3 py-3 sm:px-3">
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-medium text-indigo-600 truncate"> {position.title}</p>
                                    <div className="ml-2 flex-shrink-0 flex">
                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            @ashsenior
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                            <div className='flex items-center justify-start'>
                                                <h3 className='flex items-center rounded-lg '>
                                                    <Button
                                                        className='text-green-700 bg-green-50'
                                                        disableRipple
                                                        component="a"
                                                        startIcon={<LocalGroceryStoreIcon />}
                                                    >
                                                        3 Marketing
                                                    </Button>
                                                </h3>
                                                <h3 className='flex items-center rounded-lg p-1'>
                                                    <Button
                                                        className='text-green-700 bg-green-50'
                                                        disableRipple
                                                        component="a"
                                                        startIcon={<MonetizationOnIcon />}
                                                    >
                                                        6 Sales
                                                    </Button>
                                                </h3>
                                                <h3 className='flex items-center rounded-lg p-1'>
                                                    <Button
                                                        className='text-green-700 bg-green-50'
                                                        disableRipple
                                                        component="a"
                                                        startIcon={<Biotech />}
                                                    >
                                                        4 Research
                                                    </Button>
                                                </h3>
                                            </div>
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <p className="px-2 mx-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            50 Volts
                                        </p>
                                        <p>
                                            Start Date <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StrategyMajor;