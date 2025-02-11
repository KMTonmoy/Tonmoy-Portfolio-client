'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaUser, FaProjectDiagram, FaNewspaper } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface DashboardCardProps {
    title: string;
    count: number;
    icon: React.ReactNode;
}

interface Message {
    _id: string;
    email: string;
    name: string;
    message: string;
}

const DashboardHome = () => {
    const [alldata, setAllData] = useState([]);
    const [blogsdata, setBlogs] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setmessage] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/users`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setAllData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/projects`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/blogs`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/message`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setmessage(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleReadMessage = (message: Message) => {
        setSelectedMessage(message);
    };

    const closeModal = () => {
        setSelectedMessage(null);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">Loading...</div>
        );
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-8 min-h-screen">
            <h1 className="text-4xl  font-bold text-center mb-6 text-[#F43F5E]">
                Welcome to Your Dashboard
            </h1>

            <div className="flex  flex-wrap justify-center gap-8 z-0">
                <DashboardCard
                    title="Total Users"
                    count={alldata.length}
                    icon={<FaUser className="text-[#F43F5E] text-4xl" />}
                />
                <DashboardCard
                    title="Total Projects"
                    count={projects.length}
                    icon={<FaProjectDiagram className="text-[#F43F5E] text-4xl" />}
                />
                <DashboardCard
                    title="Total Blogs"
                    count={blogsdata.length}
                    icon={<FaNewspaper className="text-[#F43F5E] text-4xl" />}
                />
                <DashboardCard
                    title="Total Messages"
                    count={message.length}
                    icon={<FaNewspaper className="text-[#F43F5E] text-4xl" />}
                />
            </div>

            <div className="  mt-8">
                <h1 className="text-4xl  font-bold text-center mb-6 text-[#F43F5E]">
                    Messages
                </h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 '>
                    {message.map((msg) => (
                        <motion.div
                            key={msg._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg min-h-60 flex flex-col justify-between max-w-sm mx-auto"
                        >
                            <h2 className="text-2xl font-semibold">{msg.name}</h2>
                            <p className="text-lg text-gray-600">{msg.email}</p>
                            <button
                                onClick={() => handleReadMessage(msg)}
                                className="mt-4 bg-[#F43F5E] text-white py-3 px-6 rounded-lg text-lg"
                            >
                                Read Message
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50"
                >
                    <div className="bg-white text-black p-6 rounded-lg max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4">Message from {selectedMessage.name}</h2>
                        <p className="text-gray-800">{selectedMessage.message}</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-[#F43F5E] text-white py-1 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
    return (
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg py-8 px-6 w-full md:w-80 z-0 flex items-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
            <div className="mr-4 text-5xl">{icon}</div>
            <div>
                <h2 className="text-4xl font-bold text-[#F43F5E]">
                    <CountUp start={0} end={count} duration={2.75} />
                </h2>
                <p className="text-gray-600 mt-2">{title}</p>
            </div>
        </div>
    );
};

export default DashboardHome;
