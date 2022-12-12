import React from 'react';
import TeamCard from './TeamCard';

const AllTeamCards = () => {
    const teamData = [
        {
            id: 1245,
            status: 'Open to work',
            color: 'green',
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
            status: 'Working',
            color: 'orange',
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
            status: 'Working',
            color: 'orange',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
            status: 'Open to work',
            color: 'green',
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
        <div className='bg-white rounded-lg mb-10 h-full shadow'>
            <h1 className='text-base font-semibold ml-6 pt-6'>All members</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
                {
                    teamData.map(member =>
                        <TeamCard
                            key={member.id}
                            member={member}
                        ></TeamCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllTeamCards;