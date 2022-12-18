import React from 'react';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const Meetings = () => {
    var items = [
        {
            name: "Meetups #1",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/sTPusxi30AHxiRHEFK9i5BCK-Y8BJ6Y_NCQNq6l9U6BuDv8kNRdIfsHzvmlA1XULDb3c=s256-rw'
        },
        {
            name: "Meetups #2",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/mwTU9-4NX-_QlATb6lILSinKI47wAtOM38GjPYRPQSsQOG2hVRY4h9OfEhDxpf8ADQ=s256-rw'
        },
        {
            name: "Meetups #3",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/hihXCV-0wxOXB5N7uBREaJeCVK0BDjNEBtKwNAncftZMflpEvasiKXn7vCKxu9qGpvk=s256-rw'
        },
        {
            name: "Meetups #4",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/48wwD4kfFSStoxwuwCIu6RdM2IeZmZKfb1ZeQkga0qEf1JKsiD-hK3Qf8qvxHL09lQ=s256-rw'
        },
        {
            name: "Meetups #5",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/fbSH19yFTkyBXGNCBMgxAxBJUMG3w6M1ZnZOuwRwmd0ynPR3MMFKMKTiD7Ggbr-cVurs=s256-rw'
        },
        {
            name: "Meetups #6",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/6KZjHJfNBoNdOFSWmrreiZq8lWgqg1YDtnH9FjdFoBnifWfZGA8Y7GQgUXFAdaUswU-v=s256-rw'
        },
        {
            name: "Meetups #7",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/yssuOUUgzoiZve-NfSvkykhAP9QbnFEL-NfLNHmTjnAcLCMnEpZsvwg1brdSuRZrqg=s256-rw'
        },
        {
            name: "Meetups #8",
            description: "Hello World!",
            type: 'Mumbai',
            time: '14-Dec, 10:10am',
            image: 'https://play-lh.googleusercontent.com/hSyebBlYwtE2aMjzSIHasUO9cQv9HgNAw9owy6ADO0szOKYO3rDk60r7jcyXu82Fbq1M=s256-rw'
        },
    ]
    return (
        <div className='mt-4'>
            <div className='flex items-center justify-between mb-2'>
                <h4 className='text-xl font-semibold text-gray-700 text-left mb-2'>Join Meetups</h4>
                <button className='btn btn-outline btn-sm rounded-md'>All Meetups</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    items.map(item =>
                        <div className='hover:bg-gray-100 rounded-lg p-2 mx-auto' key={item.name}>
                            <label htmlFor="purchaseModal">
                                {/* open modal</label> */}
                                <img className='rounded-3xl p-2' src={item.mainImage} alt="" />
                                <div className='flex flex-col items-start'>
                                    <img className='rounded-xl shadow-xl' src={item.image} alt="" />
                                    <div className='flex flex-col items-start'>
                                        <h1 className='text-base font-medium text-gray-800'>{item.name}</h1>
                                        <p>{item.type}</p>
                                        <p className='flex items-center'><AccessAlarmsIcon className='text-blue-500 text-base' />{item.time} </p>
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

export default Meetings;