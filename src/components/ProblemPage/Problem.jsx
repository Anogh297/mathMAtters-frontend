import React, { useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';

import Sparkle from 'react-sparkle'
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Latex from 'react-latex-next';


const Problem = () => {
    const [problem, setProblem] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axiosPublic.get('/math')
            .then((res) => {
                const allData = res.data;
                const processedProblems = allData.map((p) => ({
                    ...p,
                    problem: p.problem.replace(/\\\\/g, '\\'),
                }));


                const specificProblem = processedProblems.find(x => x._id == id);
                // const specificProblem = allData.find(x => x._id == id);
                if (specificProblem) {
                    setProblem(specificProblem);
                }
            })
            .catch((err) => console.error(err));
    }, []);


    console.log(problem);

    return (
        <>
            <div className='max-w-6xl mx-auto font-mons'>
                <div className='flex justify-between'>

                    <div className='border-[1px] w-[70%] mt-8 border-gray-400 p-3'>
                        <div className='mb-3'>
                            <h1 className='text-2xl font-medium'>{problem?.title}</h1>
                        </div>
                        <div className='max-w-6xl mx-auto p-4'>

                            <Latex>{problem?.problem}</Latex>
                            <div className='mt-12'>
                                <h1 className='badge bg-green-100 text-green-600 mr-6'>{problem?.source}</h1>
                                <h1 className='badge bg-yellow-100 text-yellow-600'>{problem?.category}</h1>
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
                                {/* <button className='btn btn-md border-none bg-green-200 text-green-600'>Submit</button> */}
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-md border-none bg-green-200 text-green-600" onClick={() => document.getElementById('my_modal_5').showModal()}>Submit</button>
                                <dialog id="my_modal_5" className="modal bg-gray-400 bg-opacity-45 modal-bottom sm:modal-middle">
                                    <div className="modal-box bg-gray-500">
                                        <h3 className="font-bold text-2xl text-center text-gray-200">Congratulations! 🥳🥳🥳</h3>
                                        <img className='mx-auto' width="100" height="100" src="https://img.icons8.com/water-color/100/ok.png" alt="ok" />
                                        <div style={{ position: 'relative', backgroundColor: 'red' }}>
                                            <Sparkle />
                                        </div>
                                        <p className="py-4 text-gray-200 text-center">You have succesfully solved the problem</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Problem;
