import React from "react";

const Profile = () => {
    const user = {
        username: "saadealif2010",
        fullName: "Saad Ibn Akhter",
        rank: 369,
        school: "Satkhira Police Lines Secondary School",
        joined: "1 year ago",
        badge: "Zeta",
        currentRating: 1340,
        maxRating: 1340,
        contests: 2,
    };

    const recentSolves = ["ভাগশেষ", "Large Exponent", "Easy Calculation", "Even Member"];

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* User Info Card */}
                    <div className="col-span-1 bg-white shadow-md rounded-lg p-5">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Profile"
                                className="w-20 h-20 rounded-full"
                            />
                            <div>
                                <h2 className="text-xl font-bold">{user.username}</h2>
                                <p className="text-gray-500">{user.fullName}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-600">Rank: <span className="font-bold">#{user.rank}</span></p>
                            <p className="text-gray-600">School: {user.school}</p>
                            <p className="text-gray-600">Joined: {user.joined}</p>
                        </div>
                        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                            Edit Profile
                        </button>
                    </div>

                    {/* Contest Rating Section */}
                    <div className="col-span-2 bg-white shadow-md rounded-lg p-5">
                        <h2 className="text-lg font-semibold mb-3">Contest Rating</h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600">Badge: <span className="font-bold">{user.badge}</span></p>
                                <p className="text-gray-600">Attended: {user.contests} Contests</p>
                                <p className="text-gray-600">
                                    Current Rating: <span className="font-bold">{user.currentRating}</span>
                                </p>
                                <p className="text-gray-600">
                                    Maximum Rating: <span className="font-bold">{user.maxRating}</span>
                                </p>
                            </div>
                            {/* Placeholder for Chart */}
                            <div className="w-[200px] h-[100px] bg-blue-200 rounded">
                                {/* Add your chart library or component */}
                                <p className="text-center pt-10">Chart Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Solves */}
                <div className="mt-6 bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-lg font-semibold mb-3">Recent Solves</h2>
                    <ul>
                        {recentSolves.map((solve, index) => (
                            <li key={index} className="text-gray-600 py-1">
                                {index + 1}. {solve}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Problems Section */}
                <div className="mt-6 bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-lg font-semibold mb-3">Problems</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-700">Math</h3>
                            <p className="text-gray-600 text-sm">10 Problems Solved</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-700">Physics</h3>
                            <p className="text-gray-600 text-sm">7 Problems Solved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
