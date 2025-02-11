"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch("https://tonmoy-portfolio-server-rosy.vercel.app/messagePost", { // Change to your API URL
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess(result.message || "Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError(result.error || "Failed to send message.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1D1730] text-white px-5">
                <Helmet>
                <meta charSet="utf-8" />
                <title>ProView | Contact</title>
            </Helmet>
            <motion.div
                className="w-full max-w-5xl flex bg-[#25203E] rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                {/* Left Side - Image */}
                <div className="hidden md:block w-1/2 relative">
                    <img
                        src="https://cdn.dribbble.com/users/3497212/screenshots/11476810/media/c18175dc05724f0c933fa8f49b2ff875.gif"
                        alt="Contact Image"
                        className="h-full rounded-l-lg"
                    />
                </div>

                {/* Right Side - Contact Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-[#F95353]">Contact Me</h2>
                    <p className="text-center text-gray-300 mb-6">
                        Have a question or want to work together? Send me a message!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-[#37314F] text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F95353]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-[#37314F] text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F95353]"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full p-3 rounded-lg bg-[#37314F] text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F95353]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#F95353] text-white py-3 rounded-lg font-semibold hover:bg-[#F95353]/90 transition-all duration-300"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {success && <p className="text-green-400 text-center mt-2">{success}</p>}
                        {error && <p className="text-red-400 text-center mt-2">{error}</p>}
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
