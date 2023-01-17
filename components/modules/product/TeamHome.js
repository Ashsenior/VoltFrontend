import React from 'react';
import TeamAnalytics from './TeamAnalytics';
import TeamMembers from './TeamMembers';
import AllTeamMembers from './AllTeamMembers';

const TeamHome = () => {
    return (
        <div className='xl:p-4 text-gray-300 bg-gray-800'>
            <div>
                <h1 className='text-xl font-semibold mb-1'>Product Name</h1>
                <div className='flex item-center gap-1 mb-2'>
                    <h4 className='font-medium text-gray-300'>LEAD </h4>
                    <p className="px-2 text-xs leading-5 font-semibold rounded-full bg-gray-900">
                        @ashsenior
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <TeamMembers></TeamMembers>
                <TeamAnalytics></TeamAnalytics>
            </div>
            <AllTeamMembers></AllTeamMembers>
        </div>
    );
};

export default TeamHome;