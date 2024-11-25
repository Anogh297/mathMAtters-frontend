import React from 'react';

const UserProfile = () => {
    const user = {
        name: "Saad Ibn Akhter",
        email: "saad.e.alif2010@gmail.com",
        username: "saad_1e7",
        dob: "2010-10-10",
        totalSolved: 154,
        bio: "Passionate about coding and solving problems.",
    };

    return (
        <div className="min-h-screen bg-gray-100 font-mons space-y-5 flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
                <div className="flex flex-col items-center">
                    <img
                        className="w-24 h-24 rounded-full shadow-lg mb-4"
                        src="https://via.placeholder.com/150"
                        alt={`${user.name}'s profile`}
                    />
                    <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-gray-500">@{user.username}</p>
                </div>
                <div className="mt-6">
                    <p className="text-gray-800 font-medium mb-2">Email:</p>
                    <p className="text-gray-700 bg-gray-100 p-2 rounded-md">{user.email}</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-800 font-medium mb-2">Date of Birth:</p>
                    <p className="text-gray-700 bg-gray-100 p-2 rounded-md">{user.dob}</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-800 font-medium mb-2">Total Solved Problems:</p>
                    <p className="text-gray-700 bg-gray-100 p-2 rounded-md">{user.totalSolved}</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-800 font-medium mb-2">Bio:</p>
                    <p className="text-gray-700 bg-gray-100 p-2 rounded-md">{user.bio}</p>
                </div>
                <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full">
                    Edit Profile
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
