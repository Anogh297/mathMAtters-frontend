import React from 'react';

const Leaderboard = () => {
    return (
        <div>
            <section className='max-w-7xl mx-auto font-mons mt-16 mb-64'>
                <div className='flex justify-center flex-col'>
                    <div>
                        <h1 className='text-[36px] font-medium text-center pb-3 pt-4'>Problem Solving Leaderboard</h1>
                        <div className='border-2 border-green-400 mb-6'>
                            <hr />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full min-w-max">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Rank</th>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">School</th>
                                    <th className="px-4 py-2 text-left">Email</th>
                                    <th className="px-4 py-2 text-left">Submissions</th>
                                    <th className="px-4 py-2 text-left">Solved</th>
                                    <th className="px-4 py-2 text-left">Overall Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>
                                            <h1 className='text-[18px] font-bold'># 1 </h1>
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                            alt="Avatar"
                                                            className="object-cover h-full w-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm">Jack Cheng</div>
                                                    <div className="text-xs opacity-50">9X/MA1</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">Manchester Academy</td>
                                        <td className="px-4 py-2">no@na.com</td>
            
                                                <td className="px-4 py-2  ">234</td>
                                       
                                     
                                        <td className="px-4 py-2">
                                            <button  className="">198</button>
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <h1>455</h1>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h1 className='text-[18px] font-bold'># 2 </h1>
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                            alt="Avatar"
                                                            className="object-cover h-full w-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm">Jack Cheng</div>
                                                    <div className="text-xs opacity-50">9X/MA1</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">Manchester Academy</td>
                                        <td className="px-4 py-2">no@na.com</td>
            
                                                <td className="px-4 py-2  ">234</td>
                                       
                                     
                                        <td className="px-4 py-2">
                                            <button  className="">198</button>
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <h1>455</h1>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h1 className='text-[18px] font-bold'># 3 </h1>
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                            alt="Avatar"
                                                            className="object-cover h-full w-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm">Jack Cheng</div>
                                                    <div className="text-xs opacity-50">9X/MA1</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">Manchester Academy</td>
                                        <td className="px-4 py-2">no@na.com</td>
            
                                                <td className="px-4 py-2  ">234</td>
                                       
                                     
                                        <td className="px-4 py-2">
                                            <button  className="">198</button>
                                        </td>
                                        <td className="px-4 py-2 ">
                                            <h1>455</h1>
                                        </td>
                                    </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Leaderboard;