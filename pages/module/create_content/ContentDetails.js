import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';
import Footer from "src/components/Footer";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const ContentDetails = () => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            cols: 2,
            rows: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            cols: 2,
        },
    ];
    return (
        <Container maxWidth='lg'>
            <div className='mt-6'>
                <div className='flex justify-between'>
                    <div className="flex flex-col items-start justify-start">
                        <h1 className='text-xl'> <span className='bg-gray-600 rounded-md text-gray-50 p-1 px-2'>Task</span> Find best CTOs and content on it.</h1>
                        <div className="ml-2 flex-shrink-0 flex">
                            <p >
                                Assigned to  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@ashsenior</span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-between'>
                        <span className='bg-gray-600 rounded-md text-gray-50 p-1 px-2'>Brief</span>
                    </div>
                </div>
                <ImageList
                    className='w-full p-10'
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
                </ImageList>
                <div className='m-4'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis reiciendis doloremque excepturi maiores minus error natus itaque quam quia nihil quod commodi, dolorum numquam alias omnis est vitae? Ad, quam? Qui nihil a dolorem? Tenetur sed tempora quidem magni id ducimus nemo sint rerum, molestiae vel! Aliquam deserunt alias esse? Cumque, vitae? Iure illum corporis ad, praesentium sint rerum iste unde! Itaque, iste. Quae aliquid harum aliquam esse accusantium est in veritatis fugit dignissimos amet, nulla reprehenderit sequi, qui voluptatem!</p>
                </div>
            </div>
            <Footer />
        </Container>

    );
};

ContentDetails.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ContentDetails;