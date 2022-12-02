import React from 'react';
import Router from 'next/router';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

const ProductSuggestions = () => {

    const products = [
        {
            id: 124,
            content: 'Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.',
            img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
            title: 'Title of the post',
            date: '12/4/20',
            link: 'https://bloggingfordevs.com/react-blogs/something.com',
            reacts: '41'
        },
        {
            id: 124,
            content: 'Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.',
            img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
            title: 'Title of the post',
            date: '12/4/20',
            link: 'https://bloggingfordevs.com/react-blogs/something.com',
            reacts: '41'
        },
        {
            id: 124,
            content: 'Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.',
            img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
            title: 'Title of the post',
            date: '12/4/20',
            link: 'https://bloggingfordevs.com/react-blogs/something.com',
            reacts: '41'
        },
        {
            id: 124,
            content: 'Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.',
            img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
            title: 'Title of the post',
            date: '12/4/20',
            link: 'https://bloggingfordevs.com/react-blogs/something.com',
            reacts: '41'
        },
        {
            id: 124,
            content: 'Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.',
            img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
            title: 'Title of the post',
            date: '12/4/20',
            link: 'https://bloggingfordevs.com/react-blogs/something.com',
            reacts: '41'
        },
        {
            id: 124,
            content: 'Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.',
            img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
            title: 'Title of the post',
            date: '12/4/20',
            link: 'https://bloggingfordevs.com/react-blogs/something.com',
            reacts: '41'
        },
        {
            id: 124,
            content: 'Some examples of content include blogs, emailers, newsletters, social media posts, case studies, and more.',
            img: "https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png",
            title: 'Title of the post',
            date: '12/4/20',
            link: 'https://bloggingfordevs.com/react-blogs/something.com',
            reacts: '41'
        },
    ]

    return (
        <div className=''>
            <h4 className='text-base font-semibold m-2'>Product Suggestions</h4>

            {
                products.slice(0, 4).map(product => <div
                    key={product.id}
                    className='bg-gray-50 p-2 m-2 rounded-lg'
                >

                    <div className='flex w-full'>
                        <img className='w-32 rounded-lg' src={product.img} alt="" />
                        <div className='flex justify-between w-full'>


                            <div className='p-2 flex flex-col justify-between'>
                                <h4 className='text-base font-semibold'>{product.title}</h4>
                                <p className='flex items-center gap-1'><BsFillCalendarCheckFill className='text-indigo-500'></BsFillCalendarCheckFill> {product.date}</p>
                                <p>{product.content}</p>
                                <a className='text-blue-600' href="">{product.link}</a>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-semibold'>Visited By</h1>
                                    <div className="flex -space-x-2 overflow-hidden">
                                        <img
                                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <img
                                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>)
            }

        </div>
    );
};

export default ProductSuggestions;