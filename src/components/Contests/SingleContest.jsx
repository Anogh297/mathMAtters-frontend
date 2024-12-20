import React, { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { key } from "localforage";

const SinglePageContest = () => {


    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [ids, setIds] = useState([]);
    const [disable, setDisable] = useState(false);


    const contestStartTime = new Date("2024-11-27T11:00:00");
    const contestDuration = 10000 * 60 * 1000; // 100 minutes
    const contestEndTime = new Date(contestStartTime.getTime() + contestDuration);
    const [pass, setPass] = useState(false);
    const [r, sr] = useState(false);
    const [password, setPassword] = useState('abc');
    const [status, setStatus] = useState("waiting"); // 'waiting', 'running', 'ended'
    const [timeLeft, setTimeLeft] = useState("");

    const [submissions, setSubmissions] = useState([]); // Storing submissions 
    const [USER, setUSER] = useState("");
    const [answers, setAnswers] = useState({});
    const [leaderboard, setLeaderboard] = useState([]);
    const [suck, setSuck] = useState([]);
    const [contest, setContest] = useState([]);

    const handlePass = (e) => {
        e.preventDefault();
        const pk = e.target.pass.value;
        if (pk == password) {
            setPass(true);
        }

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
                    title: "Sum of Two Numbers 3+5",
                    description: "Given two integers, find their sum.",

                    answer: 8,
                },
                {
                    id: 2,
                    title: "Greatest Common Divisor 3,6",
                    description: "Find the greatest common divisor (GCD) of two numbers.",

                    answer: 3,
                },
                {
                    id: 3,
                    title: "Count Divisors of 10",
                    description:
                        "Count the number of divisors of a given integer.",

                    answer: 4,
                },
            ],
        },
    };
    useEffect(() => {
        axiosPublic.get('/contests/673cc45f6a0f519a48b4335d')
            .then(res => {
                console.log("leaderboard", res.data)
                const x = res.data.contestants;
                console.log(x)
                console.log("for the whole contest :", res.data);
                setLeaderboard(x);
                // TODO:
                setSuck(x);
                setContest(res.data);

            })
            .catch(error => console.error(error))
    }, [])

    // console.log("blood sucking website :", suck)

    useEffect(() => {
        const updateTimer = () => {
            const currentTime = new Date();

            if (currentTime < contestStartTime) {

                const diff = contestStartTime - currentTime;
                updateTimeLeft(diff);
                setStatus("waiting");
            } else if (currentTime >= contestStartTime && currentTime < contestEndTime) {

                const diff = contestEndTime - currentTime;
                updateTimeLeft(diff);
                setStatus("running");
            } else {

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

        return () => clearInterval(timer);
    }, [contestStartTime, contestEndTime]);

    //  Submission
    const handleSubmission = () => {
        if (USER) {
            const score = Object.keys(answers).reduce((acc, questionId) => {
                const problem = contestData.contest.problems.find(
                    (p) => p.id === parseInt(questionId)
                );
                if (problem && parseInt(answers[questionId]) === problem.answer) {
                    return acc + 100;
                }
                return acc;
            }, 0);

            const newSubmission = { USER, score };
            setSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);
            setAnswers({});
            setUSER("");
        }
    };
    const sortedSubmissions = submissions.sort((a, b) => b.score - a.score);

    const aggregateContestants = (contestants) => {
        // aggr. email
        const aggregatedScores = contestants.reduce((acc, contestant) => {
            const { email, name, score } = contestant;
            const idx = contestant?.problemIndex;

            const numericScore = parseInt(score, 10);
            if (!acc[email]) {
                acc[email] = { email, name, totalScore: 0 };
            }
            acc[email].totalScore += numericScore;
            return acc;
        }, {});


        const sortedLeaderboard = Object.values(aggregatedScores).sort(
            (a, b) => b.totalScore - a.totalScore
        );

        return sortedLeaderboard;
    };

    const sortedLeaderboard = aggregateContestants(suck);


    const handleRegister = (e) => {
        e.preventDefault();
        console.log('pressed');
        const contestant = {
            email: user?.email,
            name: user?.displayName,
            score: 0,
        }

        console.log(contestant);
        axiosPublic.patch(`/contests/673cc45f6a0f519a48b4335d/contestants`, { contestant })
            .then(res => {
                console.log(res.data)
                if (res.data.status === "success") {
                    toast.success('Registered successfully + Submitted to server!');
                } else if (res.data.status == "error") {
                    toast.error('Already Registered for the contest.');
                }
            })
            .catch(error => console.error(error))
    }


    const handleSubmission2 = (e, pro, index) => {
        e.preventDefault();
        console.log('Submitted the answer');

        const answer = parseInt(e.target.answer.value);
        const pr_ans = parseInt(pro.answer);
        console.log('answer', answer);

        console.log('pinged the button and index is --->', index);

        if (pr_ans == answer) {
            console.log('correct answer');
            setIds((prevIds) => [...prevIds, index]);
            const storedIds = JSON.parse(localStorage.getItem('submittedProblemIds')) || [];

            // Avoid duplicate submissions
            if (!storedIds.includes(index)) {
                // Update localStorage
                localStorage.setItem('submittedProblemIds', JSON.stringify([...storedIds, index]));
                console.log(`Problem ${index + 1} submitted!`);
            } else {
                console.log(`Problem ${index + 1} already submitted!`);
            }
         
            const point = 120;
            const contestant = {
                email: user?.email,
                name: user?.displayName,
                score: point,
                problemIndex: index,
            }

            axiosPublic.patch(`/contests/673cc45f6a0f519a48b4335d/contestants/submissions`, { contestant })
                .then(res => {
                    console.log(res.data)
                    if (res.data.status === "success") {

                        console.log("correct answer + pinged the server");
                    } else if (res.data.status == "error") {

                        console.log("useless conditioning mate dont worry !");
                    }
                })
                .catch(error => console.error(error))
            toast.success("Well done ! That's the correct answer !")

        } else {

            console.log(" Ahh ! You got it Wrong ,Try Again!");
            toast.error("Ahh ! You got it Wrong ,Try Again!");
        }

    }
    console.log('all the ids : ===', ids);
    
    // console.log('results i got ', contest);

    

    // // Usage in React
    // const [submittedProblems, setSubmittedProblems] = useState(loadFromLocalStorage());
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 font-mons">
            <div className="w-full max-w-6xl p-6 bg-white rounded-xl shadow-lg">
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
                            Starts in : {timeLeft}
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
                            />
                            {
                                contest.problems.map((problem, index) => (
                                    <div key={index} className="mb-6">
                                        {console.log('index', index)}
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {problem.title}
                                        </h2>
                                        <p className="text-gray-700">{problem.description}</p>

                                        <form action="" className="text-black" onSubmit={(e) => handleSubmission2(e, problem, index)} >
                                            <div className="flex space-x-2 items-center m-auto">
                                                <input
                                                    type="text"
                                                    className="input input-bordered w-full mt-2"
                                                    placeholder="Your Answer"
                                                    name="answer"
                                                />
                                                <button     disabled={(JSON.parse(localStorage.getItem('submittedProblemIds')) || []).includes(index)} type="submit" className="btn btn-primary"> Submit</button>
                                            </div>
                                        </form>
                                    </div>

                                ))
                            }

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

                    <form className="text-[18px] btn  font-semibold text-blue-500" onSubmit={handleRegister} >
                        <button>
                            Register
                        </button>
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
                                    <th>USER</th>
                                    <th>EMAIL</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedLeaderboard.map((submission, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{submission.name}</td>
                                        <td>{submission.email}</td>
                                        <td>{submission?.totalScore}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SinglePageContest;
