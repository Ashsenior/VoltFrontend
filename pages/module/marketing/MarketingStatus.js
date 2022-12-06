import React from 'react';
import Completed from './Completed';
import InProgress from './InProgress';
import Task from './Task';

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
                    <p className='h-12 text-base font-semibold shadow border-t-2 border-indigo-400 rounded-md bg-white flex items-center justify-center'>In Progress</p>
                    {
                        completed.map(data => <InProgress
                            key={data.id}
                            data={data}
                        ></InProgress>)
                    }
                </div>
                <div>
                    <p className='h-12 text-base font-semibold shadow border-t-2 border-green-500 rounded-md bg-white flex items-center justify-center'>Completed</p>
                    {
                        inProgress.map(data => <Completed
                            key={data.id}
                            data={data}
                        ></Completed>)
                    }
                </div>
                <div>
                    <p className='h-12 text-base font-semibold shadow border-t-2 border-red-400 rounded-md bg-white flex items-center justify-center'>Task</p>
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