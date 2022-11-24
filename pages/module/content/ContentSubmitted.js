import React from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const ContentSubmitted = () => {


    return (
        <div>
            <div className='w-full bg-white mx-auto rounded-b-3xl shadow-lg'>
                <div className='w-11/12 flex items-center justify-between mx-auto px-5 rounded-lg py-3'>
                    <h4 className='text-base font-semibold'>Submit Response</h4>
                    {/* The button to open modal */}
                    <label
                        // onClick={() => Router.push('/')}
                        htmlFor=""
                        type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Brief
                    </label>
                </div>
            </div>
            <div className='m-4'>
                <h1 className='text-xl'>Find best CTOs and content on it.</h1>
                <div className='flex flex-col items-center justify-center'>
                    <h4 className='text-xl p-5'>Add Files Here</h4>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className='bg-white h-60 m-4'>
                    <Editor
                        className='h-60'
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContentSubmitted;