'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface Blog {
    _id: string;
    title: string;
    description: string;
    image: string;
}

const BlogsPage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:8000/blogs');
                const data: Blog[] = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen text-white px-6 py-10">
            <p className="italic text-center font-medium text-lg">
                Blogs <span className="text-[#F95353]">.....</span>
            </p>
            <h1 className="text-4xl font-bold text-center mb-10">
                My Blogs <span className="text-[#F95353]">🚀</span>
            </h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#292148] p-4 rounded-lg shadow-2xl flex flex-col justify-between  h-[340px]"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-2xl font-semibold mt-4 truncate">{blog.title}</h2>
                            <p className="text-gray-300 mt-2 line-clamp-3 truncate">
                                {blog.description}
                            </p>
                        </div>
                        <motion.button
                            onClick={() => router.push(`/blog/${blog._id}`)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-auto bg-[#F95353] text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition-all"
                        >
                            Read Now
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;
