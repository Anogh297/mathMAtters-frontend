import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Authprovider/AuthProvider";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    // const {user} = useContext(AuthContext);

    const toggleDropdown = () => setIsOpen(!isOpen);


    return (
        <>
            <div className=" font-mons top-0 sticky z-50 shadow-lg shadow-slate-700/5 bg-white/90 ">
                <header className=" max-w-8xl mx-auto border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90  after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                    <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                        <nav
                            aria-label="main navigation"
                            className="flex h-[5.5rem] items-stretch text-[14.5px] justify-between font-medium text-slate-700"
                            role="navigation"
                        >
                            {/*      <!-- Brand logo --> */}
                            <Link to='/'>
                                <div className="uppercase  font-semibold flex items-center gap-2 whitespace-nowrap py-3 text-[22px] focus:outline-none lg:flex-1" >
                                    <img width="80" height="80" src="https://img.icons8.com/officel/80/math.png" alt="math" />
                                    <div className=" ">
                                    
                                        <h1 className="leading-tight tracking-tighter">Math <span className="text-red-700 font-bold leading-tight tracking-tighter">MAtters</span></h1>
                                        <h1 className="text-[11px] ">Let's smash <span className="text-green-600">Ma</span><span className="text-red-600">the</span><span className="text-green-600">matics <span className="text-gray-600">-Mancester Academy</span></span></h1>
                                    </div>
                                </div>
                            </Link>

                            {/*      <!-- Mobile trigger --> */}
                            <button
                                className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                        : ""
                                    }
            `}
                                onClick={() => setIsToggleOpen(!isToggleOpen)}
                                aria-expanded={isToggleOpen ? "true" : "false"}
                                aria-label="Toggle navigation"
                            >
                                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                    ></span>
                                </div>
                            </button>
                            {/*      <!-- Navigation links --> */}
                            <ul
                                role="menubar"
                                aria-label="Select page"
                                className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-4 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                    ? "visible opacity-100 backdrop-blur-sm"
                                    : "invisible opacity-0"
                                    }`}
                            >

                                <li role="none" className="flex items-stretch">
                                    <Link
                                        to={'/problempage'}
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2">
                                        <span>Problems</span>
                                    </Link>
                                </li>
                                <li role="none" className="flex items-stretch">
                                    <Link
                                        to={`/bloodbank`}
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2">
                                        <span>Contest</span>
                                    </Link>
                                </li>
                                <li role="none" className="flex items-stretch">
                                    <Link
                                        to={`/blogs`}
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2">
                                        <span>Blogs</span>
                                    </Link>
                                </li>
                              

                                <Link to='/about' className="flex items-stretch">

                                    <a
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2"
                                        href="javascript:void(0)"
                                    >
                                        <span>About Us</span>
                                    </a>

                                </Link>
                                <Link to='dashboard/adminHome' className="flex items-stretch">

                                    <a
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300  hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2"
                                        href="javascript:void(0)"
                                    >
                                        <span>Leaderboard</span>
                                    </a>

                                </Link>
                                <li role="none" className="relative flex lg:translate-y-7">
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex btn btn-sm bg-green-100 text-green-500 lg:ml-12 items-center transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none lg:px-2"
                                    >
                                        Account
                                    </button>
                                    {isOpen && (
                                        <ul className="absolute right-0 mt-2 w-[200px] p-3 bg-white border border-gray-300 rounded shadow-lg">
                                            <li role="none" className="flex">

                                                <Link
                                                    to={`/login`}
                                                    className="flex btn w-full btn-sm text-green-500 items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-100 focus:outline-none"
                                                >

                                                    <span>Login</span>
                                                </Link>
                                            </li>
                                            <li role="none" className="flex">
                                                <Link
                                                    to={`/register`}
                                                    className="flex w-full mt-2 btn btn-sm text-green-500 items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-100 focus:outline-none"
                                                >
                                                    <span>Register</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                            </ul>
                            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                                {/*        <!-- Avatar --> */}
                                <a
                                    href="#"
                                    className="relative inline-flex  items-center justify-center  text-white"
                                >
                                    <img
                                        src='https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/practice.webp'
                                        // alt="user name"
                                        // title={user?.displayName}

                                        className="w-[53px] h-[53px] rounded-full hidden md:block "
                                    />

                                </a>
                                {/*        <!-- End Avatar --> */}
                            </div>
                        </nav>
                    </div>
                </header>
            </div>

            {/*<!-- End Navbar with Avatar--> */}
        </>
    )
}

export default Navbar;