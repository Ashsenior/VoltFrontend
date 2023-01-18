import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { BiAddToQueue } from 'react-icons/bi';

const TeamMembers = () => {

    const teamData = [
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            role: 'React Developer',
            commits: '142',
            task: '75',
            progress: '62',
            skills: 'Social Media'
        },
    ]

    return (
        <div className='bg-gray-700 rounded-lg mb-10 h-full shadow'>
            <h1 className='text-base font-semibold ml-6 pt-6'>Working Team</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
                {
                    teamData.slice(0, 8).map(member =>
                        <div
                            key={member.id}
                        >
                            <div className="bg-gray-900 p-2 rounded-md">
                                <img className='w-14 rounded-full mx-auto' src={member.image} alt="" />
                                <div className="items-center text-center p-2 border-b border-gray-500 mx-2">
                                    <h2 className="text-base">{member.name}</h2>
                                    <p className='text-sm font-semibold'>{member.role}</p>
                                </div>

                                <div className='flex justify-center'>
                                    <div className="tooltip tooltip-info" data-tip="Profile">
                                        <button
                                            // onClick={() => Router.push('/module/product/ProductDetails')}
                                            className="btn btn-ghost hover:bg-white"><CgProfile className='text-xl text-blue-500'></CgProfile></button>
                                    </div>
                                    <div className="tooltip tooltip-success" data-tip="Contribution">
                                        <button className="btn btn-ghost hover:bg-white"><BiAddToQueue className='text-xl text-green-400'></BiAddToQueue></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TeamMembers;