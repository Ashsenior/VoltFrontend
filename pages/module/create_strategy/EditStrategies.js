import { Accordion, AccordionDetails, AccordionSummary, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EditStrategies = () => {
    return (
        <div className='mt-6'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Strategy Name (Major)</h1>
                <Link to="" type='button' className='btn btn-sm'>In Progress</Link>
            </div>
            <medium>Strategy leader 
                <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                @ashsenior
                </p></medium>
            <h4>Start Date: <span>11/12/2022</span></h4>
            <div className='grid grid-cols-1 xl:grid-cols-2 p-3' >
                <div className='mt-6'>
                    <h4 className='text-lg font-semibold'>Customer it impacts</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, mollitia est nihil laudantium explicabo itaque omnis impedit fugiat officiis, voluptas, aut saepe voluptates odio praesentium recusandae velit? Debitis dignissimos nesciunt eos qui! Blanditiis nisi id esse omnis, consectetur modi nulla sit sunt! Reiciendis illo explicabo laboriosam voluptates consequuntur vel quas corporis.</p>
                </div>
                <div className='mt-6'>
                    <h4 className='text-lg font-semibold'>Strategy description</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, optio unde! Inventore repudiandae magni sed porro maiores omnis possimus eos voluptatem aliquam aperiam ex quos velit fugiat voluptatum, vel suscipit distinctio est perspiciatis quam earum nisi facere! Saepe fuga accusantium velit voluptate ea necessitatibus repellat reiciendis qui tempora ad. Exercitationem omnis mollitia consequuntur quaerat non! Quis soluta ex at numquam suscipit illum rerum, ipsa, earum laboriosam nobis velit quia placeat reprehenderit, officiis quo ut porro distinctio optio accusantium praesentium? Dolor, molestias corrupti, eos laudantium assumenda ullam voluptates rerum dignissimos quam.</p>
                </div>
            </div>
            <div className='mt-6'>
                <h4 className='text-base font-semibold'>Success Metrics</h4>
                <div className='flex gap-4 text-sm'>
                    <div className=' p-2 rounded-xl bg-green-100 text-green-700 flex items-center justify-center'>
                        <p>1,200 Likes</p>
                    </div>
                    <div className=' p-2 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center'>
                        <p>1,200 Likes</p>
                    </div>
                    <div className=' p-2 rounded-xl bg-red-100 text-red-700 flex items-center justify-center'>
                        <p>1,200 Likes</p>
                    </div>

                </div>
            </div>
            {/* Accordion for Marketing Sales Researchers */}

            <div className='mt-6 text-white'>
                <Accordion className='bg-base-200 text-white'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="text-white" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Marketing 3</Typography>
                    </AccordionSummary>
<<<<<<< HEAD
                    <AccordionDetails className='text-base-200 bg-gray-200'>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
=======
                    <AccordionDetails>
                        <h1 className='text-base font-bold'>Major</h1>
                        <div className='border-b-2'>
                            < div className='flex items-center justify-between' >
                                <Link to='/create_startups' className='font-semibold text-base no-underline cursor-pointer'>Name Of Strategy <small className='text-black'>01/07/2022</small></Link>
                                <h4><span>5</span> Tabs</h4>
                            </div >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere quisquam harum voluptate voluptas sed consectetur! Eum aspernatur, odio maxime quisquam culpa aut odit possimus tempore ullam architecto cum, minus soluta facere saepe alias, placeat blanditiis consectetur doloribus neque. Veritatis at culpa libero excepturi illo?</p>
                        </div>
                        <div className='border-b-2'>
                            < div className='flex items-center justify-between' >
                                <Link to='/create_startups' className='font-semibold text-base no-underline cursor-pointer'>Name Of Strategy <small className='text-black'>01/07/2022</small></Link>
                                <h4><span>5</span> Tabs</h4>
                            </div >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere quisquam harum voluptate voluptas sed consectetur! Eum aspernatur, odio maxime quisquam culpa aut odit possimus tempore ullam architecto cum, minus soluta facere saepe alias, placeat blanditiis consectetur doloribus neque. Veritatis at culpa libero excepturi illo?</p>
                        </div>
                        <h1 className='text-base font-bold'>Minor</h1>
                        <div className='border-b-2'>
                            < div className='flex items-center justify-between' >
                                <Link to='/create_startups' className='font-semibold text-base no-underline cursor-pointer'>Name Of Strategy <small className='text-black'>01/07/2022</small></Link>
                                <h4><span>5</span> Tabs</h4>
                            </div >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere quisquam harum voluptate voluptas sed consectetur! Eum aspernatur, odio maxime quisquam culpa aut odit possimus tempore ullam architecto cum, minus soluta facere saepe alias, placeat blanditiis consectetur doloribus neque. Veritatis at culpa libero excepturi illo?</p>
                        </div>
>>>>>>> 03165d993b181790caf4f4e4512bdccde1c5d266
                    </AccordionDetails>
                </Accordion>
                <Accordion className='bg-base-200 text-white'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="text-white" />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Sales 2</Typography>
                    </AccordionSummary>
<<<<<<< HEAD
                    <AccordionDetails className='text-base-200 bg-gray-200'>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
=======
                    <AccordionDetails>
                        <h1 className='text-base font-bold'>Major</h1>
                        <div className='border-b-2'>
                            < div className='flex items-center justify-between' >
                                <Link to='/create_startups' className='font-semibold text-base no-underline cursor-pointer'>Name Of Strategy <small className='text-black'>01/07/2022</small></Link>
                                <h4><span>5</span> Tabs</h4>
                            </div >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere quisquam harum voluptate voluptas sed consectetur! Eum aspernatur, odio maxime quisquam culpa aut odit possimus tempore ullam architecto cum, minus soluta facere saepe alias, placeat blanditiis consectetur doloribus neque. Veritatis at culpa libero excepturi illo?</p>
                        </div>
                        <h1 className='text-base font-bold'>Minor</h1>
                        <div className='border-b-2'>
                            < div className='flex items-center justify-between' >
                                <Link to='/create_startups' className='font-semibold text-base no-underline cursor-pointer'>Name Of Strategy <small className='text-black'>01/07/2022</small></Link>
                                <h4><span>5</span> Tabs</h4>
                            </div >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere quisquam harum voluptate voluptas sed consectetur! Eum aspernatur, odio maxime quisquam culpa aut odit possimus tempore ullam architecto cum, minus soluta facere saepe alias, placeat blanditiis consectetur doloribus neque. Veritatis at culpa libero excepturi illo?</p>
                        </div>
>>>>>>> 03165d993b181790caf4f4e4512bdccde1c5d266
                    </AccordionDetails>
                </Accordion>
                <Accordion className='bg-base-200 text-white'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="text-white" />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Researchers 1</Typography>
                    </AccordionSummary>
<<<<<<< HEAD
                    <AccordionDetails className='text-base-200 bg-gray-200'>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
=======
                    <AccordionDetails>
                        <h1 className='text-base font-bold'>Major</h1>
                        <div className='border-b-2'>
                            < div className='flex items-center justify-between' >
                                <Link to='/create_startups' className='font-semibold text-base no-underline cursor-pointer'>Name Of Strategy <small className='text-black'>01/07/2022</small></Link>
                                <h4><span>5</span> Tabs</h4>
                            </div >
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta facere quisquam harum voluptate voluptas sed consectetur! Eum aspernatur, odio maxime quisquam culpa aut odit possimus tempore ullam architecto cum, minus soluta facere saepe alias, placeat blanditiis consectetur doloribus neque. Veritatis at culpa libero excepturi illo?</p>
                        </div>
>>>>>>> 03165d993b181790caf4f4e4512bdccde1c5d266
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>
    );
};

export default EditStrategies;