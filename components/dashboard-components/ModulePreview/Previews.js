import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import ReactApexChart from 'react-apexcharts';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Link,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { LinkedIn } from '@mui/icons-material';

const Previews = ({ preview }) => {

    const [barChart, setBarChart] = useState({
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                type: 'area',
                zoom: {
                    enabled: false
                }
            },
            colors: [preview.color],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            markers: {
                size: 4,
            },
            // title: {
            //     text: 'Product Trends by Month',
            //     align: 'left'
            // },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        },
    })



    console.log(preview)
    return (
        <div className={`bg-${preview.bg}-500 shadow-lg card my-1 rounded-2xl text-gray-500`}>
            <div className='flex gap-1 text-lg text-white px-4 py-2'>
                <Typography className='flex flex-row gap-10 my-1 '>
                    <button className='flex items-center justify-end gap-2  hover:text-indigo-300'>
                        <ShoppingCartIcon />
                        <h4 className='font-semibold'>{preview.name}</h4>
                    </button>
                    <button className={`px-2 leading-5 font-semibold rounded-full bg-${preview.bg}-100 text-${preview.bg}-800`}>
                        {preview?.points} Volts
                    </button>
                    <button className='flex items-center justify-end gap-2  hover:text-green-500'>
                        <p>More details</p>
                        <KeyboardArrowRightIcon />
                    </button>
                </Typography>
            </div>
            
            <div className='p-4 bg-white flex flex-wrap'>
            <div className='w-full xl:w-1/2 '>
                <div className='flex item-center gap-1 mt-1'>
                    <h4 className='font-medium'>Head </h4>
                    <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        @{preview.head}
                    </p>
                </div>
                <div className='flex gap-1 mt-1'>
                    <h4 className='font-medium'>Team </h4>
                    <div className='flex flex-wrap gap-1'>
                        <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            @{preview.team}
                        </p>
                        <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            @{preview.team}
                        </p>
                        <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            @{preview.team}
                        </p>
                        <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            @{preview.team}
                        </p>
                    </div>
                </div>

                {
                    preview.marketings?.map(marketing => <>

                        <div className={`bg-gray-700 rounded-lg p-4 my-4 text-gray-50`}>
                            <div className='flex justify-between mt-2'>
                                <h4 className='text-base font-medium'>{marketing?.name}</h4>
                                <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    @{marketing?.user}
                                </p>
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <h4 className='font-medium'>Deadline</h4>
                                <p className='text-xs'>{marketing?.deadline}</p>
                            </div>
                            <p>{marketing?.content}</p>

                            <div className='flex items-center text-gray-300 gap-6 my-2 '>
                                <button className='flex items-center gap-2  hover:text-red-500'>
                                    <YouTubeIcon />
                                    <p className=''>{marketing?.youtube}</p>
                                </button>
                                <button className='flex button items-center gap-2 hover:text-orange-400'>
                                    <LinkedIn />
                                    <p className=''>{marketing?.reddit}</p>
                                </button>
                                <button className='flex button items-center gap-2 hover:text-red-500'>
                                    <InstagramIcon />
                                    <p className=''>{marketing?.instagram}</p>
                                </button>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <div className='w-full xl:w-1/2 '>
                {
                    typeof window !== 'undefined'?
                        <ReactApexChart options={barChart.options} color={"green"} series={barChart.series} type="line" height={280} />
                    :
                    console.log('You are on the server,Cannot execute')
                }
            </div>
            </div>
        </div>
    );
};

export default Previews;