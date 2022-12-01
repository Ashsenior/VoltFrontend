import React from 'react';
import Router from 'next/router';

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
                    className='mb-2 pb-1 border-b border-gray-200 flex justify-start gap-2'
                >
                    <img className='w-24 h-24 rounded-lg' src="https://www.ubermetrics-technologies.com/wp-content/uploads/social-CEO-03.png" alt="" />
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col h-full justify-between'>
                            <h1
                                onClick={() => Router.push('/product_details')}
                                className='text-base cursor-pointer'>{product.title}</h1>
                            <p>{product.content}</p>
                            <p className='cursor-pointer text-indigo-400'>{product.link}</p>
                        </div>
                        <div className='flex flex-col justify-around ml-2 border-l border-gray-200 pl-2'>
                            <p className='btn btn-xs bg-indigo-300 hover:bg-indigo-500 rounded-sm border-0 text-black hover:text-white'>46 Liked</p>
                            <p
                                onClick={() => Router.push('/product_details')}
                                className='btn btn-xs bg-indigo-300 hover:bg-indigo-500 rounded-sm border-0 text-black hover:text-white'>Details</p>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default ProductSuggestions;