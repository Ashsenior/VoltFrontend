import React from 'react';

const ConnectionRequest = () => {
    const connectionsData = [
        {
            id: 'dsjhfafr451',
            startup_name: '101 Tech',
            startup_image: 'https://www.pngfind.com/pngs/m/145-1453310_bt-logo-transparent-background-british-telecom-icon-hd.png',
            type: 'Tech',
            members: '12',
            points: '42',
            role: 'Developer',
            color: 'gray',
            status: 'Pending'
        },
        {
            id: 'dsjhfafr451',
            startup_name: '101 Tech',
            startup_image: 'https://i.pinimg.com/originals/b0/02/d5/b002d5447123a6cde864d30b52a4cdae.jpg',
            type: 'Tech',
            members: '12',
            points: '42',
            role: 'Marketing',
            color: 'gray',
            status: 'Pending'
        },
        {
            id: 'dsjhfafr451',
            startup_name: '101 Tech',
            startup_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhB1S9V0ABB8aLyXZgeJ4F3x6lRQxMaqdSRn_cph0SlKB6qPtARLc4KCGMbsuGJ_0EXCg&usqp=CAU',
            type: 'Tech',
            members: '12',
            points: '42',
            role: 'Product Manager',
            color: 'green',
            status: 'Accepted'
        },
        {
            id: 'dsjhfafr451',
            startup_name: '101 Tech',
            startup_image: 'https://www.kindpng.com/picc/m/70-707557_c-logo-png-hd-transparent-png.png',
            type: 'Tech',
            members: '12',
            points: '42',
            role: 'UI designer',
            color: 'gray',
            status: 'Pending'
        },
        {
            id: 'dsjhfafr451',
            startup_name: '101 Tech',
            startup_image: 'https://www.kindpng.com/picc/m/70-707557_c-logo-png-hd-transparent-png.png',
            type: 'Tech',
            members: '12',
            points: '42',
            role: 'Developer',
            color: 'green',
            status: 'Accepted'
        },
    ]
    return (
        <div>
            <div className='flex flex-col gap-4'>
                {
                    connectionsData.map(connection =>
                        <div
                            className='flex justify-between w-full bg-gray-700 text-gray-50 p-2 rounded-lg hover:ring-2 ring-gray-400'
                            key={connection.id}>
                            <div className='flex items-center'>
                                <div className='flex items-center justify-center'>
                                    <img className='w-14 rounded-full' src={connection?.startup_image} alt="" />
                                </div>
                                <div className='flex flex-col items-start gap-1 ml-2'>
                                    <h4 className='text-base font-medium'>{connection?.startup_name}</h4>
                                    <h4 className='w-fit text-sm bg-gray-500 px-2 rounded-full'>Points{connection?.points}</h4>
                                    <h6 className='text-sm font-sans'><span className='text-indigo-400 font-bold'>{connection?.members}</span> Employee working </h6>
                                </div>
                                <div className='flex flex-col items-start justify-between ml-4 h-full'>
                                    <h4 className=''>Requested to join team as {connection?.role}</h4>
                                    <p>Idea: Lorem ipsum, dolor sit amet consectetur adipisicing ulpa quidem in aliaselit. Voluptatem, voluptas eius </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-1'>
                                <button className={`px-2 bg-green-500 rounded-full capitalize ring-1 ring-indigo-500 border-0`}>Accept</button>
                                <button className='px-2 bg-orange-400 rounded-full capitalize ring-1 ring-red-400 border-0'>Cancel</button>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default ConnectionRequest;