import React from "react";
import { Link } from "react-router-dom";

const CurrentContest = () => {
  return (
    <div className="bg-gray-100 min-h-screen">


      {/* Content Section */}
      <main className="max-w-7xl font-mons mx-auto mt-8 p-4 bg-white rounded shadow-md">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Left Section */}
          <div className="w-full md:w-3/5">
            <img
              src="https://gzcdn.sgp1.digitaloceanspaces.com/uploads/1732034258_b42e6788f1b391d95030.png"
              alt="Contest Banner"
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-2/5">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <Link to="/contest/100">
                Calibration Round #60
              </Link>
            </h2>
            <p className="text-gray-600">
              The contest will start on{" "}
              <strong>November 22, 2024, at 9:00 PM UTC+6</strong> and will run
              for <strong>1 hour</strong>.
            </p>

            {/* Schedule */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Schedule
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>
                  <strong>Start:</strong> November 22, 2024, 9:00 PM UTC+6
                </li>
                <li>
                  <strong>Duration:</strong> 1 Hour
                </li>
              </ul>
            </div>

            {/* Rules */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Rules</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Be fair, be honest.</li>
                <li>Judge's decisions will be final.</li>
                <li>
                  Some problems may have a submission limit. If so, that will be
                  mentioned above the problem statement.
                </li>
                <li>
                  For any queries, ask through the Clarification page.
                </li>
              </ul>
            </div>

            {/* Rating */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Rating
              </h3>
              <p className="text-gray-600">
                The contest will be rated for all participants making at least
                one submission. The rating changes will be applied once the
                contest ends. Gonitzoggo uses the ELO-MMR algorithm for rating
                calculation.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
                Login To Participate
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded shadow hover:bg-gray-300 transition ml-4">
                View Scoreboard
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurrentContest;
