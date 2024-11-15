import React from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Problem = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto font-mons'>
                <div className='flex justify-between'>
                    <div className='border-[1px] w-[70%] mt-8 border-gray-400 p-3'>
                        <div className='mb-3'>
                            <h1 className='text-2xl font-medium'>Game Of Remainders</h1>
                        </div>
                        <div className='max-w-6xl mx-auto p-4'>
                            <Latex>
                                {`$2^1 + 2^2 + 2^3 + \\dots + 2^{2019} + 2^{2020} = C$`}
                            </Latex>
                            <h1 className='mt-4'>
                                If <Latex>{`$C$`}</Latex> is divided by 6, what will be the remainder?
                            </h1>
                            <div className='mt-12'>
                                <h1 className='badge bg-green-100 text-green-600 mr-6'>BdMO Shortlists 2024</h1>
                                <h1 className='badge bg-yellow-100 text-yellow-600'>Number Theory</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] border-[2px] mt-8 ml-4 p-3 border-gray-300'>
                        <div className=' mb-4'>
                            <h1 className='text-[18px] pb-3 font-medium text-center'>Statistics</h1>
                            <hr />
                        </div>
                        <div className='flex justify-between  px-4 py-2'>
                            <h1 className='font-bold text-[18px]'>Attempts</h1>
                            <h1>100</h1>
                        </div>
                        <div className='flex justify-between  px-4 py-2'>
                            <h1 className='font-bold text-[18px]'>Correct</h1>
                            <h1>34</h1>
                        </div>
                        <div className='flex justify-between px-4 py-2'>
                            <h1 className='font-bold text-[18px]'>First Solve</h1>
                            <h1>Saad Akhter</h1>
                        </div>
                        <div>
                            <h1 className='text-[16.5px] font-medium mt-2 mb-4 px-4'>What's Your Answer ? 🤓</h1>
                            <div className='flex  items-center px-2'>
                                <input type="text " className='input input-md rounded-sm w-full border-[1px] border-gray-500' name="" id="" />
                                <button className='btn btn-md border-none bg-green-200 text-green-600'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Problem;
