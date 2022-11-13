import { Button, TextField } from '@mui/material';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

const SellingPointsCard = () => {
    return (
        <div className='mx-4 mt-4 md:mt-0'>
            {/* Put this part before </body> tag */}


            <div className="card card-compact w-full stats rounded-lg stats-vertical lg:stats-horizontal shadow-lg">
                <div className="card-body">
                    <h4 className='text-xl text-white font-semibold'>Unique Selling 💪</h4>
                    <ul>
                        <li className='flex'>⚡ Lorem ipsum dolor sit amet consectetur</li>
                        <li className='flex'>⚡ Lorem ipsum dolor sit amet consectetur</li>
                        <li className='flex'>⚡ Lorem ipsum dolor sit amet consectetur</li>
                        <li className='flex'>⚡ Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellingPointsCard;