import React from 'react';

const Connections = () => {
    const connectionsData = [
        {
            id: 'dsjhfafr451',
            name: 'DevKbin',
            startup_image: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
            type: 'Tech',
            status: 'Open to work',
            points: '42',
            role: 'Developer',
            color: 'gray',
            status: 'Pending'
        },
        {
            id: 'dsjhfafr451',
            name: 'DevKbin',
            startup_image: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
            type: 'Tech',
            status: 'Open to work',
            points: '42',
            role: 'Developer',
            color: 'gray',
            status: 'Pending'
        },
        {
            id: 'dsjhfafr451',
            name: 'DevKbin',
            startup_image: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
            type: 'Tech',
            status: 'Open to work',
            points: '42',
            role: 'Developer',
            color: 'green',
            status: 'Accepted'
        },
        {
            id: 'dsjhfafr451',
            name: 'DevKbin',
            startup_image: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
            type: 'Tech',
            status: 'Open to work',
            points: '42',
            role: 'Developer',
            color: 'gray',
            status: 'Pending'
        },
        {
            id: 'dsjhfafr451',
            name: 'DevKbin',
            startup_image: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
            type: 'Tech',
            status: 'Open to work',
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
                            <div className='flex'>
                                <div className='flex items-center justify-center'>
                                    <img className='w-14 rounded-full' src={connection?.startup_image} alt="" />
                                </div>
                                <div className='flex flex-col items-start gap-1 ml-2'>
                                    <h4 className='text-base font-medium'>{connection?.name}</h4>
                                    <h4 className='flex items-center'>{connection?.role}</h4>
                                    <h4 className='w-fit text-sm bg-gray-500 px-2 rounded-full'>Points{connection?.points}</h4>
                                </div>
                                <div className='flex flex-col items-start justify-between ml-4'>
                                    <h4>Status: Open to work</h4>
                                </div>
                            </div>

                            <div className='flex flex-col justify-between items-center gap-1'>
                                <button className='px-2 bg-gray-400 rounded-full capitalize ring-1 ring-red-400 border-0'>Pending</button>
                                <button className='px-2 bg-orange-400 rounded-full capitalize ring-1 ring-red-400 border-0'>Cancel</button>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default Connections;