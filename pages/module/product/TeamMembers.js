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
    ]



    return (
        <div className='mt-6'>
            <div className='flex justify-between'>
                <h1 className='text-base font-bold'>Team Members </h1>
                <button className='btn btn-sm'>All Members</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                {
                    teamData.slice(0, 4).map(member =>
                        <div
                            key={member.id}
                        >
                            <div className="card card-compact w-full bg-base-100 shadow-sm rounded-md hover:shadow-md">
                                <figure className="px-5 pt-5">
                                    <img src={member.image} alt="Shoes" className="w-32 rounded-xl" />
                                </figure>
                                <div className="items-center text-center p-2 border-b mx-2">
                                    <h2 className="text-xl">{member.name}</h2>
                                    <p className='font-semibold'>{member.role}</p>
                                </div>

                                <div className='mx-auto'>
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