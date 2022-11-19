import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessibleIcon from '@mui/icons-material/Accessible';
import AttributionIcon from '@mui/icons-material/Attribution';

import AdbIcon from '@mui/icons-material/Adb';

const timeline = [
    {
        id: 1,
        content: 'Applied to',
        target: 'Front End Developer',
        href: '/',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: AccountBoxIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: 'Advanced to phone screening by',
        target: 'Bethany Blake',
        href: '/',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: AccessibleIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '/',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: AttributionIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '/',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: AdbIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '/',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: AccountBoxIcon,
        iconBackground: 'bg-green-500',
    },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const ProductTimeline = () => {
    return (
        <div className='mt-6'>
            <div className="flow-root">
                <ul role="list" className="-mb-8">
                    {timeline.map((event, eventIdx) => (
                        <li key={event.id}>
                            <div className="relative pb-8">
                                {eventIdx !== timeline.length - 1 ? (
                                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                ) : null}
                                <div className="relative flex space-x-3">
                                    <div>
                                        <span
                                            className={classNames(
                                                event.iconBackground,
                                                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                            )}
                                        >
                                            <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                {event.content}{' '}
                                                <a href={event.href} className="font-medium text-gray-900">
                                                    {event.target}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                            <time dateTime={event.datetime}>{event.date}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductTimeline;