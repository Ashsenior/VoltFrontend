import React from 'react';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import TagIcon from '@mui/icons-material/Tag';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const ProductIssues = ({issues}) => {
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
        <div className='bg-gray-900 text-gray-300 rounded-lg shadow p-2 mt-2'>
            <div className='flex items-center justify-around gap-2 my-6'>
                <div className='flex flex-col justify-center items-center gap-2 bg-gray-800 rounded-md p-2 w-52'>
                    <h1 className='text-base font-bold text-gray-200'>Total Issue Solved</h1>
                    <p className='text-2xl font-bold text-green-500'>{issues?.closed}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 bg-gray-800 rounded-md p-2 w-52'>
                    <h1 className='text-base font-bold text-gray-200'>Issue Unsolved</h1>
                    <p className='text-2xl font-bold text-red-500'>{issues?.opened}</p>
                </div>
            </div>

            <table className="w-full">
                <thead className='mb-2'>
                    <tr className='text-gray-400 text-lg bg-black'>
                        <th className='py-4'></th>
                        <th className='py-4'>Issue No.</th>
                        <th>Issue Title</th>
                        <th>Assigned to</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        issues?.issues?.map(issue =>
                            <tr
                                key={issue.id}
                                className='border-b border-gray-600'
                            >
                                <td>
                                    {
                                        issue.avatar_url?
                                        <img className='w-20 p-4 rounded-full mx-auto' src={issue.avatar_url} alt="" />
                                        :
                                        <img className='w-20 p-4 rounded-full mx-auto' src="https://tse4.mm.bing.net/th?id=OIP.OesLvyzDO6AvU_hYUAT4IAHaHa&pid=Api&P=0" alt="" />
                                    }
                                </td>
                                <td>
                                    <span class="text-center bg-gray-100 gap-1 text-yellow-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                                        <TagIcon />
                                        {issue?.number}
                                    </span>
                                </td>
                                <td>
                                    <h4 className='font-semibold text-center'>{issue?.title}</h4>
                                </td>
                                <td>
                                    <span class="text-center bg-gray-100 gap-1 text-yellow-200 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                                        <AssignmentIndOutlinedIcon />
                                        @{issue.assignee?issue.assignee:"None"}
                                    </span>
                                </td>
                                <td>
                                    {issue.closed?
                                    <span class="text-center bg-gray-100 gap-1 text-red-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                                        <FiberManualRecordIcon />
                                        Closed
                                    </span>
                                    :
                                    <span class="text-center bg-gray-100 gap-1 text-green-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-800">
                                        <FiberManualRecordIcon />
                                        Open
                                    </span>}
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