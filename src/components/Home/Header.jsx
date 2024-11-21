export const Header = () => {
  return (
    <div className="mb-16 font-mons">
      {/* Header Section */}
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Math Matters - <span className="flex space-x-2 items-center">
                  <img className="w-[20px] h-[20px]" src="https://www.globalsocialleaders.com/wp-content/uploads/2016/08/United-Learning-Logo.png" alt="" />
                  <span className="text-blue-400">Manchester Academy</span>
                </span>
              </p>
            </div>
            <h2 className="max-w-screen-lg mb-6 font-mons text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">Start your Math</span>
              </span>
              <span className="text-orange-500"> journey</span> With  <span className="text-red-500">MathMatters</span>

            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Let's smash mathematics together! Our platform offers seamless tools for assignment submissions, grading, and fostering mathematical growth with efficiency and ease.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Have A Go With Questions
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-pink-500 hover:bg-pink-700 focus:shadow-outline focus:outline-none"
            >
              Contests
            </button>
          </div>
        </div>
      </div>
      {/* Feature Highlights */}
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-purple-500"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Resources
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-purple-500"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Model Solutions
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-purple-500"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Better Contests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
