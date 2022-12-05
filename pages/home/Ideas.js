import React from 'react';
import IdeaCard from './IdeaCard';

const Ideas = () => {
    const ideaData = [
        {
            id: '1256tehdgs',
            name: 'My Name',
            tag: 'kbin',
            content: 'I’m a retired lawyer with two grown sons. I missed so many opportunities to create memories for them',
            image: 'https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2019/10/05213947/PROFILE-Photography-112.jpg',
            support: '24',
            work: '17'
        },
        {
            id: '1256tehdgs',
            name: 'My Name',
            tag: 'kbin',
            content: 'I’m a retired lawyer with two grown sons. I missed so many opportunities to create memories for them',
            image: 'https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2019/10/05213947/PROFILE-Photography-112.jpg',
            support: '24',
            work: '17'
        },
        {
            id: '1256tehdgs',
            name: 'My Name',
            tag: 'kbin',
            content: 'I’m a retired lawyer with two grown sons. I missed so many opportunities to create memories for them',
            image: 'https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2019/10/05213947/PROFILE-Photography-112.jpg',
            support: '24',
            work: '17'
        },
        {
            id: '1256tehdgs',
            name: 'My Name',
            tag: 'kbin',
            content: 'I’m a retired lawyer with two grown sons. I missed so many opportunities to create memories for them',
            image: 'https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2019/10/05213947/PROFILE-Photography-112.jpg',
            support: '24',
            work: '17'
        },
    ]
    return (
        <div>
            <div>
                {
                    ideaData.map(idea => <IdeaCard
                        key={idea.id}
                        idea={idea}
                    ></IdeaCard>)
                }
            </div>

        </div>
    );
};

export default Ideas;