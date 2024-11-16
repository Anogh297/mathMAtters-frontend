import React from 'react';

const Leaderboard = () => {
    return (
        <div>
            <section className='max-w-7xl mx-auto'>
                <div className='flex justify-center flex-col'>
                    <div>
                        <h1 className='text-[36px] font-medium'>All Applications</h1>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full min-w-max">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Phone</th>
                                    <th className="px-4 py-2 text-left">Email</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                    <th className="px-4 py-2 text-left">Details</th>
                                    <th className="px-4 py-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
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
                                                    <div className="font-bold text-sm">name of applicant</div>
                                                    <div className="text-xs opacity-50">United Kingdom</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">123 456 789 11</td>
                                        <td className="px-4 py-2">no@na.com</td>
            
                                                <td className="px-4 py-2 badge bg-yellow-100 text-yellow-500">Pending</td>
                                       
                                     
                                        <td className="px-4 py-2">
                                            <button  className="btn btn-ghost btn-xs">Details</button>
                                        </td>
                                        <td className="px-4 py-2 flex items-center space-x-2">
                                            <button className="btn bg-green-100 text-green-500 btn-xs">Approve</button>
                                            <button className="btn bg-red-100 text-red-500 btn-xs">Delete</button>
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