import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';

const ProblemPage = () => {
    const { user } = useContext(AuthContext);
    const [solved, setSolved] = useState([]);
    const [num, setnum] = useState([]);
    const [total, setTotal] = useState([]);
    const [size, setSize] = useState([]);
    const ax = useAxiosPublic();

    useEffect(() => {
        ax.get('/users')
            .then(res => {
                console.log(res.data);
                const x = res.data;
                const specificUser = x.filter((use) => use.email == user?.email);
                if (specificUser) {
            
                    setSolved(specificUser);
                    setnum(solved[0]?.solvedProblems.length);
                    console.log('number of solved problems ; ',num);
                }
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    console.log('sososoo',solved[0]?.solvedProblems.length);
    // const len = solved[0].solvedProblems.length;
    useEffect(() => {
        ax.get('/math')
            .then(res => {
                console.log(res.data);
                setTotal(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    console.log('all math problems :' ,total);
    return (
        <>
            <div className='text-center font-mons'>
                <h1 className='text-[28px] font-medium py-6'>Mathematical problems</h1>
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
                                <h1> </h1>
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
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to='/topicproblems/angle-chasing'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/anglechasing.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Angle Chasing </h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to='/topicproblems/counting'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/counting.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Arithmetic </h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to='/topicproblems/adhock'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/co-prime.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Co-Prime </h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to='/topicproblems/algebra'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/counting.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>counting </h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>

                    <Link to='/topicproblems/algebra'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/equation.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Equation</h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>

                    <Link to='/topicproblems/algebra'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/geometry.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Geometry </h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to='/topicproblems/adhock'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                {/* <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/numbertheory.svg" alt="" /> */}
                                <img className='my-auto' width="64" height="64" src="https://img.icons8.com/cute-clipart/64/square-root.png" alt="square-root" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Number Theory </h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>
                    <Link to='/topicproblems/algebra'>
                        <div className='flex py-4 mb-4  items-center p-4 border-2 border-gray-300 w-full'>
                            <div className=' h-[100px]'>
                                <img className='max-h-full max-w-full' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/icons/math/probability.svg" alt="" />
                            </div>
                            <div className='ml-8'>
                                <h1 className='text-[24px] font-medium'>Probability </h1>
                                <h1> </h1>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className='w-[30%] ml-6'>
                    <div className='flex py-4 mb-4 justify-betweene items-center p-4 border-2 border-gray-300 w-full'>
                        <div className=' h-[100px]'>
                            <img className='max-h-[90%] max-w-[90%]' src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/solved.svg" alt="" />
                        </div>
                        <div className='ml-8'>
                            <h1 className='text-[24px] font-medium'>{solved[0]?.solvedProblems.length} / {total.length}</h1>
                            <h1>You solved</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProblemPage;