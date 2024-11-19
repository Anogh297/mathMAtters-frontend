import React, { useState, useEffect } from "react";

const SinglePageContest = () => {
    // Contest start and duration
    const contestStartTime = new Date("2024-11-19T17:58:00");
    const contestDuration = 2 * 60 * 1000; // 5 minutes in milliseconds
    const contestEndTime = new Date(contestStartTime.getTime() + contestDuration);
    const [pass, setPass] = useState(false);
    const [r, sr] = useState(false);
    const [password, setPassword] = useState('abc');

    const [status, setStatus] = useState("waiting"); // 'waiting', 'running', 'ended'
    const [timeLeft, setTimeLeft] = useState("");
    const [submissions, setSubmissions] = useState([]); // Store submissions here
    const [user, setUser] = useState("");
    const [answers, setAnswers] = useState({}); // Store answers for multiple questions 

    const handlePass = (e) => {
        e.preventDefault();
        const pk = e.target.pass.value;
        if (pk == password) {
            setPass(true);
        }

    }

    const handleReg = (e) => {
        e.preventDefault();
        console.log('pressed');
        sr(true);
    }

    // Contest JSON Data
    const contestData = {
        contest: {

            name: "Math-Matters Contest #1",
            start_time: "2024-11-25T08:00:00Z",
            duration_minutes: 5,
            description: "Solve these basic math problems within the time limit!",
            problems: [
                {
                    id: 1,
                    title: "Sum of Two Numbers",
                    description: "Given two integers, find their sum.",

                    answer: 8,
                },
                {
                    id: 2,
                    title: "Greatest Common Divisor",
                    description: "Find the greatest common divisor (GCD) of two numbers.",

                    answer: 3,
                },
                {
                    id: 3,
                    title: "Count Divisors",
                    description:
                        "Count the number of divisors of a given integer.",

                    answer: 4,
                },
            ],
        },
    };

    // Timer Update
    useEffect(() => {
        const updateTimer = () => {
            const currentTime = new Date();

            if (currentTime < contestStartTime) {
                // Contest hasn't started yet
                const diff = contestStartTime - currentTime;
                updateTimeLeft(diff);
                setStatus("waiting");
            } else if (currentTime >= contestStartTime && currentTime < contestEndTime) {
                // Contest is running
                const diff = contestEndTime - currentTime;
                updateTimeLeft(diff);
                setStatus("running");
            } else {
                // Contest has ended
                setTimeLeft("");
                setStatus("ended");
            }
        };

        const updateTimeLeft = (diff) => {
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setTimeLeft(
                `${minutes < 10 ? "0" : ""}${minutes}m ${seconds < 10 ? "0" : ""
                }${seconds}s`
            );
        };

        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [contestStartTime, contestEndTime]);

    //  Submission
    const handleSubmission = () => {
        if (user) {
            const score = Object.keys(answers).reduce((acc, questionId) => {
                const problem = contestData.contest.problems.find(
                    (p) => p.id === parseInt(questionId)
                );
                if (problem && parseInt(answers[questionId]) === problem.answer) {
                    return acc + 100;
                }
                return acc;
            }, 0);

            const newSubmission = { user, score };
            setSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);
            setAnswers({});
            setUser("");
        }
    };


    const sortedSubmissions = submissions.sort((a, b) => b.score - a.score);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 font-mons">
            <div className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg">
                {/* Contest Status */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-blue-500">
                        {contestData.contest.name}
                    </h1>
                    <p className="mt-2 text-gray-700">{contestData.contest.description}</p>
                </div>
                {status === "waiting" && (
                    <div className="text-center">
                        <p className="text-xl font-medium text-gray-700">
                            Time remaining to start: {timeLeft}
                        </p>
                    </div>
                )}
                {status === "running" && (
                    <div>
                        <p className="text-xl font-medium text-gray-700 text-center">
                            Time remaining: {timeLeft}
                        </p>
                        <div className="mt-6">
                            <input
                                type="text"
                                className="input input-bordered w-full mb-4"
                                placeholder="Your Name"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                            {contestData.contest.problems.map((problem) => (
                                <div key={problem.id} className="mb-6">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {problem.title}
                                    </h2>
                                    <p className="text-gray-700">{problem.description}</p>

                                    <input
                                        type="text"
                                        className="input input-bordered w-full mt-2"
                                        placeholder="Your Answer"
                                        value={answers[problem.id] || ""}
                                        onChange={(e) =>
                                            setAnswers((prev) => ({
                                                ...prev,
                                                [problem.id]: e.target.value,
                                            }))
                                        }
                                    />
                                </div>
                            ))}
                            <button className="btn btn-primary w-full" onClick={handleSubmission}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
                {status === "ended" && (
                    <div className="text-center">
                        <p className="text-xl font-medium text-gray-700">
                            The contest has ended. Thank you for participating!
                        </p>

                    </div>
                )}

                <div className="font-mons text-center mx-auto">
                    <form action="" onSubmit={handlePass}>

                        {
                            pass ? <>
                                <p className="text-lg font-semibold text-blue-500">You have Registered succesfully!</p>
                            </>
                                :
                                <>
                                    {
                                        r? <>
                                        <h1>passs key : abc</h1>
                                        </>
                                            :
                                            <>
                                                <fomr className="text-[18px] btn  font-semibold text-blue-500" onSubmit={handleReg}>
                                                    Register
                                                </fomr>
                                            </>
                                    }
                                    <p className="text-lg font-semibold text-blue-500">enter the passkey</p>
                                    <input type="text " placeholder="passkey" name="pass" id="" />
                                </>
                        }
                    </form>

                </div>

                {/* Leaderboard */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-center text-blue-500">
                        Leaderboard
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>User</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedSubmissions.map((submission, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{submission.user}</td>
                                        <td>{submission.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePageContest;
