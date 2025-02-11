'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;
}

const BlogDetailsPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/blogs/${id}`);
                const data: Blog = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#1D1730] text-white text-xl">
                Loading...
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#1D1730] text-white text-xl">
                Blog not found
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#1D1730] text-white px-6 py-10"
        >
            <div className="max-w-4xl mx-auto bg-[#292148] p-6 rounded-lg shadow-lg">
                <motion.img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-64 object-cover rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                />
                <motion.h1 
                    className="text-3xl font-bold mt-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {blog.title}
                </motion.h1>
                <motion.p 
                    className="text-gray-300 mt-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {blog.description}
                </motion.p>

                <motion.button
                    onClick={() => router.push('/')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-[#F95353] text-white px-5 py-2 rounded-md font-semibold hover:bg-red-600 transition-all"
                >
                    ← Go Back
                </motion.button>
            </div>
        </motion.div>
    );
};

export default BlogDetailsPage;
