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
            <small>lead <span className='text-blue-500'>@username</span></small>
            <h4>Start Date: <span>11/12/2022</span></h4>
            <div className='mt-6'>
                <h4 className='text-base font-semibold'>Customers</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, mollitia est nihil laudantium explicabo itaque omnis impedit fugiat officiis, voluptas, aut saepe voluptates odio praesentium recusandae velit? Debitis dignissimos nesciunt eos qui! Blanditiis nisi id esse omnis, consectetur modi nulla sit sunt! Reiciendis illo explicabo laboriosam voluptates consequuntur vel quas corporis, at quis quos? Laboriosam cum ipsum aspernatur similique, asperiores autem quam vero. Commodi magnam, ex modi fuga doloribus a vel quas tenetur, quam facilis laborum voluptatum nulla! Culpa itaque quas fugit, repellendus sit excepturi deserunt enim alias, ratione maiores voluptatum fuga quaerat tenetur. Hic optio architecto dolor doloribus recusandae.</p>
            </div>
            <div className='mt-6'>
                <h4 className='text-base font-semibold'>Strategy Description</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, optio unde! Inventore repudiandae magni sed porro maiores omnis possimus eos voluptatem aliquam aperiam ex quos velit fugiat voluptatum, vel suscipit distinctio est perspiciatis quam earum nisi facere! Saepe fuga accusantium velit voluptate ea necessitatibus repellat reiciendis qui tempora ad. Exercitationem omnis mollitia consequuntur quaerat non! Quis soluta ex at numquam suscipit illum rerum, ipsa, earum laboriosam nobis velit quia placeat reprehenderit, officiis quo ut porro distinctio optio accusantium praesentium? Dolor, molestias corrupti, eos laudantium assumenda ullam voluptates rerum dignissimos quam, officia dolorem? Placeat nesciunt, deserunt impedit est totam repellat ut soluta nam at vel nemo molestiae sunt excepturi incidunt delectus minima doloribus, asperiores aperiam culpa? Aut dignissimos odit magni vel. Eveniet eum tempore officia natus? Error voluptatibus, recusandae ut rem odit accusantium perspiciatis provident doloremque quae veniam architecto repudiandae sequi eum consequatur nesciunt possimus. Tenetur perspiciatis deleniti ab nesciunt fugit.</p>
            </div>
            <div className='mt-6'>
                <h4 className='text-base font-semibold'>Success Metrics</h4>
                <div className='flex gap-4'>
                    <div className=' p-1 rounded-lg flex items-center justify-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis id, ut nulla similique dolor voluptatum nobis cum alias rem?</p>
                    </div>
                    <div className=' p-1 rounded-lg flex items-center justify-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis id, ut nulla similique dolor voluptatum nobis cum alias rem?</p>
                    </div>
                    <div className=' p-1 rounded-lg flex items-center justify-center'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis id, ut nulla similique dolor voluptatum nobis cum alias rem?</p>
                    </div>

                </div>
            </div>
            {/* Accordion for Marketing Sales Researchers */}

            <div className='mt-6'>
                <Accordion className='bg-base-200'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Marketing 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='bg-base-200'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Sales 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='bg-base-200'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Researchers 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>

        </div>
    );
};

export default EditStrategies;