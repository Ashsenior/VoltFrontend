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
            id: 'fhdg357564',
            name: 'Margin and Padding',
            priority: 'Low',
            deadline: '12/12/2023',
            assignedTo: 'Kevin D',
            process: '65',
            status: 'Processing'
        },
        {
            id: 'fhdg357564',
            name: 'Fix navbar dropdown',
            priority: 'high',
            deadline: '12/12/2023',
            assignedTo: 'Kevin D',
            process: '65',
            status: 'Processing'
        },
        {
            id: 'fhdg357564',
            name: 'Fix navbar dropdown',
            priority: 'high',
            deadline: '12/12/2023',
            assignedTo: 'Kevin D',
            process: '65',
            status: 'Processing'
        },
        {
            id: 'fhdg357564',
            name: 'Fix navbar dropdown',
            priority: 'high',
            deadline: '12/12/2023',
            assignedTo: 'Kevin D',
            process: '65',
            status: 'Processing'
        },
        {
            id: 'fhdg357564',
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
            <table className="w-full">
                <thead className='mb-2'>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
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
                                    <div className='flex flex-col mx-auto'>
                                        <h4 className='font-semibold'>{issue.name}</h4>
                                        <p>assigned to <span className='text-green-400'> {issue.assignedTo}</span></p>
                                    </div>
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
                                <td className='mx-auto'>
                                    <progress className="progress progress-success w-24 flex justify-end" value={issue.process} max="100"></progress>
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