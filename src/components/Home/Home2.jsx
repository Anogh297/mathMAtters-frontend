import React, { useContext, useState } from 'react';
import { FaArrowAltCircleRight, FaBlog, FaExternalLinkAlt, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLightbulb, FaMoon, FaRobot, FaSearch, FaSun, FaUser } from 'react-icons/fa'
import { FaLink, FaPaperclip, FaPhotoFilm, FaScreenpal, FaSunPlantWilt, FaX } from 'react-icons/fa6';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { MdAnalytics, MdApi, MdDocumentScanner, MdFormatListNumbered, MdOutlinePanoramaPhotosphereSelect, MdScreenLockLandscape } from 'react-icons/md';



import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Item = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
            // onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">dsdsdsdss</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 transform rotate-180 `}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>

        </div>
    );
};



const Home2 = () => {

    const [currentTheme, setCurrentTheme] = useState('theme-light');
    const [startDate, setStartDate] = useState(new Date());
    const [activeIndex, setActiveIndex] = useState(null);
    const [count, setCount] = useState(0);
    const { user } = useContext(AuthContext);
    return (

        <>
            <div className='bg-profile-imae bg-center h-full pb-24 font-mons'>

                <div className='max-w-7xl mx-auto hidden lg:block '>
                    <div className='flex items-center justify-center p-2' >
                        <div className='flex flex-col-reverse lg:flex-row justify-between items-start mt-24'>
                            <div className='w-[1/2] text-left'>
                                <div className='font-mons'>
                                    <h1 className="text-[52px] font-medium font-mons">
                                        Become a Better <span className="text-orange-500 text-shadow-violet">Mathematician</span> with
                                        <span className="text-red-500 text-shadow-red"> MathMatters</span>

                                    </h1>
                                    <p className="py-5">
                                        Dive into a platform built for the next generation of math enthusiasts! Solve challenging problems, compete in engaging contests, and explore comprehensive resources—all designed to elevate your mathematical journey.
                                    </p>


                                    <div className=' space-x-4'>
                                        <Link to='/Plans'>
                                            <button className='btn btn-primary shadow-2xl shadow-white '>Resources</button>
                                        </Link>
                                        <button className='btn btn-secondary'>Register</button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[80%] lg:w-2/3  '>
                                <img src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg?t=st=1731703767~exp=1731707367~hmac=ee6bb52e9ab0ccf4b8f9872458ece8a95dc59c15e77a6f7008ea75e586a92e92&w=740" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-gray-900 text-white max-w-7xl mx-auto block lg:hidden">
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Understand User Flow.<span className="sm:block"> Increase Conversion. </span>
                            </h1>

                            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimusnumquam ea </p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                    href="#"
                                >
                                    Get Started
                                </a>

                                <a
                                    className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                                    href="#"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="bg-white dark:bg-gray-900">
                    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                                Trusted by numberous <span className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  shadow-pink-600 bg-clip-text text-transparent'>Students </span>🎉

                            </h2>


                            <p className="mt-4 text-gray-500 sm:text-[17px] dark:text-gray-400">
    Trusted by countless students, Math Matters provides a rich collection of challenging problems, exciting contests, and valuable resources. We are dedicated to guiding you toward mathematical excellence with reliable support and innovative tools.
</p>

                        </div>

                        <div className="mt-8 sm:mt-12">
                            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
                                    <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                                        Total Students
                                    </dt>

                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">2864</dd>
                                </div>

                                <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
                                    <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                                        Official Mentors
                                    </dt>

                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">67</dd>
                                </div>

                                <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
                                    <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
                                        Total Co-ordinators
                                    </dt>

                                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">34</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </section>




                <div className=' py-8 px-4 font-mons'>

                    <header className="text-white bg-profile-image bg-center bg-cover bg-no-repeat">
                        <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <div className="sm:flex sm:items-center sm:justify-between mx-auto max-w-7xl">
                                <div className="text-center sm:text-left">
                                    <h1 className="text-2xl font-bold text-gray-300 sm:text-3xl">Welcome Back, {user?.displayName}!</h1>

                                    <p className="mt-1.5 text-sm text-gray-500">Let's go one step further. Ready ? 🎉</p>
                                </div>

                                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                                    <button
                                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                                        type="button"
                                    >
                                        <span className="text-sm font-medium"> View Problems </span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                                        type="button"
                                    >
                                        Contests
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>







                </div>
            </div>
        </>
    );
};

export default Home2;
