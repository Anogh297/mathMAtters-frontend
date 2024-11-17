import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
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
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className="bg-gray-100 bg-math2 bg-opacity-75 bg-fixed bg-blend-overlay min-h-screen p-5 font-mons">
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
                            <div className="w-[500px] h-[300px]  rounded">
                                {/* Add your chart library or component */}

                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Solves */}
                <div className='flex '>
                    <div className="mt-6 w-[35%] bg-white shadow-md rounded-lg p-5">
                        <h2 className="text-lg font-semibold mb-3">Recent Solves</h2>
                        <ul>
                            {recentSolves.map((solve, index) => (
                                <li key={index} className="text-gray-600 py-1">
                                    {index + 1}. {solve}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-[65%] bg-white mt-6' >
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie dataKey="value" data={data2} fill="#8884d8" label />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
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
