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
            image: 'https://media.sproutsocial.com/uploads/2019/08/2109_Instagram_Best_Practices_Artboard-1-copy.svg',
            image2: 'https://media.sproutsocial.com/uploads/2019/08/2109_Instagram_Best_Practices_Artboard-1-copy.svg'
        },
        {
            id: 126,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
            image: 'https://media.sproutsocial.com/uploads/2019/08/2109_Instagram_Best_Practices_Artboard-1-copy.svg',
            image2: 'https://www.joomconnect.com/images/easyblog_articles/712/164385206_S-facebook-boost-social-media-101_edited.jpg'
        },
        {
            id: 127,
            title: 'Fine best CTO,s and content on it lorem25 lorem10 lorem 12452 find something',
            user: 'ashsenior',
            date: '11/11/22',
            image: 'https://www.wordstream.com/wp-content/uploads/2022/02/interactive-facebook-post-ideas-question-example-.jpg'
        },
    ]
    return (
        <div>
            <div className='bg-white my-6 rounded-md shadow-md'>
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