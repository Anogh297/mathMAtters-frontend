


import React, { useContext, useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import Sparkle from 'react-sparkle';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Problem = () => {
    const [problem, setProblem] = useState(null);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    console.log(user?.email);

    const [currentUser, setCurrentUser] = useState([]);
    useEffect(() => {
        axiosPublic.get('/users')
            .then(res => {
                console.log(res.data);
                const alldata = res.data;
                const specificUser = alldata.find(x => x.email == user?.email);
                if (specificUser) {
                    setCurrentUser(specificUser);
                }
            })
    }, [])

    console.log("current user   --->", currentUser);
    console.log("current user ID   --->", currentUser._id);


    // Preprocess Latex string
    const preprocessLatex = (text) => {
        if (!text) return '';
        return text
            .replace(/\\\\/g, '\\') // Convert escaped backslashes
            .replace(/_/g, '\\_')   // Escape underscores
            .replace(/%/g, '\\%')   // Escape percentage signs
            .replace(/#/g, '\\#');  // Escape hash symbols
    };

    useEffect(() => {
        axiosPublic.get('/math')
            .then((res) => {
                const allData = res.data;
                const processedProblems = allData.map((p) => ({
                    ...p,
                    problem: preprocessLatex(p.problem), // Preprocess Latex
                }));

                const specificProblem = processedProblems.find((x) => x._id === id);
                if (specificProblem) {
                    setProblem(specificProblem);
                }
            })
            .catch((err) => console.error(err));
    }, [id, axiosPublic]);

    if (!problem) {
        return <div>Loading...</div>;
    }
    const handleSubmission = (e) => {
        e.preventDefault();
        const answer = e.target.answer.value;
        const { solution, title } = problem;
        console.log(solution);
        const sol = 2;

        const solvedProblem = {
            title: title,
        }
        console.log(title);
        if (parseInt(solution) === parseInt(answer)) {
            console.log("Correct");
            console.log(`user id for the submission ---> ${currentUser.email}`)
            axiosPublic.patch(`/users/${currentUser?._id}/solved-problems`, {solvedProblem})
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        console.log("succesfully inserted to the database!!!");
                    }
                })
                .catch((err) => console.error(err));
            Swal.fire({
                text: "Correct",
                icon: "success",
                timer: 1700,
                color: "green",
            })
        } else {
            console.log("Correct");
            Swal.fire({
                text: "Wrong Answer",
                icon: "error",
                timer: 1700,
                focusCancel: true,
                animation: true,
                color: "red",
                buttonsStyling: true,
                confirmButtonText: "Close",
                imageUrl: "https://img.icons8.com/color/48/000000/sad-face.png",
            })
        }
        console.log("Answer sumittted");
    }

    return (
        <div className="max-w-6xl mx-auto font-mons">
            <div className="flex justify-between">
                {/* Problem Content */}
                <div className="border-[1px] w-[70%] mt-8 border-gray-400 p-3">
                    <h1 className="text-2xl font-medium">{problem.title}</h1>
                    <div className="max-w-6xl mx-auto p-4">
                        <Latex>{problem.problem}</Latex>
                        <div className="mt-12">
                            <h1 className="badge bg-green-100 text-green-600 mr-6">{problem.source}</h1>
                            <h1 className="badge bg-yellow-100 text-yellow-600">{problem.category}</h1>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-[30%] border-[2px] mt-8 ml-4 p-3 border-gray-300">
                    <h1 className="text-[18px] pb-3 font-medium text-center">Statistics</h1>
                    <hr />
                    <div className="flex justify-between px-4 py-2">
                        <h1 className="font-bold text-[18px]">Difficulty</h1>
                        <h1 className='text-green-400'>800</h1>
                    </div>
                  
                    <div className="flex justify-between px-4 py-2">
                        <h1 className="font-bold text-[18px]">Problem Setter</h1>
                        <h1>Saad Akhter</h1>
                    </div>
                    <div>
                        <h1 className='text-[16.5px] font-medium mt-2 mb-4 px-4'>What's Your Answer ? 🤓</h1>
                        <form action="" onSubmit={handleSubmission}>
                            <div className='flex  items-center px-2'>
                                <input type="text " className='input input-md rounded-sm w-full border-[1px] border-gray-500' name="answer" id="" />

                                <button className="btn btn-md border-none bg-green-200 text-green-600" onClick={() => document.getElementById('my_modal_5').showModal()}>Submit</button>
                                <dialog id="my_modal_4" className="modal bg-gray-400 bg-opacity-45 modal-bottom sm:modal-middle">
                                    <div className="modal-box bg-gray-500">
                                        <h3 className="font-bold text-2xl text-center text-gray-200">Congratulations! 🥳🥳🥳</h3>
                                        <img className='mx-auto' width="100" height="100" src="https://img.icons8.com/water-color/100/ok.png" alt="ok" />
                                        <div style={{ position: 'relative', backgroundColor: 'red' }}>
                                            <Sparkle />
                                        </div>
                                        <p className="py-4 text-gray-200 text-center">You have succesfully solved the problem</p>
                                        <div className="modal-action">
                                            <form method="dialog">

                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem;
