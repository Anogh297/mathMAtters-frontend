export const About = () => {
    return (
        <div className="px-4 py-16 font-mons mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {/* <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points=" 8,5 8,1 16,1 16,5"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="9,15 1,15 1,5 23,5 23,15 15,15"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="22,18 22,23 2,23 2,18"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="9"
                                y="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                width="6"
                                height="4"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-mons text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Let us handle
                            <br className="hidden md:block" />
                            your next{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                destination
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://i.pinimg.com/736x/db/66/09/db66098a26ea1b05778ba9923fe12e91.jpg"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://i.pinimg.com/736x/38/5f/ff/385fffa30e5b8a8ca00674cd7d3310be.jpg"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://i.pinimg.com/736x/88/08/d8/8808d86ed00240b0d5f386dc17d5fc72.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto sm:text-center lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-mons text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            quick, brown fox jumps over a lazy dog
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src="https://i.pinimg.com/736x/1a/1d/b2/1a1db2eca397b87944efdb04fe233a0a.jpg"
                            alt=""
                        />
                    </div>
                    <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud ullamco laboris aliquip ex ea.
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div> */}
               <div className="px-4 py-16 font-mons mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points=" 8,5 8,1 16,1 16,5"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="9,15 1,15 1,5 23,5 23,15 15,15"
                                strokeLinejoin="round"
                            />
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="22,18 22,23 2,23 2,18"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="9"
                                y="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                width="6"
                                height="4"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-mons text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Unlock the Power of
                            <br className="hidden md:block" />
                            <span className="inline-block text-deep-purple-accent-400">
                                Mathematics
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            At Math-Matters, we believe in making math accessible and engaging for everyone. Whether you're preparing for exams or just love solving puzzles, we offer a range of problems to help you improve your skills.
                        </p>
                    </div>
                    <div>
                        <a
                            href="/"
                            aria-label="Learn more about our resources"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://i.pinimg.com/736x/db/66/09/db66098a26ea1b05778ba9923fe12e91.jpg"
                            alt="Math visual"
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://i.pinimg.com/736x/38/5f/ff/385fffa30e5b8a8ca00674cd7d3310be.jpg"
                            alt="Math problem"
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://i.pinimg.com/736x/88/08/d8/8808d86ed00240b0d5f386dc17d5fc72.jpg"
                            alt="Math in practice"
                        />
                    </div>
                </div>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto sm:text-center lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                New on Math-Matters
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-mons text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The Best Way to Learn</span>
                            </span>{' '}
                            Math with Fun, Problem Solving, and Strategy
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            We provide users with easy-to-understand, interactive problems that help you master different math concepts. Join our community and start your journey towards becoming a math expert today.
                        </p>
                    </div>
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src="https://i.pinimg.com/736x/1a/1d/b2/1a1db2eca397b87944efdb04fe233a0a.jpg"
                            alt="Math problem solving"
                        />
                    </div>
                    <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                        Whether you're learning algebra, geometry, or tackling brain teasers, Math-Matters is here to guide you through the learning process with easy-to-follow instructions and diverse challenges.
                    </p>
                    <a
                        href="/"
                        aria-label="Learn more about our resources"
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
            <div >
                <h1 className="text-center mx-auto text-[24px] font-bold">Meet our lovely team</h1>
            </div>
            <div>
                <div className="px-4 font-mons py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Saad Ibn Akhter</p>
                                <p className="mb-4 text-xs text-gray-800">Founder, Lead Developer & Problem Setter</p>
                                {/* <p className="text-sm tracking-wide text-gray-800">
                                    Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
                                    cuppa unhand me sir hadn't done it in donkey's years sod's law.
                                </p> */}
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Mubtasim Ahsan Taha</p>
                                <p className="mb-4 text-xs text-gray-800">Front End Developer , MathMatters</p>
                                {/* <p className="text-sm tracking-wide text-gray-800">
                                    Secondary fermentation degrees plato units of bitterness, cask
                                    conditioned ale ibu real ale pint glass craft beer. krausen goblet
                                    grainy ibu.
                                </p> */}
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Alexandria Bakharev</p>
                                <p className="mb-4 text-xs text-gray-800">Problem Setter</p>
                                {/* <p className="text-sm tracking-wide text-gray-800">
                                    I just closed my eyes and in a nanosecond I cured myself from this
                                    ridiculous model of disease, addiction and obsession.
                                </p> */}
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Martin Garix </p>
                                <p className="mb-4 text-xs text-gray-800">Contestant & Problem Setter</p>
                                {/* <p className="text-sm tracking-wide text-gray-800">
                                    Est Schlitz shoreditch fashion axe. Messenger bag cupidatat
                                    Williamsburg sustainable aliqua, umami shabby chic artisan duis
                                    pickled.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};