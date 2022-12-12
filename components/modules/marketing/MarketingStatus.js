import React from 'react';
import Completed from './Completed';
import InProgress from './InProgress';
import Task from './Task';

import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const MarketingStatus = () => {

    const inProgress = [

        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '12/10/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            youtube: '15',
            linkedIn: '18',
            instagram: '20',
        },
        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '12/10/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            youtube: '15',
            linkedIn: '18',
            instagram: '20',
        },
    ]

    const completed = [
        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '18/11/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            youtube: '12',
            linkedIn: '11',
            instagram: '26',
        },
        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '22/12/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            youtube: '17',
            linkedIn: '10',
            instagram: '13',
        },
    ]

    const tasks = [
        {
            id: 'dhfsfh102',
            title: 'Title of the task',
            head: 'ashsenior',
            link: 'something.com link'
        },
        {
            id: 'dhfsfh102',
            title: 'Title of the task',
            head: 'ashsenior',
            link: 'something.com link'
        },
        {
            id: 'dhfsfh102',
            title: 'Title of the task',
            head: 'ashsenior',
            link: 'something.com link'
        },
    ]


    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 mt-10'>
                <div>
                <p className=' text-base p-4 border border-blue-500 gap-2 bg-blue-50 rounded-t-xl font-semibold flex items-center text-blue-500'>
                        <DonutLargeOutlinedIcon />
                        IN PROGRESS  2
                    </p>
                    {
                        completed.map(data => <InProgress
                            key={data.id}
                            data={data}
                        ></InProgress>)
                    }
                </div>
                <div>
                <p className=' text-base p-4 border border-green-500 bg-green-50 gap-2 items-center rounded-t-xl font-semibold flex p-1 text-green-500'>
                        <AssignmentTurnedInOutlinedIcon />
                        COMPLETED  2</p>
                    {
                        inProgress.map(data => <Completed
                            key={data.id}
                            data={data}
                        ></Completed>)
                    }
                </div>
                <div>
                <p className=' text-base p-4 border border-indigo-500 items-center gap-2 bg-indigo-50 rounded-t-xl font-semibold flex p-1 text-indigo-500'>
                        <VerifiedOutlinedIcon />
                        TASK  3</p>
                    {
                        tasks.map(data => <Task
                            key={data.id}
                            data={data}
                        ></Task>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MarketingStatus;