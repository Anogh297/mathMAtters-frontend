import React, { useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';

const Login = () => {
    const axiosPublic = useAxiosPublic();
    const { createuser, generalLogin, googleLogin } = useContext(AuthContext); // Ensure `googleLogin` exists in AuthContext
    const auth = getAuth(app);
    const navigate = useNavigate();

    // Email & Password Login
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        generalLogin(email, password)
            .then((res) => {
                console.log('Logged in successfully with email and password');
                Swal.fire({
                    title: 'Success!',
                    text: 'User Logged in Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: 'Oops!',
                    text: 'Maybe wrong credentials!',
                    icon: 'warning',
                    confirmButtonText: 'Recheck',
                });
            });
    };

    // Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                console.log('Logged in with Google:', res.user);

                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                    role: 'User',
                };

                axiosPublic
                    .post('/users', userInfo)
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'User Logged in Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool',
                        });
                        navigate('/');
                    })
                    .catch((err) => console.error(err));
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: 'Oops!',
                    text: 'Something Went wrong!',
                    icon: 'warning',
                    confirmButtonText: 'Recheck',
                });
            });
    };

    return (
        <div>
            <section className="bg-white font-mons">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Background"
                            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>

                    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl">
                            <a className="block text-blue-600" href="#" aria-label="Home">
                                <span className="sr-only">Home</span>
                                {/* Add Logo SVG or Icon */}
                            </a>

                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to <br /> MathMatters
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>

                            <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="mt-1 w-full rounded-md input-md input border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="mt-1 w-full rounded-md input-md input border-gray-300 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        type="submit"
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Login
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleGoogleLogin}
                                        className="inline-block mt-4 sm:mt-0 shrink-0 rounded-md border border-gray-300 bg-white px-12 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 focus:outline-none focus:ring"
                                    >
                                        Login with Google
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        New here?{' '}
                                        <a href="#" className="text-gray-700 underline">
                                            Register an account
                                        </a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Login;
