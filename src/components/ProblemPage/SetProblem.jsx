// import React, { useEffect, useState } from 'react';
// import useAxiosPublic from '../hooks/useAxiosPublic';
// import Latex from 'react-latex-next';

// const SetProblem = () => {
//     const axiosPublic = useAxiosPublic();
//     const [problem, setProblem] = useState([]);
//     useEffect(() => {
//         axiosPublic.get('/math')
//             .then(res => {
//                 setProblem(res.data);
//             })
//     }, [])
const xyz =
    `\\textbf{Fermat's Little Theorem:}
    If $p$ is a prime number and $a$ is an integer not divisible by $p$, then:
    $$a^{p-1} \\equiv 1 \\pmod{p}.$$
    
    \\textbf{Proof:} Consider the sequence:
    $$a, 2a, 3a, \\dots, (p-1)a.$$
    Since $a$ is not divisible by $p$, all terms in this sequence are distinct modulo $p$. Multiplying these terms together gives:
    $$a \\cdot 2a \\cdot 3a \\cdot \\dots \\cdot (p-1)a \\equiv (p-1)! \\pmod{p}.$$
    Factoring $a^{p-1}$ from the left side:
    $$a^{p-1} \\cdot (p-1)! \\equiv (p-1)! \\pmod{p}.$$
    Since $(p-1)!$ is not divisible by $p$, we can cancel it out:
    $$a^{p-1} \\equiv 1 \\pmod{p}.$$

    \\textbf{Example:} Let $p = 7$ and $a = 3$. Then:
    $$3^{6} \\equiv 1 \\pmod{7}.$$

    \\textbf{Practice Problems:}
    1. Verify Fermat's Little Theorem for $a = 2$ and $p = 13$.
    2. Compute $7^{11} \\pmod{13}$ using Fermat's Little Theorem.
    3. Show that $5^{100} \\equiv 25 \\pmod{75}$.`


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log(e);
//         const data = e.target.data.value;
//         console.log(data);

//         const problem = {
//             problem: data,
//         }


//         axiosPublic.post('/math', problem)
//             .then(res => {
//                 console.log(res);
//             })
//             .catch(err => {
//                 console.log(err);
//             })

//     }
//     return (
//         <div className='mx-auto max-w-6xl justify-center flex flex-col'>
//             <form action="" onSubmit={handleSubmit}>
//                 <textarea name="data" className='h-[500px] w-full border-2 border-gray-600 textarea-bordered textarea-lg' placeholder='submit problem here' id=""></textarea>
//                 <button className='btn btn-primary'>Submit</button>
//             </form>
//             <div>
//                 {/* <Latex>{xyz}</Latex> */}
//                 {problem.map((problem, index) => <>
//                     <Latex key={index} className='text-gray-600'>{problem.problem}</Latex>
//                 </>)}
//             </div>
//         </div>
//     );
// };

// export default SetProblem;



import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Latex from 'react-latex-next';
import sanitizeLatex from 'react-latex-next';

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
    console.log(xyz);


    const handleSubmit = (e) => {
        e.preventDefault();
        const rawData = e.target.data.value;

        const sanitizedData = sanitizeLatex(rawData);

        const problem = {
            problem: rawData,
        };

        axiosPublic.post('/math', problem)
            .then((res) => {
                console.log(res);
                setProblems((prev) => [...prev, problem]);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="mx-auto max-w-6xl justify-center flex flex-col">
            <form onSubmit={handleSubmit}>
                <textarea
                    name="data"
                    className="h-[500px] w-full border-2 border-gray-600 textarea-bordered textarea-lg"
                    placeholder="Submit a LaTeX problem here"
                ></textarea>
                <button type="submit" className="btn btn-primary mt-2">
                    Submit
                </button>
            </form>
            <div className="mt-4">
                {problems.map((problem, index) => (
                    <div key={index} className="mb-4 text-gray-600">
                        <Latex>{problem.problem}</Latex>
                        {/* <Latex>{xyz}</Latex> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SetProblem;
