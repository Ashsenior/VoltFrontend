import { Container } from '@mui/system';
import React from 'react';
import MarketingMajor from './MarketingMajor';
import Router from 'next/router';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Socials from './Socials';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const MarketingHome = () => {
    const tabs = [
        { name: 'In Progress', href: '#', current: false },
        { name: 'Completed', href: '#', current: false },
        { name: 'Closed', href: '#', current: false },
        { name: 'Task', href: '#', current: true },
        { name: 'Socials', href: '#', current: false },
    ]

    return (
        <div>
            {/* Link Buttons */}
            <Container maxWidth='w-full my-4'>
                <div className="relative pb-5 border-b border-gray-200 sm:pb-0">
                    <div className="md:flex md:items-center md:justify-between">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Marketing Models</h3>
                        <div className="mt-3 flex md:mt-0 md:absolute md:top-3 md:right-0">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add New Social
                            </button>
                            <button
                                onClick={() => Router.push('/module/create_marketing/NewMarketing')}
                                type="button"
                                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Create new Marketing
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="sm:hidden">
                            <label htmlFor="current-tab" className="sr-only">
                                Select a tab
                            </label>
                            <select
                                id="current-tab"
                                name="current-tab"
                                className="block w-full bg-white pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                defaultValue={tabs.find((tab) => tab.current).name}
                            >
                                {tabs.map((tab) => (
                                    <option key={tab.name}>{tab.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <nav className="-mb-px flex space-x-8">
                                {tabs.map((tab) => (
                                    <a
                                        key={tab.name}
                                        href={tab.href}
                                        className={classNames(
                                            tab.current
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                            'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                                        )}
                                        aria-current={tab.current ? 'page' : undefined}
                                    >
                                        {tab.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Strategy Cards */}
            {/* Major */}
            <Container maxWidth='lg'>
                <h1 className='text-base my-1 font-semibold  ml-1'>Major</h1>
                <div xs={12} md={6} lg={6} className='grid grid-cols-1 xl:grid-cols-1'>
                    <MarketingMajor></MarketingMajor>
                </div>
            </Container>

            {/* Minor */}
            <Container maxWidth='lg'>
                <h1 className='text-base my-1 font-semibold mt-6 ml-1'>Minor</h1>
                <div className='grid grid-cols-1 xl:grid-cols-1'>
                    <MarketingMajor></MarketingMajor>
                </div>
            </Container>
            {/* Minor */}
            <Container maxWidth='lg'>
                <div className='grid grid-cols-1 xl:grid-cols-1'>
                    <Socials></Socials>
                </div>
            </Container>
        </div>
    );
};

export default MarketingHome;