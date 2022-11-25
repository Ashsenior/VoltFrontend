import React from 'react';
import Router from 'next/router';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}


const Content = ({ content }) => {
    return (
        <div className='border-b-2 p-2'>
            <div className='flex justify-between'>
                <div className="flex flex-col items-start justify-start">
                    <p
                        onClick={() => Router.push('/create_content')}
                        className="text-base font-medium text-black truncate cursor-pointer"> {content.title.slice(0, 60)}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                        <p >
                            Assigned to  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@{content.user}</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <p>{content.date}</p>
                    <span
                        onClick={() => Router.push('/module/create_content/ContentDetails')}
                        className='bg-gray-600 rounded-md text-gray-50 p-1 px-2'>Brief</span>
                </div>
            </div>
            <div>
                <p className='p-2'>{content?.description}</p>
            </div>
            {
                content.image && <div className="flex flex-wrap">
                    {/* <ImageList
                        sx={{ width: 500, height: 450 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={121}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList> */}
                </div>
            }

        </div>
    );
};

export default Content;