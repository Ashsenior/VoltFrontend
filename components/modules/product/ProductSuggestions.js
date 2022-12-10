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
                        <img className='w-20 h-20 rounded-lg' src={product.img} alt="" />
                        <div className='flex justify-between w-full'>


                            <div className='p-2 flex flex-col justify-between'>
                                <h4 className='text-base font-semibold'>{product.title}</h4>
                                <p>{product.content}</p>
                                <a className='text-blue-600' href="">{product.link}</a>
                            </div>
                        </div>

                    </div>

                </div>)
            }

        </div>
    );
};

export default ProductSuggestions;