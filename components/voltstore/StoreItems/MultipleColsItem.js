import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const MultipleColsItem = () => {
    var items = [
        {
            name: "Item #1",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/sTPusxi30AHxiRHEFK9i5BCK-Y8BJ6Y_NCQNq6l9U6BuDv8kNRdIfsHzvmlA1XULDb3c=s256-rw'
        },
        {
            name: "Item #2",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/mwTU9-4NX-_QlATb6lILSinKI47wAtOM38GjPYRPQSsQOG2hVRY4h9OfEhDxpf8ADQ=s256-rw'
        },
        {
            name: "Item #3",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/hihXCV-0wxOXB5N7uBREaJeCVK0BDjNEBtKwNAncftZMflpEvasiKXn7vCKxu9qGpvk=s256-rw'
        },
        {
            name: "Item #4",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/MaRCSacmqLlbSST5m_sJUb_tE9pTresHYgwpd4gInpcj_NVGbjLCnTe96Yx5zz893bA=s256-rw'
        },
        {
            name: "Item #5",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/fbSH19yFTkyBXGNCBMgxAxBJUMG3w6M1ZnZOuwRwmd0ynPR3MMFKMKTiD7Ggbr-cVurs=s256-rw'
        },
        {
            name: "Item #6",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/6KZjHJfNBoNdOFSWmrreiZq8lWgqg1YDtnH9FjdFoBnifWfZGA8Y7GQgUXFAdaUswU-v=s256-rw'
        },
        {
            name: "Item #7",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/yssuOUUgzoiZve-NfSvkykhAP9QbnFEL-NfLNHmTjnAcLCMnEpZsvwg1brdSuRZrqg=s256-rw'
        },
        {
            name: "Item #8",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/hSyebBlYwtE2aMjzSIHasUO9cQv9HgNAw9owy6ADO0szOKYO3rDk60r7jcyXu82Fbq1M=s256-rw'
        },
        {
            name: "Item #8",
            description: "Hello World!",
            type: 'Product',
            rating: '4.1',
            image: 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=s256-rw'
        },
    ]
    return (
        <div className='mt-4'>
            <div className='flex items-center justify-between mb-2'>
                <h4 className='text-xl font-semibold text-gray-700 text-left mb-2'>Recommended for you</h4>
                <button className='btn btn-outline btn-sm rounded-md'>All Items</button>
            </div>

            <div className='grid grid-cols-3 lg:grid-cols-9 gap-2'>
                {
                    items.map(item =>
                        <div className=' hover:bg-gray-100 rounded-lg p-2' key={item.name}>
                            <label htmlFor="purchaseModal">
                                <div className='flex flex-col items-start'>
                                    <img className='rounded-xl shadow-xl' src={item.image} alt="" />
                                    <div className='flex flex-col items-start'>
                                        <h1 className='text-base font-medium text-gray-800'>{item.name}</h1>
                                        <p className='flex items-center'>{item.rating} <StarIcon className='text-sm' /></p>
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

export default MultipleColsItem;