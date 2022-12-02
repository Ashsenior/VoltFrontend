import React from 'react';
import { RiTeamFill } from 'react-icons/ri';
import { GoIssueClosed } from 'react-icons/go';
import { MdFeaturedVideo } from 'react-icons/md';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const ProductIntro = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-7/12 bg-white rounded-lg p-1 md:p-6 flex flex-col-reverse md:flex-row items-center mt-4 mr-4'>
                <div className='p-2 md:p-6'>
                    <h1 className='text-xl font-semibold mb-2'>Product Name</h1>
                    <p>Product Descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum, repudiandae voluptatum, ab unde architecto nemo dolorum quas reiciendis eveniet dicta incidunt, exercitationem quo. Quaerat error doloremque tempore. Quas hic, exercitationem expedita et, modi fugit amet vero inventore tenetur dignissimos debitis? Iure voluptatem facere eveniet</p>
                    <button className='btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 rounded-sm mt-4'>Features</button>
                </div>
                <img className='w-52 h-52 rounded-lg' src="https://www.pngitem.com/pimgs/m/217-2179955_ui-ux-designing-png-transparent-png.png" alt="" />
            </div>
            <div className='w-full md:w-5/12 mt-4 flex flex-col justify-between gap-4'>
                <div className='bg-white rounded-md p-4 flex items-center justify-between h-full'>
                    <RiTeamFill className='text-4xl bg-indigo-400 rounded-full text-white p-2'></RiTeamFill>
                    <p className='text-xl'><span>12</span> Members Working</p>
                    <BsFillArrowRightSquareFill className='text-2xl text-indigo-500'></BsFillArrowRightSquareFill>
                </div>
                <div className='bg-white rounded-md p-4 flex items-center justify-between h-full'>
                    <GoIssueClosed className='text-4xl bg-indigo-400 rounded-full text-white p-2'></GoIssueClosed>
                    <p className='text-xl'><span>5</span> Issue Solved</p>
                    <BsFillArrowRightSquareFill className='text-2xl text-indigo-500'></BsFillArrowRightSquareFill>
                </div>
                <div className='bg-white rounded-md p-4 flex items-center justify-between h-full'>
                    <MdFeaturedVideo className='text-4xl bg-indigo-400 rounded-full text-white p-2'></MdFeaturedVideo>
                    <p className='text-xl'><span>7</span> Working Features</p>
                    <BsFillArrowRightSquareFill className='text-2xl text-indigo-500'></BsFillArrowRightSquareFill>
                </div>
            </div>
        </div>
    );
};

export default ProductIntro;