import React from 'react';
import Router from 'next/router';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const TeamHeader = () => {
    return (
        <div className='flex items-center justify-between mx-auto w-full xl:w-3/4 mt-2 p-2'>
            <h1 className='text-xl font-semibold text-gray-600'>Looking for a new team <QuestionMarkIcon className='text-orange-500' /></h1>
            <button
                onClick={() => Router.push('/module/team/create_team')}
                className='btn btn-md btn-outline rounded-md hover:bg-indigo-500 hover:border-indigo-600'><GroupAddIcon className='mr-2' />Create team</button>
        </div>
    );
};

export default TeamHeader;