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

        </div>
    );
};

export default ContentSubmitted;