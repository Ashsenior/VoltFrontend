import React from 'react';
import CompletedStrategy from './CompletedStrategy';
import InProgressStrategy from './InProgressStrategy';
import StrategyTask from './StrategyTask';


const StrategyStatus = () => {

    const inProgress = [

        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '12/10/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            marketing: '8',
            research: '11',
        },
        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '12/10/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            marketing: '5',
            research: '7',
        },
    ]

    const completed = [
        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '18/11/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            marketing: '7',
            research: '14',
        },
        {
            id: 'dhfsfh102',
            title: 'Campaign Title Something',
            head: 'ashsenior',
            deadline: '22/12/2022',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquam eligendi, corrupti ducimus asperiores beatae tempora nihil earum sequi repellendus, odit recusandae aut amet rerum?',
            marketing: '8',
            research: '11',
        },
    ]

    const tasks = [
        {
            id: 'dhfsfh102',
            title: 'Title strategy',
            head: 'ashsenior',
            link: 'something.com link'
        },
        {
            id: 'dhfsfh102',
            title: 'Title strategy',
            head: 'ashsenior',
            link: 'something.com link'
        },
        {
            id: 'dhfsfh102',
            title: 'Title strategy',
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
                        completed.map(data => <InProgressStrategy
                            key={data.id}
                            data={data}
                        ></InProgressStrategy>)
                    }
                </div>
                <div>
                    <p className='h-12 text-base font-semibold shadow border-t-2 border-green-500 rounded-md bg-white flex items-center justify-center'>Completed</p>
                    {
                        inProgress.map(data => <CompletedStrategy
                            key={data.id}
                            data={data}
                        ></CompletedStrategy>)
                    }
                </div>
                <div>
                    <p className='h-12 text-base font-semibold shadow border-t-2 border-red-400 rounded-md bg-white flex items-center justify-center'>Closed</p>
                    {
                        tasks.map(data => <StrategyTask
                            key={data.id}
                            data={data}
                        ></StrategyTask>)
                    }
                </div>
            </div>
        </div>
    );
};

export default StrategyStatus;