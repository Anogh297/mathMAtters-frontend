import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../Authprovider/AuthProvider";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const { user } = useContext(AuthContext);

    const toggleDropdown2 = () => {
        setIsDropdownOpen2((prev) => !prev);
    };

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
                                        <h1 className="text-[11px] uppercase">Empowering minds through Mathmetics</h1>
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
                                className={`space-x-8 absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-4 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                    ? "visible opacity-100 backdrop-blur-sm"
                                    : "invisible opacity-0"
                                    }`}
                            >

                                <li role="none" className="flex items-stretch    uppercase h-[40px]    text-green-500 my-auto">
                                    <Link
                                        to={'/problempage'}
                                        className="flex items-center pb-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2">
                                        <div className="flex items-center">
                                            <img width="32" height="32" src="https://img.icons8.com/color/32/math-book.png" alt="math-book" />
                                            <span>Problems</span>
                                        </div>
                                    </Link>
                                </li>
                                <li role="none" className="flex items-stretch    rounded-xl h-[48px]  text-green-500 my-auto">
                                    <Link
                                        to={`/contests`}
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2">
                                        <div className="flex items-center">
                                            <img className="mr-1" width="32" height="32" src="https://img.icons8.com/color-pixels/32/contest.png" alt="contest" />
                                            {/* <img width="48" height="48" src="https://img.icons8.com/color/48/reference.png" alt="reference"/> */}
                                            <span>CONTESTS</span>
                                        </div>
                                    </Link>
                                </li>
                                <li role="none" className="flex items-stretch    rounded-xl h-[48px] text-green-500 my-auto">
                                    <Link
                                        to={`/matharticles`}
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2">
                                        <div className="flex items-center">
                                            {/* <img className="mr-1" width="32" height="32" src="https://img.icons8.com/color-pixels/32/contest.png" alt="contest" /> */}
                                            <img className="mr-1" width="32" height="32" src="https://img.icons8.com/color/32/reference.png" alt="reference" />
                                            <span>RESOURCES</span>
                                        </div>
                                    </Link>
                                </li>
                                <li role="none" className="flex items-stretch    rounded-xl h-[48px] text-green-500 my-auto">
                                    <Link
                                        to={`/aboutus`}
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-2">
                                        <div className="flex items-center">
                                            {/* <img className="mr-1" width="32" height="32" src="https://img.icons8.com/color-pixels/32/contest.png" alt="contest" /> */}
                                            <img className="mr-1" width="32" height="32" src="https://img.icons8.com/dusk/32/user-group-man-woman.png" alt="user-group-man-woman" />
                                            <span>ABOUT US</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                                {/*        <!-- Avatar --> */}
                                <div className="relative inline-flex items-center justify-center text-white">

                                    <div className="relative">
                                        <div className="inline-flex items-center overflow-hidden rounded-md  bg-white">
                                            <a
                                                href="#"
                                                className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                                            >

                                            </a>
                                            <button onClick={toggleDropdown2}>
                                                <div className="flex space-x-2 items-center text-black">
                                                    <h1 className="uppercase">{user?.displayName}</h1>
                                                    <img
                                                        src="https://gzcdn.sgp1.cdn.digitaloceanspaces.com/assets/v2.9.3/images/practice.webp"
                                                        alt="User Avatar"
                                                        className="w-[53px] h-[53px] rounded-full hidden md:block"
                                                    />
                                                </div>

                                                <span className="sr-only">Menu</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-4"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Dropdown menu */}
                                        {isDropdownOpen2 && (
                                            <div
                                                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                                                role="menu"
                                            >
                                                <div className="p-2">
                                                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
                                                        General
                                                    </strong>
                                                    <Link
                                                        to='/profile'
                                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                        role="menuitem"
                                                    >
                                                        Dashboard
                                                    </Link>
                                                    <Link
                                                        to='/application'
                                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                        role="menuitem"
                                                    >
                                                        Become Problem Setter
                                                    </Link>
                                                    <Link
                                                        to='/leaderboard'
                                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                        role="menuitem"
                                                    >
                                                        Leaderboard
                                                    </Link>
                                                    <Link
                                                        to='/admin'
                                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                        role="menuitem"
                                                    >
                                                        Admin Panel
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                        role="menuitem"
                                                    >
                                                        About Us
                                                    </Link>
                                                    <Link
                                                        to='/setproblem'
                                                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                        role="menuitem"
                                                    >
                                                        Add Problem
                                                    </Link>
                                                </div>

                                                <div className="p-2">
                                                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400">
                                                        Danger Zone
                                                    </strong>
                                                    <form method="POST" action="#">
                                                        <Link to='/register'>
                                                            <button
                                                                type="submit"
                                                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                                                                role="menuitem"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="size-4"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                    />
                                                                </svg>
                                                                Register
                                                            </button>
                                                        </Link>
                                                    </form>
                                                    <form method="POST" action="#">
                                                        <Link to='/login'>
                                                            <button
                                                                type="submit"
                                                                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                                                                role="menuitem"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="size-4"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                    />
                                                                </svg>
                                                                Login
                                                            </button>
                                                        </Link>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
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


