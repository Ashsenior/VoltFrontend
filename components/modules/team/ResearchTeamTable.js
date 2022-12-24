import React from 'react';

const ResearchTeamTable = () => {
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

    ]
    return (
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-50 uppercase bg-indigo-400 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                            <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Role
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Points
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marketingMembers.map(member =>
                            <tr key={member.id} class=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-10 h-10 rounded-full" src={member?.image} alt="Jese image" />
                                    <div class="pl-3">
                                        <div class="text-base font-semibold">{member?.name}</div>
                                        <div class="font-normal text-gray-500">@{member?.username}</div>
                                    </div>
                                </th>
                                <td class="py-4 px-6">
                                    {member?.role}
                                </td>
                                <td class="py-4 px-6">
                                    <p className='w-fit px-2 font-medium bg-green-100 rounded-full'>{member?.points} volts</p>
                                </td>
                                <td class="py-4 px-6">
                                    <div class="flex items-center">
                                        <div class={`h-2.5 w-2.5 rounded-full bg-${member?.color}-400 mr-2`}></div> {member?.status}
                                    </div>
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

export default ResearchTeamTable;