import React, { useContext, useState } from 'react';
import { FaArrowAltCircleRight, FaBlog, FaExternalLinkAlt, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLightbulb, FaMoon, FaRobot, FaSearch, FaSun, FaUser } from 'react-icons/fa'
import { FaLink, FaPaperclip, FaPhotoFilm, FaScreenpal, FaSunPlantWilt, FaX } from 'react-icons/fa6';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { MdAnalytics, MdApi, MdDocumentScanner, MdFormatListNumbered, MdOutlinePanoramaPhotosphereSelect, MdScreenLockLandscape } from 'react-icons/md';



import { Link } from 'react-router-dom';

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
    return (

        <>
            <div className='bg-profile-imae bg-center h-full pb-96 font-mons'>

                <div className='max-w-7xl mx-auto hidden lg:block '>
                    <div className='flex items-center justify-center p-2' >
                        <div className='flex flex-col-reverse lg:flex-row justify-between items-start mt-24'>
                            <div className='w-[1/2] text-left'>
                                <div className='font-mons'>
                                    <h1 className='text-[52px]  text- font-medium font-mons'>Become Better <span className='text-orange-500 text-shadow-violet'>Mathemetician</span> With<span className='text-red-500 text-shadow-red'>MathMAtters <span className='text-[14px]'><sup><Latex>We know $12^1$ + $23^1$ = {12+23}.</Latex></sup></span></span> </h1>
                                    <p className='py-5'>The Next Gen platform enhances assignment submission and grading, offering a seamless experience for students and instructors with efficient management</p>

                                    <div className=' space-x-4'>
                                        <Link to='/Plans'>
                                            <button className='btn btn-primary shadow-2xl shadow-white '>Submit Asssignment</button>
                                        </Link>
                                        <button className='btn btn-secondary'>Register</button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[80%] lg:w-2/3  mb-16'>
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
                                    Trusted by countless students, our program offers exceptional support and guidance. We are committed to providing reliable and effective solutions to help you achieve your goals with ease and confidence
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
                                    <h1 className="text-2xl font-bold text-gray-300 sm:text-3xl">Welcome Back, Saad Ibn AKhter!</h1>

                                    <p className="mt-1.5 text-sm text-gray-500">Let's go one step further. Ready ? 🎉</p>
                                </div>

                                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                                    <button
                                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                                        type="button"
                                    >
                                        <span className="text-sm font-medium"> View Assignment </span>

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
                                        Submit Response
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>


                    {/* <div className='text my-3 max-w-7xl mx-auto p-3'>
                        <h1 className='font-medium text-[17px] text-gray-600 uppercase mb-3'>Go beyond your knowledge !</h1>
                        <h1 className='text-[36px] text-gray-200'>Solve exciting <span className='text-blue-400 capitalize'>assignments</span> and uprank your career. <br /> Join <span className='text-orange-600 underline-offset-2'>Today !</span></h1>
                    </div> */}
                    {/* upcoming assignments */}
                    {/* <div className='grid grid-cols-1 lg:grid-cols-2  gap-[24px] p-3 mt-8  my-3 max-w-7xl mx-auto py-5 mb-6'  >
                        <div className='bg-black rounded-2xl p-5 flex flex-col md:flex-row justify-between border-2 border-blue-600 shadow-purple-900 shadow-xl'>

                            <div className='text-left'>
                                <h1 className='text-[13px] md:text-[16px]'>London, England</h1>
                                <h1 className='text-white text-[16px] lg:text-[24px]'>Debate Workshop</h1>
                                <p className='text-[13px] md:text-[16px]'>Engage in logical arguments and critical thinking.</p>
                            </div>

                            <div className='text-left md:text-right space-y-2'>
                                <h1 className='text-[40px] font-bold text-blue-700 rounded-full  border-1 border-blue-400  hidden md:block'>22</h1>
                                <h1 className='text-blue-600 text-[20px] hidden md:block'>NOV</h1>

                                <h1 className='text-[20px] font-bold text-blue-700 rounded-full  border-1 block md:hidden'>22 NOV</h1>

                                <button className='btn btn-primary bg-blue-700 text-white flex-nowrap'>Accept Assignment</button>
                            </div>
                        </div>
                        <div className='bg-black rounded-2xl p-5 flex flex-col md:flex-row justify-between border-2 border-blue-600 shadow-purple-900 shadow-xl'>

                            <div className='text-left'>
                                <h1 className='text-[13px] md:text-[16px]'>Manchester, England</h1>
                                <h1 className='text-white text-[16px] lg:text-[24px]'>Storytelling Workshop</h1>
                                <p className='text-[13px] md:text-[16px]'>Learn the art of compelling storytelling.</p>
                            </div>

                            <div className='text-left md:text-right space-y-2'>
                                <h1 className='text-[40px] font-bold text-blue-700 rounded-full  border-1 border-blue-400  hidden md:block'>27</h1>
                                <h1 className='text-blue-600 text-[20px] hidden md:block'>NOV</h1>

                                <h1 className='text-[20px] font-bold text-blue-700 rounded-full  border-1 block md:hidden'>27 NOV</h1>

                                <button className='btn btn-primary bg-blue-700 text-white flex-nowrap'>Accept Assignment</button>
                            </div>
                        </div>
                        <div className='bg-black rounded-2xl p-5 flex flex-col md:flex-row justify-between border-2 border-blue-600 shadow-purple-900 shadow-xl'>

                            <div className='text-left'>
                                <h1 className='text-[13px] md:text-[16px]'>Bristol, England</h1>
                                <h1 className='text-white text-[16px] lg:text-[24px]'>Creative Writing Workshop</h1>
                                <p className='text-[13px] md:text-[16px]'>Explore your creative writing skills with guidance.</p>
                            </div>

                            <div className='text-left md:text-right space-y-2'>
                                <h1 className='text-[40px] font-bold text-blue-700 rounded-full  border-1 border-blue-400  hidden md:block'>28</h1>
                                <h1 className='text-blue-600 text-[20px] hidden md:block'>NOV</h1>

                                <h1 className='text-[20px] font-bold text-blue-700 rounded-full  border-1 block md:hidden'>28 NOV</h1>

                                <button className='btn btn-primary bg-blue-700 text-white flex-nowrap'>Accept Assignment</button>
                            </div>
                        </div>
                        <div className='bg-black rounded-2xl p-5 flex flex-col md:flex-row justify-between border-2 border-blue-600 shadow-purple-900 shadow-xl'>

                            <div className='text-left'>
                                <h1 className='text-[13px] md:text-[16px]'>Liverpool, England</h1>
                                <h1 className='text-white text-[16px] lg:text-[24px]'>Public Speaking Workshop</h1>
                                <p className='text-[13px] md:text-[16px]'>Enhance your public speaking skills and confidence.</p>
                            </div>

                            <div className='text-left md:text-right space-y-2'>
                                <h1 className='text-[40px] font-bold text-blue-700 rounded-full  border-1 border-blue-400  hidden md:block'>30</h1>
                                <h1 className='text-blue-600 text-[20px] hidden md:block'>NOV</h1>

                                <h1 className='text-[20px] font-bold text-blue-700 rounded-full  border-1 block md:hidden'>30 NOV</h1>

                                <button className='btn btn-primary bg-blue-700 text-white flex-nowrap flex space-x-3 items-center'>
                                    <h1>Register</h1>
                                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                                </button>
                            </div>
                        </div>

                    </div> */}
                    {/* something else starts here */}

{/* 
                    <section className="bg-gray-900 text-white font-mons">
                        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                            <div className="mx-auto max-w-lg text-center">
                                <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your Learning</h2>

                                <p className="mt-4 text-gray-300">
                                    Unlock new skills and knowledge to advance your personal and professional growth. Embrace opportunities, overcome challenges, and achieve your goals with confidence.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                    href="#"
                                >
                                    <MdScreenLockLandscape className='text-pink-500 w-[40px] h-[40px]'></MdScreenLockLandscape>

                                    <h2 className="mt-4 text-xl font-bold text-white">User-Friendly Interface</h2>

                                    <p className="mt-1 text-sm text-gray-300">
                                        Simple design ensures easy navigation and quick access to essential features, enhancing the overall user experience.
                                    </p>
                                </a>

                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                    href="#"
                                >
                                    <MdApi className='text-pink-500 w-[40px] h-[40px]'></MdApi>

                                    <h2 className="mt-4 text-xl font-bold text-white">Secure Access</h2>

                                    <p className="mt-1 text-sm text-gray-300">
                                        Advanced security protocols protect user data, ensuring privacy and safety.
                                    </p>
                                </a>

                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                    href="#"
                                >
                                    <MdDocumentScanner className='text-pink-500 w-[40px] h-[40px]'></MdDocumentScanner>

                                    <h2 className="mt-4 text-xl font-bold text-white">Multiple Formats</h2>

                                    <p className="mt-1 text-sm text-gray-300">
                                        Supports various file types, accommodating diverse assignment submissions.
                                    </p>
                                </a>

                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                    href="#"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-10 text-pink-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>

                                    <h2 className="mt-4 text-xl font-bold text-white"> Real-Time Feedback</h2>

                                    <p className="mt-1 text-sm text-gray-300">
                                        Immediate feedback on assignments enables timely improvements and learning.
                                    </p>
                                </a>

                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                    href="#"
                                >
                                    <MdAnalytics className='text-pink-500 w-[40px] h-[40px]'></MdAnalytics>

                                    <h2 className="mt-4 text-xl font-bold text-white"> Performance Analytics</h2>

                                    <p className="mt-1 text-sm text-gray-300">

                                        Detailed metrics track and analyze academic performance, providing insights for improvement.
                                    </p>
                                </a>

                                <a
                                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                    href="#"
                                >
                                    <FaRobot className='text-pink-500 w-[40px] h-[40px]'></FaRobot>

                                    <h2 className="mt-4 text-xl font-bold text-white">AI Assistence</h2>

                                    <p className="mt-1 text-sm text-gray-300">
                                        Utilizes AI to offer personalized study tips and automate routine tasks, enhancing efficiency and learning.
                                    </p>
                                </a>
                            </div>

                            <div className="mt-12 text-center">
                                <a
                                    href="#"
                                    className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </section> */}


                    {/* <div className='font-mons py-6 my-10'>
                        <div className='flex space-x-2 items-center justify-center mb-3'>
                            <h1 className='text-[17px] md:text-[36px] text-center font-light'>Explore Our new blogs section </h1>
                            <FaBlog className='w-[40px] h-[40px] text-pink-500'></FaBlog>
                        </div>
                        <p className='text-center font-extralight'>Stay updated with insightful articles, expert tips, and the latest trends. Enhance your knowledge and skills with our engaging content.</p>
                    </div> */}


                    {/* <section className='max-w-7xl grid grid-cols-3 mx-auto gap-[24px]'>
                        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-xl">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="relative bg-gradient-to-t from-gray-900/30 to-gray-900/90 pt-32 sm:pt-48 lg:pt-64">
                                <div className="p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2023 </time>

                                    <a href="#">
                                        <h3 className="mt-0.5 text-lg text-white">Optimize Your Study Space for Productivity</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        Creating a positive and organized study environment enhances focus and efficiency. Discover tips to arrange your study area for maximum productivity and success.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/flat-lay-bullet-journals-paper-clips_23-2149740086.jpg?t=st=1721911171~exp=1721914771~hmac=f4a706b1842545f4893dedf32cd42fb5768b852ac0c5001dee0f507a76fa8429&w=1060"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="relative bg-gradient-to-t from-gray-900/30 to-gray-900/90 pt-32 sm:pt-48 lg:pt-64">
                                <div className="p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-white/90"> 18th Nov 2023 </time>

                                    <a href="#">
                                        <h3 className="mt-0.5 text-lg text-white">Maintain a Balanced Diet for Study Consistency</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        A balanced diet is crucial for sustaining energy and concentration levels. Learn how to incorporate nutritious meals into your routine for consistent study performance.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/bored-male-student-while-studying_329181-19642.jpg?t=st=1721911238~exp=1721914838~hmac=d1e5779fe1734d14349d955795e66a855636094c406a17c5513814218d474991&w=1060"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="relative bg-gradient-to-t from-gray-900/30 to-gray-900/90 pt-32 sm:pt-48 lg:pt-64">
                                <div className="p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th July 2024 </time>

                                    <a href="#">
                                        <h3 className="mt-0.5 text-lg text-white">Effective Exam Strategies for Success</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        Develop a strategic approach to exam preparation. Explore proven techniques to manage time, reduce stress, and maximize your performance on exam day.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </section> */}

                   

                    {/* <section class="bg-white dark:bg-gray-900">
                        <div class="container px-6 py-8 mx-auto">
                            <h2 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2>

                            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div class="w-full max-w-xs text-center">
                                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

                                    <div class="mt-2">
                                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Saad Ibn Akhter</h3>
                                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
                                    </div>
                                </div>

                                <div class="w-full max-w-xs text-center">
                                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                                    <div class="mt-2">
                                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
                                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">COO</span>
                                    </div>
                                </div>

                                <div class="w-full max-w-xs text-center">
                                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />

                                    <div class="mt-2">
                                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
                                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Chief Product Manager</span>
                                    </div>
                                </div>

                                <div class="w-full max-w-xs text-center">
                                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

                                    <div class="mt-2">
                                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
                                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">Development Team Lead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <section class="bg-white dark:bg-gray-900">
                        <div class="container px-6 py-12 mx-auto">
                            <div>
                                <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

                                <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Chat to our friendly team</h1>

                                <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                            </div>

                            <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                                    </div>

                                    <div>
                                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Live chat</h2>
                                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                                    </div>

                                    <div>
                                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                                    </div>

                                    <div>
                                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>

                                        <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                        <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                                    </div>
                                </div>

                                <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                                    <form>
                                        <div class="-mx-2 md:items-center md:flex">
                                            <div class="flex-1 px-2">
                                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                                <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>

                                            <div class="flex-1 px-2 mt-4 md:mt-0">
                                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                                <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div class="w-full mt-4">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                        </div>

                                        <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Send message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section> */}


                    

                </div>
            </div>
        </>
    );
};

export default Home2;
