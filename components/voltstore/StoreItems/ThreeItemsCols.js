import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const ThreeItemsCols = () => {
    var items = [
        {
            name: "Item #1",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            mainImage: 'https://img.freepik.com/free-psd/digital-marketing-facebook-cover-page-template_237398-169.jpg?w=2000',
            image: 'https://play-lh.googleusercontent.com/c240yqpF4BzB8XE4UF0yY4UTOzp9zVslIWHxsdEzVSg3v0BYKGcrTH5ZIcxED1z94Dcb=s64-rw'
        },
        {
            name: "Item #2",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            mainImage: 'https://img.freepik.com/free-psd/digital-marketing-facebook-cover-page-template_237398-169.jpg?w=2000',
            image: 'https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=s64-rw'
        },
        {
            name: "Item #3",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            mainImage: 'https://img.freepik.com/free-psd/digital-marketing-facebook-cover-page-template_237398-169.jpg?w=2000',
            image: 'https://play-lh.googleusercontent.com/KzEk8vKXTBztnDAU1XCwME43i70BTtwTH-xYhlFWOhvkBMXZh0cno_PR9XAU-P2xQgQ=s64-rw'
        },
    ]

    return (
        <div className='mt-4'>
            <div className='flex items-center justify-between mb-2'>
                <h4 className='text-xl font-semibold text-gray-700 text-left mb-2'>Top Rated Product</h4>
                <button className='btn btn-outline btn-sm rounded-md'>All Product</button>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {
                    items.map(item =>
                        <div className=' hover:bg-gray-100 rounded-lg p-2' key={item.name}>
                            <label htmlFor="purchaseModal">
                                <img className='rounded-3xl p-2' src={item.mainImage} alt="" />
                                <div className='flex items-center'>
                                    <img className='rounded-xl shadow-xl m-2' src={item.image} alt="" />
                                    <div className='flex flex-col items-start ml-2'>
                                        <h1 className='text-base font-medium text-gray-800'>{item.name}</h1>

                                        <p className='flex items-center'>{item.rating} <StarIcon className='text-sm' /></p>
                                        <p>Price: <span className='bg-indigo-50 p-1 py-0.5 rounded-full text-indigo-600'>12 Volt</span></p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ThreeItemsCols;