import React from 'react';

const MarketingTeamTable = () => {
    const marketingMembers = [
        {
            id: 'kgsdfhjkg24',
            username: 'username',
            name: 'Neil Sims',
            role: 'Marketing',
            status: 'Open to work',
            points: '54',
            rating: '4.2',
            color: 'green',
            image: 'https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png',
        },
        {
            id: 'kgsdfhjkg24',
            username: 'username',
            name: 'Ron Bon',
            role: 'Product',
            status: 'Working',
            points: '61',
            rating: '4.0',
            color: 'indigo',
            image: 'https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png',
        },
        {
            id: 'kgsdfhjkg24',
            username: 'username',
            name: 'Reno Pord',
            role: 'Marketing',
            status: 'Open to work',
            points: '42',
            rating: '4.3',
            color: 'green',
            image: 'https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png',
        },
        {
            id: 'kgsdfhjkg24',
            username: 'username',
            name: 'Haba Aiza',
            role: 'Research',
            status: 'Open to work',
            points: '73',
            rating: '4.8',
            color: 'green',
            image: 'https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png',
        },
        {
            id: 'kgsdfhjkg24',
            username: 'username',
            name: 'Neil Sims',
            role: 'Marketing',
            status: 'Open to work',
            points: '54',
            rating: '4.2',
            color: 'green',
            image: 'https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png',
        },
    ]
    return (
        <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-50 uppercase bg-green-400 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className='py-3 px-6' scope="col" >
                            Name
                        </th>
                        <th className='py-3 px-6' scope="col" >
                            Status
                        </th>
                        <th className='py-3 px-6 hidden xl:block' scope="col" >
                            Points
                        </th>
                        <th className='py-3 px-6' scope="col" >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marketingMembers.map(member =>
                            <tr key={member.id} class=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                
                                <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src={member?.image} alt="Jese image" />
                                    <div class="pl-3">
                                        <div class="text-base font-semibold">{member?.name} <span class="font-normal text-sm text-gray-500">@{member?.username}</span></div>
                                        <div class="font-normal text-gray-400">{member?.role}</div>
                                    </div>
                                </th>
                                <td class="py-4 px-6">
                                    <div class="flex items-center">
                                        <div class={`h-2.5 w-2.5 rounded-full bg-${member?.color}-400 mr-2`}></div> {member?.status}
                                    </div>
                                </td>
                                <td class="py-4 px-6 hidden xl:block">
                                    <p className='w-fit px-2 font-medium bg-green-100 rounded-full'>{member?.points} volts</p>
                                </td>
                                <td class="py-4 px-6">
                                    <label htmlFor="teamMemberModal" className='btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 hover:border-0 text-white rounded-md text-sm capitalize'>Connect</label>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MarketingTeamTable;