import React from 'react';
import Router from 'next/router';
import { GoIssueClosed } from 'react-icons/go';
import { MdFeaturedVideo } from 'react-icons/md';
import { BsFillArrowRightSquareFill, BsBarChartFill, BsQuestionDiamond } from 'react-icons/bs';

const ProductIntro = () => {
    return (
        <div className='flex flex-col md:flex-row mt-8'>
            <div className='w-full md:w-7/12 bg-white rounded-lg shadow p-1 md:p-6 flex flex-col-reverse md:flex-row items-center mt-4 mr-4'>
                <div className='p-2 md:p-6'>
                    <h1 className='text-xl font-semibold mb-2'>Product Name</h1>
                    <p>Product Descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum, repudiandae voluptatum, ab unde architecto nemo dolorum quas reiciendis eveniet dicta incidunt, exercitationem quo. Quaerat error doloremque tempore. Quas hic, exercitationem expedita et, modi fugit amet vero inventore tenetur dignissimos debitis? Iure voluptatem facere eveniet</p>
                    <button className='btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-0 rounded-sm mt-4'>Features</button>
                </div>
                <img className='w-52 h-52 rounded-lg' src="https://www.pngitem.com/pimgs/m/217-2179955_ui-ux-designing-png-transparent-png.png" alt="" />
            </div>
            <div className='w-full md:w-5/12 mt-4 flex flex-col justify-between gap-4'>

                <div className='flex w-full h-full gap-4'>
                    <div className='bg-white rounded-md p-4 h-full w-full shadow hidden md:block relative'>
                        <p className='absolute -top-3 bg-gray-700 p-4 rounded-lg'><BsBarChartFill className='text-white text-2xl'></BsBarChartFill></p>
                        <div className='flex flex-col items-end absolute top-2 right-4'>
                            <h4 className='text-base font-light'>New Commits</h4>
                            <h3 className='text-2xl font-bold'>35</h3>
                        </div>
                        <div className='absolute bottom-4 left flex border-t w-52'>
                            <p><span className='text-green-500 font-bold'>+23%</span> then last week</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-md p-4 h-full w-full shadow relative'>
                        <p className='absolute -top-3 bg-green-400 p-4 rounded-lg'><BsQuestionDiamond className='text-white text-2xl'></BsQuestionDiamond></p>
                        <div className='flex flex-col items-end absolute top-2 right-4'>
                            <h4 className='text-base font-light'>Issue Solved</h4>
                            <h3 className='text-2xl font-bold'>14</h3>
                        </div>
                        <div className='absolute bottom-4 left flex border-t w-52'>
                            <p><span className='text-green-500 font-bold'>+12%</span> then last week</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-md p-4 flex items-center justify-between shadow'>
                    <GoIssueClosed className='text-4xl bg-indigo-400 rounded-full text-white p-2'></GoIssueClosed>
                    <p className='text-xl'><span>8</span> Member Working</p>
                    <BsFillArrowRightSquareFill
                        onClick={() => Router.push('/module/product/product_team')}
                        className='text-2xl text-indigo-500 cursor-pointer'></BsFillArrowRightSquareFill>
                </div>
                <div className='bg-white rounded-md p-4 flex items-center justify-between shadow'>
                    <MdFeaturedVideo className='text-4xl bg-indigo-400 rounded-full text-white p-2'></MdFeaturedVideo>
                    <p className='text-xl'><span>5</span> New Features</p>
                    <BsFillArrowRightSquareFill className='text-2xl text-indigo-500'></BsFillArrowRightSquareFill>
                </div>
            </div>
        </div>
    );
};

export default ProductIntro;