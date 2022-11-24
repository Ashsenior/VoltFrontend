import React from 'react';
import Content from './Content'


const Contents = () => {

    const contentData = [
        {
            id: 124,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
        },
        {
            id: 125,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
        },
        {
            id: 126,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
        },
        {
            id: 127,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
        },
    ]



    return (
        <div>
            <div className='bg-white my-6 rounded-md shadow-md'>
                {
                    contentData.map(content => <Content
                        key={content.id}
                        content={content}
                    ></Content>)
                }
            </div>
        </div>
    );
};

export default Contents;