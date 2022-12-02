import React from 'react';
import FeaturesCard from './FeaturesCard';

const ProductFeatures = () => {
    const featuresData = [
        {
            id: 'hello545',
            name: 'Feature Name',
            startDate: '11/11/2020',
            deadline: '15 days',
            priority: 'high',
            priorityColor: 'indigo',
            image: 'https://www.pngkey.com/png/full/423-4235202_some-of-the-salient-features-offered-by-this.png'
        },
        {
            id: 'hello545',
            name: 'Feature Name',
            startDate: '11/11/2020',
            deadline: '15 days',
            priority: 'medium',
            priorityColor: 'gray',
            image: 'https://www.pngkey.com/png/full/423-4235202_some-of-the-salient-features-offered-by-this.png'
        },
        {
            id: 'hello545',
            name: 'Feature Name',
            startDate: '11/11/2020',
            deadline: '15 days',
            priority: 'high',
            priorityColor: 'indigo',
            image: 'https://www.pngkey.com/png/full/423-4235202_some-of-the-salient-features-offered-by-this.png'
        },
        {
            id: 'hello545',
            name: 'Feature Name',
            startDate: '11/11/2020',
            deadline: '20 days',
            priority: 'low',
            priorityColor: 'green',
            image: 'https://www.pngkey.com/png/full/423-4235202_some-of-the-salient-features-offered-by-this.png'
        },
        {
            id: 'hello545',
            name: 'Feature Name',
            startDate: '11/11/2020',
            deadline: '40 days',
            priority: 'low',
            priorityColor: 'green',
            image: 'https://www.pngkey.com/png/full/423-4235202_some-of-the-salient-features-offered-by-this.png'
        },
        {
            id: 'hello545',
            name: 'Feature Name',
            startDate: '11/11/2020',
            deadline: '40 days',
            priority: 'low',
            priorityColor: 'green',
            image: 'https://www.pngkey.com/png/full/423-4235202_some-of-the-salient-features-offered-by-this.png'
        },
    ]
    return (
        <div className='bg-white rounded-lg mt-6 p-1 md:p-6 w-full'>
            <h1 className='text-base font-semibold mb-2'>Product Features</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    featuresData.map(feature => <FeaturesCard
                        key={feature.id}
                        feature={feature}
                    >
                    </FeaturesCard>)
                }
            </div>

        </div>
    );
};

export default ProductFeatures;