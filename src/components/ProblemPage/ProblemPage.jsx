import React from 'react';
import { Link } from 'react-router-dom';

const ProblemPage = () => {
    return (
        <>
            <div className='text-center font-mons'>
                <h1 className='text-[28px] font-medium py-6'>Mathematics problems</h1>
                <hr />
            </div>
            <div className='flex justify-between font-mons  max-w-6xl mx-auto'>
                <div className='w-[70%]'>
                    <Link to='/topicproblems/adhock'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/adhoc.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Ad-Hock </h1>
                                <h1>46 Problems </h1>
                            </div>
                        </div>
                    </Link>
                  <Link to='/topicproblems/algebra'>
                  <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                        <div className=' h-[100px]'>
                            <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/algebra.svg" alt="" />
                        </div>
                        <div className='ml-8'>
                            <h1 className='text-[24px] font-medium'>Algebra </h1>
                            <h1>34 Problems </h1>
                        </div>
                    </div>
                  </Link>
                    <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                        <div className=' h-[100px]'>
                            <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/adhoc.svg" alt="" />
                        </div>
                        <div className='ml-8'>
                            <h1 className='text-[24px] font-medium'>Ad-Hock </h1>
                            <h1>46 Problems </h1>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] ml-6'>
                    <div className='flex py-4 mb-4 justify-betweene items-center p-4 border-2 border-gray-300 w-full'>
                        <div className=' h-[100px]'>
                            <img className='max-h-[90%] max-w-[90%]' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/solved.svg" alt="" />
                        </div>
                        <div className='ml-8'>
                            <h1 className='text-[24px] font-medium'>50 / 480</h1>
                            <h1>You solved</h1>
                        </div>

                    </div>
                    {/* <div>
                        <img className='w-[60px] h-[60px] rounded-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/practice.webp" alt="" />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default ProblemPage;