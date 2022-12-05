import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import ReactApexChart from 'react-apexcharts';

const Previews = ({ preview }) => {

    const [barChart, setBarChart] = useState({
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                height: 200,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
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
        <div className={`mx-auto bg-${preview.bg}-50 rounded-lg p-2 shadow-lg`}>
            <div className='flex gap-1'>
                <ShoppingCartIcon />
                <h4 className='text-base font-semibold'>{preview.name}</h4>
            </div>
            <div className='flex item-center gap-1 mt-1'>
                <h4 className='text font-medium'>Potential</h4>
                <p className="px-2 inline-flex text-xs align-middle leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {preview?.points} Volts
                </p>
            </div>
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

                    <div className='bg-white rounded-md shadow p-2 my-1'>
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

                        <div className='flex items-center gap-6 my-2 '>
                            <button className='flex items-center gap-2  hover:text-red-500'>
                                <YouTubeIcon />
                                <p className='font-semibold'>{marketing?.youtube}</p>
                            </button>
                            <button className='flex button items-center gap-2 hover:text-orange-400'>
                                <RedditIcon />
                                <p className='font-semibold'>{marketing?.reddit}</p>

                            </button>
                            <button className='flex button items-center gap-2 hover:text-red-500'>
                                <InstagramIcon />
                                <p className='font-semibold'>{marketing?.instagram}</p>
                            </button>
                        </div>
                    </div>
                </>)
            }
            <div>
                <ReactApexChart options={barChart.options} series={barChart.series} type="line" height={200} />
            </div>
        </div>
    );
};

export default Previews;