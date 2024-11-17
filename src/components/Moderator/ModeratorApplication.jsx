import React, { useState } from "react";

const ModeratorApplication = () => {
    // const axiosPublic = useAxios
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        expertise: "",
        motivation: "",
        availability: "",
        extraInfo: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Application:", formData);
        alert("Your application has been submitted!");
        //POST request

    };

    return (
        <div className="min-h-screen font-mons bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    <span className="text-[16px]">Please fill up the form to become</span> <br /> Problem Setter
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Expertise */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Your Expertise</span>
                        </label>
                        <textarea
                            name="expertise"
                            value={formData.expertise}
                            onChange={handleChange}
                            placeholder="Describe your area of expertise (e.g., Math, Science, Coding, etc.)"
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    {/* Motivation */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Why do you want to be a moderator?</span>
                        </label>
                        <textarea
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleChange}
                            placeholder="Explain your motivation for becoming a moderator"
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    {/* Availability */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">How much time can you dedicate weekly?</span>
                        </label>
                        <select
                            name="availability"
                            value={formData.availability}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select your availability</option>
                            <option value="1-3 hours">1-3 hours</option>
                            <option value="4-6 hours">4-6 hours</option>
                            <option value="7-10 hours">7-10 hours</option>
                            <option value="10+ hours">10+ hours</option>
                        </select>
                    </div>

                    {/* Extra Information */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Any additional information</span>
                        </label>
                        <textarea
                            name="extraInfo"
                            value={formData.extraInfo}
                            onChange={handleChange}
                            placeholder="Provide any extra information (optional)"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control">
                        <button type="submit" className="btn btn-primary w-full">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModeratorApplication;
