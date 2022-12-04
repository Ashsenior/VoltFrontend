import React from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)



const ContentSubmitted = () => {


    return (
        <div>

        </div>
    );
};

export default ContentSubmitted;