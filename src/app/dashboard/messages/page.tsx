'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

interface Message {
    id: number;
    name: string;
    email: string;
    message: string;
}

const Page = () => {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<Message[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/message`)
            .then(res => res.json())
            .then(data => {
                setMessages(data);
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

    if (loading) return <p className="text-center text-gray-600 text-xl">Loading...</p>;
    if (error) return <p className="text-center text-red-500 text-xl">Error: {error}</p>;

    return (
        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Messages</h1>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ProView | messages</title>
            </Helmet>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
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

            {selectedMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 px-4 sm:px-0"
                >
                    <div className="bg-white text-black p-6 sm:p-8 rounded-lg max-w-lg w-full shadow-2xl">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Message from {selectedMessage.name}</h2>
                        <p className="text-lg text-gray-800">{selectedMessage.message}</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-[#F43F5E] text-white py-3 px-6 rounded-lg text-lg w-full sm:w-auto"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Page;
