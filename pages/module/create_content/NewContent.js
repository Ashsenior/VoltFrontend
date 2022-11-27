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
                <div className='w-10/12 flex items-center justify-center mx-auto rounded-2xl'>
                    <label
                        // onClick={() => Router.push('/create_startup')}
                        htmlFor="edit-startups-modal"
                        type="button" className="inline-flex items-center px-2 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit the response
                    </label>
                </div>
            </div>
            <div className='m-4'>
                <h1 className='text-xl'><span className='text-red-600 font-semibold '>Task | </span> Find best CTOs and content on it.</h1>
                
                <div className=" mt-2 flex-shrink-0 flex">
                    <p>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">@ashsenior</span>
                    </p>
                    <span
                        onClick={() => Router.push('/module/create_content/ContentDetails')}
                        className='bg-gray-600 rounded-md ml-2 text-gray-50 p-1 px-2'>
                        Brief📄
                    </span> 
                </div>
                
                <div className="w-full mt-4">
                    <label
                        className="flex justify-center w-full h-24 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
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
                <div className='w-full mt-4'>
                    <Editor
                        editorStyle={{ height: '35rem', width: 'full', overflow: 'hidden', background: 'white' }}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                    />
                </div>
            </div>

        </div>
    );
};

export default NewContent;