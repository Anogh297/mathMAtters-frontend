import React from 'react';
import CurrentContest from './CurrentContest';

const Contests = () => {
    return (
        <>
            <div className='bg-gray-700 font-mons bg-opacity-95 bg-fixed bg-blend-overlay mx-auto bg-contest h-screen'>
                <div className='pt-6'>
                    <h2 className='text-gray-200 link link-secondary font-bold text-[34px] text-center'>Contests Available</h2>
                    <hr />
                </div>
                <div className=' flex mx-auto max-w-7xl mt-8 p-4'>
                    <div className='w-[70%] bg-gray-800 bg-blend-multiply p-4'>

                        <div className='flex justify-between p-4 border-2 border-dashed mb-4 border-green-400 text-gray-200'>
                            <div className='flex space-x-3 items-center'>
                                <div>
                                    <img width="96" height="96" src="https://img.icons8.com/color/96/contest.png" alt="contest" />
                                </div>
                                <div>
                                    <h1>Algomatrix Monthly Contest</h1>
                                    <h1 className='text-[14.5px]'>Time : Thursday, 25<sup>th</sup> November : 20:00 GMT</h1>
                                    <h1 className='text-[14.5px]'>Duration : 3 hours</h1>
                                </div>
                            </div>
                            <div>
                                <img width="50" height="50" src="https://img.icons8.com/stickers/50/enter-2.png" alt="enter-2" />
                            </div>
                        </div>
                        <div className='flex justify-between p-4 border-2 border-dashed mb-4 border-green-400 text-gray-200'>
                            <div className='flex space-x-3 items-center'>
                                <div>
                                    <img width="96" height="96" src="https://img.icons8.com/color/96/contest.png" alt="contest" />
                                </div>
                                <div>
                                    <h1>Algomatrix Monthly Contest</h1>
                                    <h1 className='text-[14.5px]'>Time : Thursday, 25<sup>th</sup> November : 20:00 GMT</h1>
                                    <h1 className='text-[14.5px]'>Duration : 3 hours</h1>
                                </div>
                            </div>
                            <div>
                                <img width="50" height="50" src="https://img.icons8.com/stickers/50/enter-2.png" alt="enter-2" />
                            </div>
                        </div>
                        <div className='flex justify-between p-4 border-2 border-dashed mb-4 border-green-400 text-gray-200'>
                            <div className='flex space-x-3 items-center'>
                                <div>
                                    <img width="96" height="96" src="https://img.icons8.com/color/96/contest.png" alt="contest" />
                                </div>
                                <div>
                                    <h1>Algomatrix Monthly Contest</h1>
                                    <h1 className='text-[14.5px]'>Time : Thursday, 25<sup>th</sup> November : 20:00 GMT</h1>
                                    <h1 className='text-[14.5px]'>Duration : 3 hours</h1>
                                </div>
                            </div>
                            <div>
                                <img width="50" height="50" src="https://img.icons8.com/stickers/50/enter-2.png" alt="enter-2" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] bg-gray-500 bg-opacity-65 text-gray-200 p-4 text-center'>
                        <h3 className='text-white text-[24px] font-medium mb-4'>Organize A Contest</h3>
                        <div>

                            <h1 className='mb-4'>Want to host contest on <span className='text-red-400 mb-4'>MathMAtters</span> ?</h1>
                            <h1>Please send us an email at <span className='link text-yellow-400'>saad.e.alif2010@gmail.com</span> and we will get in touch with you .</h1>
                        </div>
                    </div>
                </div>
            </div>
            <CurrentContest></CurrentContest>
        </>
    );
};

export default Contests;
