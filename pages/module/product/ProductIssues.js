import React from 'react';

const ProductIssues = () => {

    const issueData = [
        {
            id: 'fhdg357564',
            name: 'Fix navbar dropdown',
            priority: 'High',
            deadline: '12/12/2023',
            assignedTo: 'Kevin D',
            process: '65',
            status: 'Processing'
        },
        {
            id: 'fhdg3575454',
            name: 'Margin and Padding',
            priority: 'Low',
            deadline: '12/12/2023',
            assignedTo: 'Jims R',
            process: '45',
            status: 'Processing'
        },
        {
            id: 'fhdg427564',
            name: 'Fix navbar dropdown',
            priority: 'high',
            deadline: '12/12/2023',
            assignedTo: 'Happy T',
            process: '90',
            status: 'Processing'
        },
        {
            id: 'fhdg3575fsa4',
            name: 'Fix navbar dropdown',
            priority: 'high',
            deadline: '12/12/2023',
            assignedTo: 'Kevin D',
            process: '23',
            status: 'Processing'
        },
        {
            id: 'fhsdfg7564',
            name: 'Fix navbar dropdown',
            priority: 'high',
            deadline: '12/12/2023',
            assignedTo: 'Ronen',
            process: '100',
            status: 'Completed'
        },
        {
            id: 'fhdg3tsa564',
            name: 'Fix navbar dropdown',
            priority: 'high',
            deadline: '12/12/2023',
            assignedTo: 'Kevin D',
            process: '65',
            status: 'Processing'
        },
    ]


    return (
        <div>
            <div className='flex items-center justify-around gap-2 my-6'>
                <div className='flex flex-col justify-center items-center gap-2 bg-gray-50 rounded-md p-2 w-52'>
                    <h1 className='text-base font-bold text-gray-600'>Total Issue Solved</h1>
                    <p className='text-2xl font-bold text-green-500'>6</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 bg-gray-50 rounded-md p-2 w-52'>
                    <h1 className='text-base font-bold text-gray-600'>Issue Unsolved</h1>
                    <p className='text-2xl font-bold text-red-500'>13</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 bg-gray-50 rounded-md p-2 w-52'>
                    <h1 className='text-base font-bold text-gray-600'>High priority</h1>
                    <p className='text-2xl font-bold text-orange-400'>6</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 bg-gray-50 rounded-md p-2 w-52'>
                    <h1 className='text-base font-bold text-gray-600'>Deadline</h1>
                    <p className='text-2xl font-bold'>3</p>
                </div>
            </div>

            <table className="w-full">
                <thead className='mb-2'>
                    <tr className='text-gray-600'>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Assigned to</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        issueData.map(issue =>
                            <tr
                                key={issue.id}
                                className=''
                            >
                                <td>
                                    <img className='w-20 p-4 mx-auto' src="https://www.enviroforensics.com/wp-content/uploads/2019/04/new-blue-problem-icon-300x259.png" alt="" />
                                </td>
                                <td>
                                    <h4 className='font-semibold text-center'>{issue.name}</h4>
                                </td>
                                <td>
                                    <p className='text-center'> <span className='text-gray-400 font-bold'> {issue.assignedTo}</span></p>
                                </td>
                                <td>
                                    <p className='text-center'>{issue.deadline}</p>
                                </td>
                                <td>
                                    <p className='text-center'>{issue.priority}</p>
                                </td>
                                <td>
                                    <p className='text-center'>{issue.status}</p>
                                </td>
                                <td className=''>
                                    <progress className="progress progress-success w-full" value={issue.process} max="100"></progress>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductIssues;