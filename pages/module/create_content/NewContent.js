import React from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewContent = () => {
    return (
        <div>
            <div className='w-full bg-indigo-500 border-b rounded-b-xl '>
                <div className='w-10/12 flex items-center justify-center mx-auto px-2 rounded-lg py-2'>
                    <label
                        // onClick={() => Router.push('/create_startup')}
                        htmlFor="edit-startups-modal"
                        type="button" className="inline-flex items-center px-2 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit the response
                    </label>
                </div>
            </div>
            <div className='m-4'>
                <h1 className='text-xl'> <span className='bg-gray-600 rounded-md text-gray-50 p-1 px-2'>Task</span> Find best CTOs and content on it.</h1>
                <div className="w-full m-4">
                    <label
                        className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="font-medium text-gray-600">
                                Drop result documents , or
                                <span className="text-blue-600 underline mx-1">browse</span>
                            </span>
                        </span>
                        <input type="file" name="file_upload" className="hidden" />
                    </label>
                </div>
                <div className='w-full m-4'>
                    <Editor
                        editorStyle={{ height: '15rem', width: 'full', overflow: 'hidden', background: 'white' }}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                    />
                </div>
                <div className='m-4'>
                    <p className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quod alias sint, deleniti earum provident molestiae praesentium itaque officiis, culpa consectetur quis a modi voluptatem. Similique aliquid eos reiciendis praesentium molestias minima maiores provident totam voluptatibus pariatur libero id deleniti, hic, nemo cupiditate corporis vitae distinctio earum. Qui, maxime voluptas ipsum architecto laboriosam blanditiis accusamus ipsam perspiciatis distinctio nulla officia illo officiis quaerat asperiores quos, earum consequuntur? Voluptates, officia recusandae porro illum pariatur rem incidunt similique praesentium temporibus ullam sit, dolores nisi sequi quis, veritatis sapiente repellat quod facilis vel neque quaerat commodi totam! Quasi iusto atque sapiente necessitatibus fugiat.</p>
                </div>

            </div>

        </div>
    );
};

export default NewContent;