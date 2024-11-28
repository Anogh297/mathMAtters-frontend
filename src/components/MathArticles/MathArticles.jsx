import React from 'react';
import FermatTheorem from './FermatTheorem';
import EuclidTheorem from './EuclidTheorem';
import ChineseRemainder from './ChineseRemainder';
import { Link } from 'react-router-dom';

const MathArticles = () => {
    return (
        <>
            <div className='bg-math font-mons bg-fixed'>
                <div className="space-y-8 max-w-6xl bg-opacity-90 bg-white mx-auto border-2 border-dotted border-red-400">
                    <div>
                        <img className='w-[400px] h-[400px] mx-auto' src="https://i.pinimg.com/736x/75/3a/6a/753a6a199bfc4363c3636260e8d49176.jpg" alt="" />
                    </div>
                    <div className='text-center mx-auto text-[24px] font-bold'>
                        <h1>Number Theory </h1>
                    </div>
                    <div className=' grid grid-cols-2  font-mons justify-between items-center space-x-6'>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>Fermat's Little Theorem</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>
                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>Chinese Remainder Theorem</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                    </div>
                    <div className='text-center mx-auto text-[24px] font-bold'>
                        <h1>Combinatorics </h1>
                    </div>
                    <div className=' grid grid-cols-2  font-mons justify-between items-center space-x-6'>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                    </div>
                    <div className='text-center mx-auto text-[24px] font-bold'>
                        <h1>Geometry </h1>
                    </div>
                    <div className=' grid grid-cols-2  font-mons justify-between items-center space-x-6'>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                    </div>
                    <div className='text-center mx-auto text-[24px] font-bold'>
                        <h1>Algebra </h1>
                    </div>
                    <div className=' grid grid-cols-2  font-mons justify-between items-center space-x-6'>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px] max-h-[90px]  py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                        <div className='border-[0.5px]  max-h-[90px] py-1 px-3 border-orange-200 mb-4'>

                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                <div className=' '>
                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                </div>
                                <div className='ml-8'>
                                    <h1 className='text-[16px] font-medium'>title goes here</h1>
                                    <h1 className='text-[14px]'>BDMO </h1>
                                </div>
                            </div>
                            <div className='text-[15px] '>
                                <h1>Difficulty : <span className={`badge badge-sm  bg-sky-50 text-sky-500 -translate-y-[2px]`}>Hard</span></h1>
                            </div>

                        </div>
                    </div>
                   
                    {/* <FermatTheorem />
                    <EuclidTheorem />
                    <ChineseRemainder /> */}

                </div>
            </div>
        </>
    );
};

export default MathArticles;
