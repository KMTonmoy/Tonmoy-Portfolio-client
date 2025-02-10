'use client';

import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { AuthContext } from '@/Provider/AuthProvider';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { signIn, signInWithGoogle } = useContext(AuthContext) || {};
    const axiosPublic = useAxiosPublic();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        if (!signIn) {
            setError('Authentication not available');
            setLoading(false);
            return;
        }
        await signIn(email, password);
    };

    const handleGoogleLogin = async () => {
        if (!signInWithGoogle) return;
        const result = await signInWithGoogle();
        if (result && result.user) {
            const userInfo = {
                email: result.user.email || '',
                name: result.user.displayName || '',
            };
            await axiosPublic.post('/users', userInfo);
        }
    };

    return (
        <motion.div
            className="min-h-screen  flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-[#25527E]">
                    Login
                </h2>
                {error && <motion.div className="text-red-500 text-center mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md text-black"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md text-black"
                            placeholder="Your Password"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        className={`w-full py-2 px-4 font-semibold text-white rounded-md ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#22C55E] hover:bg-[#25a755] duration-700'}`}
                        disabled={loading}
                        whileHover={!loading ? { scale: 1.05 } : {}}
                        whileTap={!loading ? { scale: 0.95 } : {}}
                    >
                        {loading ? 'Logging in...' : 'Log In'}
                    </motion.button>
                </form>
                <div>
                    <motion.button
                        onClick={handleGoogleLogin}
                        className="max-w-[320px] flex items-center justify-center mx-auto mt-4 py-2 px-5 text-sm font-bold text-center uppercase rounded-md border border-gray-300 gap-3 bg-gray-800 text-white transition-all duration-300 hover:bg-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg
                            viewBox="0 0 256 262"
                            preserveAspectRatio="xMidYMid"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 fill-white mr-2"
                        >
                            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                            <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                        </svg>
                        Continue with Google
                    </motion.button>
                </div>
                <p className="mt-5 text-center text-gray-600">
                    Do not have an account?{' '}
                    <Link href="/signup" className="text-[#f0652b] hover:underline">
                        Sign up
                    </Link>
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Page;
