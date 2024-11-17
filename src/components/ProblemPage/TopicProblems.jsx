import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import useAxiosPublic from '../hooks/useAxiosPublic';

const TopicProblems = () => {
    const [problmes, setProblems] = useState([]);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get('/math')
            .then((res) => {
                const processedProblems = res.data.map((p) => ({
                    ...p,
                    problem: p.problem.replace(/\\\\/g, '\\'), // Replace double backslashes with single
                }));

                setProblems(processedProblems);
            })
            .catch((err) => console.error(err));
    }, []);

    console.log('consoling the results --->', problmes);

    return (
        <>
            <div className='font-mons max-w-6xl mx-auto'>
                <div className='text-center p-3'>
                    <h1 className='text-[28px] font-medium pb-4'>Algebra Problems</h1>
                    <div className='border-[1px] border-green-300'>
                        <hr />
                    </div>
                </div>
                <div className='flex justify-between font-mons  max-w-6xl mx-auto'>
                    <div className='w-[70%]'>
                        <div>
                            {
                                problmes.map((problem, index) => <>
                                    <div className='border-[0.5px] max-h-[90px] py-1 px-3 border-orange-200 mb-4'>
                                        <Link to={`http://localhost:5173/problem/${problem._id}`}>
                                            <div className='flex  mb-4  items-center  border-gray-300 w-full'>
                                                <div className=' '>
                                                    <img className='h-[35px] w-[35px]' src="https://gonitzoggo.com/assets/images/icons/check2.png" alt="" />
                                                </div>
                                                <div className='ml-8'>
                                                    <h1 className='text-[16px] font-medium'>{problem.title}</h1>
                                                    <h1 className='text-[14px]'>{problem.source} </h1>
                                                </div>
                                            </div>
                                            <div className='text-[15px] '>
                                                <h1>Difficulty : <span className='badge badge-sm bg-red-200 -translate-y-[2px]'>{problem.difficulty}</span></h1>
                                            </div>
                                        </Link>
                                    </div>
                                </>)
                            }
                        </div>

                    </div>
                    <div className='w-[30%] ml-6 p-4 border-2 border-gray-300'>
                        <div className='flex py-4 mb-4 justify-betweene items-center  w-full'>
                            <div className=' h-[100px]'>

                                <img width="100" height="100" src="https://img.icons8.com/bubbles/100/books.png" alt="books" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Resources</h1>

                            </div>


                        </div>
                        <div>
                            <div className='pb-2'>
                                <h1>Number Theory</h1>
                                <h1 className='link link-secondary'>www.mathacademyorg/something</h1>
                            </div>
                            <div className='pb-2'>
                                <h1>Algebra</h1>
                                <h1 className='link link-secondary'>www.mathacademyorg/something</h1>
                            </div>
                            <div className='pb-2'>
                                <h1>Modular Arithmatic</h1>
                                <h1 className='link link-secondary'>www.mathacademyorg/something</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TopicProblems;