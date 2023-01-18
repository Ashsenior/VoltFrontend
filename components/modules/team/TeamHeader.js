import React from 'react';
import Router from 'next/router';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const TeamHeader = () => {
    return (
        <div className='flex items-center justify-center gap-4 bg-purple-500 text-gray-50 mx-auto w-full p-2'>
            <h1 className='text-lg font-semibold text-gray-200'>Looking for new team member?</h1>
            {/*onClick={() => Router.push('/module/team/create_team')}*/}
            <button
                className='btn btn-sm border-0 text-gray-300 rounded-md hover:bg-purple-600 hover:text-white bg-gray-800'><GroupAddIcon className='mr-2' />FIND PEOPLE | COMING SOON!!</button>
        </div>
    );
};

export default TeamHeader;