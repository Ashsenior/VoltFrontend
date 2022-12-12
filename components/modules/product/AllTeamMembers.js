import React from 'react';


const AllTeamMembers = () => {
    const teamData = [
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            taskAssigned: '12',
            role: 'React Developer',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '24',
            progress: '62',
            skills: 'Problem Solve'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Dolphin N',
            taskAssigned: '12',
            role: 'Java Developer',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '35',
            progress: '62',
            skills: 'Something'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Robin D',
            taskAssigned: '12',
            role: 'Marketing',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Happy F',
            taskAssigned: '12',
            role: 'Promote',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '75',
            progress: '62',
            skills: 'Points'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Rock T',
            taskAssigned: '12',
            role: 'Sells',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '75',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Haoda P',
            taskAssigned: '12',
            role: 'React Developer',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '42',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            taskAssigned: '12',
            role: 'React Developer',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '50',
            progress: '62',
            skills: 'Social Media'
        },
        {
            id: 1245,
            image: 'https://fkdolnidvoriste.cz/wp-content/uploads/2021/08/Profile.jpg',
            name: 'Kevin H',
            taskAssigned: '12',
            role: 'React Developer',
            commits: '142',
            issueAssigned: '15',
            issueSolved: '10',
            taskCompleted: '4',
            performance: '70',
            progress: '62',
            skills: 'Social Media'
        },
    ]
    return (
        <div className='bg-white rounded-md shadow-md p-2 mt-4'>
            {/* Table Starts */}
            <div className="overflow-x-auto w-full mt-2">
                <h1 className='text-base font-semibold mb-2'>Team Performance</h1>
                <table className="table w-full">
                    <thead >
                        <tr className='mb-2'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Strength</th>
                            <th>Commits</th>
                            <th>Issue Solved </th>
                            <th>Task Completed</th>
                            <th>Efficiency</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            teamData.map(team => <tr
                                key={team.id}
                            >
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-12 h-12">
                                                <img src={team.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{team.name}</div>
                                            <div className="text-sm opacity-50">{team.role}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>{team.skills}</div>
                                </td>
                                <td>
                                    <div>{team.commits}</div>
                                </td>
                                <td>
                                    <div>
                                        <p>{team.issueSolved}/{team.issueAssigned}</p>
                                        <progress className="progress progress-success w-32" value={team.issueSolved} max={team.issueAssigned}></progress>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p>{team.taskCompleted}/{team.taskAssigned}</p>
                                        <progress className="progress progress-success w-32" value={team.taskCompleted} max={team.taskAssigned}></progress>
                                    </div>

                                </td>
                                <td>
                                    <div>
                                        <p>{team.performance}/100</p>
                                        <progress className="progress progress-success w-32" value={team.performance} max='100'></progress>
                                    </div>
                                </td>
                            </tr>
                            )
                        }

                    </tbody >

                </table>
            </div>
        </div>
    );
};

export default AllTeamMembers;