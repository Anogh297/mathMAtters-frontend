import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Latex from 'react-latex-next';
import sanitizeLatex from 'react-latex-next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetProblem = () => {
    const axiosPublic = useAxiosPublic();
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        axiosPublic.get('/math')
            .then((res) => {
                const processedProblems = res.data.map((p) => ({
                    ...p,
                    problem: p.problem.replace(/\\\\/g, '\\'), // Replace double backslashes with single
                }));
                setProblems(processedProblems);
            })
            .catch((err) => console.error(err));
    }, []);


    console.log(problems);
    // console.log(xyz);



    const handleSubmit = (e) => {
        e.preventDefault();
        const rawData = e.target.data.value;
        const author = e.target.author.value;
        const category = e.target.category.value;
        const picture = e.target.picture.value;
        const difficulty = e.target.difficulty.value;
        const source = e.target.source.value;
        const title = e.target.title.value;
        const answer = e.target.answer.value;

        // const sanitizedData = sanitizeLatex(rawData);

        const problem = {
            problem: rawData,
            author: author,
            category: category,
            picture: picture,
            difficulty: difficulty,
            source: source,
            answer: answer,
        };

        console.log(problem);

        axiosPublic.post('/math', problem)
            .then((res) => {
                console.log(res);
                // setProblems((prev) => [...prev, problem]);
                toast.success('Problem submitted successfully!');
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            <div className="mx-auto max-w-6xl justify-center flex flex-col font-mons">
                <img className='w-[300px] h-[300px] m-auto rounded-2xl mt-8 mb-8' src="https://i.pinimg.com/736x/3f/1e/77/3f1e771cec6f1f5a6b6f8dbe9c7abfb6.jpg" alt="" />
                <h1 className='text-[20px] font-medium text-blue-400 text-center mb-3'>Set Problem in LaTeX format</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Title</span>
                        </label>
                        <input
                            type="text"
                            name='title'
                            className="input input-bordered input-md w-full border-green-300 focus:ring focus:ring-green-200"
                            placeholder="Enter problem title"
                        />
                    </div>

                    {/* Difficulty */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Difficulty</span>
                        </label>
                        <input
                            name='difficulty'
                            type="text"
                            className="input input-bordered input-md w-full border-green-300 focus:ring focus:ring-green-200"
                            placeholder="Easy, Medium, Hard"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Solution</span>
                        </label>
                        <input
                            name='answer'
                            type="text"
                            className="input input-bordered input-md w-full border-green-300 focus:ring focus:ring-green-200"
                            placeholder="Easy, Medium, Hard"
                        />
                    </div>

                    {/* Source */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Source</span>
                        </label>
                        <input
                            name='source'
                            type="text"
                            className="input input-bordered input-md w-full border-green-300 focus:ring focus:ring-green-200"
                            placeholder="Enter source (if any)"
                        />
                    </div>

                    {/* Author */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Author</span>
                        </label>
                        <input
                            name='author'
                            type="text"
                            className="input input-bordered input-md w-full border-green-300 focus:ring focus:ring-green-200"
                            placeholder="Enter author name"
                        />
                    </div>

                    {/* Picture Link */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Picture Link</span>
                        </label>
                        <input
                            name='picture'
                            type="text"
                            className="input input-bordered input-md w-full border-green-300 focus:ring focus:ring-green-200"
                            placeholder="Enter picture link (if applicable)"
                        />
                    </div>

                    {/* Category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-gray-700">Category</span>
                        </label>
                        <input
                            name='category'
                            type="text"
                            className=" mb-8 input input-bordered input-md w-full border-green-300 focus:ring focus:ring-green-200"
                            placeholder="e.g., Algebra, Geometry"
                        />
                    </div>
                    <textarea
                        name="data"
                        className="h-[500px] w-full border-2 border-gray-600 textarea-bordered textarea-lg"
                        placeholder="Submit a LaTeX problem here"
                    ></textarea>
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>

                </form>
                {/* <div className="mt-4">
                    {problems.map((problem, index) => (
                        <div key={index} className="mb-4 text-gray-600">
                            <Latex>{problem.problem}</Latex>

                        </div>
                    ))}
                </div> */}

            </div>
            <ToastContainer />
        </>

    );
};

export default SetProblem;
