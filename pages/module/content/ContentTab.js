import React from 'react';
import Content from './Content'

const ContentTab = () => {
    const contentSubmitted = [
        {
            id: 124,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            id: 125,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
            images: [
                'https://media.sproutsocial.com/uploads/2019/08/2109_Instagram_Best_Practices_Artboard-1-copy.svg',
            ]
        },
        {
            id: 126,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.'
        },
        {
            id: 127,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
            images: [
                'https://media.sproutsocial.com/uploads/2019/08/2109_Instagram_Best_Practices_Artboard-1-copy.svg',
                'https://media.sproutsocial.com/uploads/2019/08/2109_Instagram_Best_Practices_Artboard-1-copy.svg',
            ]        
        },
    ]
    return (
        <div>
            <div className='bg-white my-6 rounded-md border'>
                {
                    contentSubmitted.map(content => <Content
                        key={content.id}
                        content={content}
                    ></Content>)
                }
            </div>
        </div>
    );
};

export default ContentTab;