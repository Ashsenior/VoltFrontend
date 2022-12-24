import React from 'react';
import Router from 'next/router';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const TeamHeader = () => {
    return (
        <div className='flex items-center justify-center gap-4 bg-indigo-500 text-gray-50 mx-auto w-full p-2'>
            <h1 className='text-lg font-semibold text-gray-100'>Looking for new team member?</h1>
            <button
                onClick={() => Router.push('/module/team/create_team')}
                className='btn btn-sm border-0 text-gray-500 rounded-md hover:bg-indigo-600 hover:text-white bg-white'><GroupAddIcon className='mr-2' />FIND candidates</button>
        </div>
    );
};

export default TeamHeader;