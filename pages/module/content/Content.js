import React from 'react';
import Router from 'next/router';
import {Link, Image} from "@nextui-org/react";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';


const Content = ({ content }) => {
    return (
        <div className='border-b p-4'>
            <div className='flex justify-between'>
                <div className="flex flex-col items-start justify-start">
                    <p
                        onClick={() => Router.push('/create_content')}
                        className="text-base font-medium text-black cursor-pointer"><AssignmentOutlinedIcon className='text-gray-500' /> {content.title}</p>
                    <div className=" mt-2 flex-shrink-0 flex">
                        <p>
                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@{content.user}</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col ml-1 font-bold items-end justify-between'>
                <p><small className='text-gray-500' >deadline</small> {content.date}</p>
                    <span
                        onClick={() => Router.push('/module/create_content/ContentDetails')}
                        className='bg-gray-600 rounded-md text-gray-50 p-1 px-2'>Brief📄</span>
                </div>
            </div>
            <div>
            {content.description?
                (<p className='bg-gray-100 mt-2 p-2 rounded-md'>{content.description}</p>)
                :
                null
            }
            </div>
            {content.images ?
                (<div className="flex flex-wrap flex-row mt-4">
                    {
                        content.images.map(img => 
                        (<Image style={{maxWidth:"400px", margin:"5px"}} className="flex rounded-lg" src={img} />)
                        )
                    }
                </div>)
                :
                null
            }

        </div>
    );
};

export default Content;