import React from 'react';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const colors = ['#148F77', '#0E6251',]

const TeamAnalytics = () => {
    const [barChart, setBarChart] = useState({
        series: [{
            data: [16, 22, 10, 26, 16, 21, 13, 31]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    }
                }
            },
            // colors: colors,
            plotOptions: {
                bar: {
                    columnWidth: 30,
                    barHeight: '70%',
                    borderRadius: 10,
                    borderRadiusApplication: 'top',
                    distributed: true,
                    colors: {
                        ranges: [
                            {
                                from: 0,
                                to: 8,
                                color: '#D1F2EB'
                            },
                            {
                                from: 9,
                                to: 16,
                                color: '#A3E4D7'
                            },
                            {
                                from: 17,
                                to: 24,
                                color: '#48C9B0'
                            },
                            {
                                from: 25,
                                to: 32,
                                color: '#17A589'
                            }
                        ],
                        backgroundBarColors: [],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 0,
                    },
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    ['John', 'Doe'],
                    ['Joe', 'Smith'],
                    ['Jake', 'Williams'],
                    'Amber',
                    ['Peter', 'Brown'],
                    ['Mary', 'Evans'],
                    ['David', 'Wilson'],
                    ['Lily', 'Roberts'],
                ],
                labels: {
                    style: {
                        color: "#148F77",
                        fontSize: '12px'
                    }
                }
            }
        },
    })

    return (
        <div className='w-full bg-white rounded-lg p-2 shadow'>
            <h4 className='text-base font-semibold m-2'>Team Performance</h4>
            <ReactApexChart
                options={barChart.options}
                series={barChart.series}
                height={350}
                width='100%'
                type="bar" />
        </div>
    );
};

export default TeamAnalytics;