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
                            className='flex justify-between w-full bg-white text-gray-500 p-2 rounded-lg hover:bg-gray-100'
                            key={connection.id}>
                            <div className='flex'>
                                <img className='w-14 h-14 rounded-full' src={connection?.startup_image} alt="" />
                                <div className='flex flex-wrap items-start gap-1 mx-2'>
                                    <h4 className='text-base font-medium'>{connection?.name}</h4>
                                    <h4 className='flex text-sm text-gray-500 '>you can add them to your existing app without prompting users to upgrade.</h4>

                                    <button className='px-2 py-1 bg-blue-500 text-white font-semibold rounded-lg uppercase button mt-2'>Accept</button>
                                    <button className='px-2 py-1 bg-white text-gray-500 font-semibold rounded-lg uppercase button mt-2'>iGNORE</button>
                                </div>
                                <div className='bg-gray-100 rounded-lg flex flex-col items-start p-2'>
                                    <h4><span className='text-indigo-600 font-semibold' >Message </span>Because user-level permissions are granted on an individual user basis, you can add them to your existing app without prompting users to upgrade.</h4>
                                </div>
                            </div>
                        </div>
                        )
                }
            </div>

        </div>
    );
};

export default Connections;