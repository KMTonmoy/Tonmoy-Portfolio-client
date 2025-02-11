"use client";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

interface Blog {
    _id?: string;
    title: string;
    description: string;
    image: string;
    content: string;
}

const BlogsManagePage = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBlogId, setCurrentBlogId] = useState<string | null>(null);

    const [blogData, setBlogData] = useState<Blog>({
        title: "",
        description: "",
        image: "",
        content: "",
    });

    useEffect(() => {
        fetch("https://tonmoy-portfolio-server-rosy.vercel.app/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error("Error fetching blogs:", err));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };

    const openAddModal = () => {
        setIsModalOpen(true);
        setIsEditing(false);
        setBlogData({ title: "", description: "", image: "", content: "" });
    };

    const openEditModal = (blog: Blog) => {
        if (blog._id) {
            setIsModalOpen(true);
            setIsEditing(true);
            setCurrentBlogId(blog._id);
            setBlogData(blog);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isEditing && currentBlogId) {
            const response = await fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/blogs/${currentBlogId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blogData),
            });

            if (response.ok) {
                setBlogs(blogs.map((blog) => (blog._id === currentBlogId ? { ...blogData, _id: currentBlogId } : blog)));
                Swal.fire("Updated!", "Your blog has been updated.", "success");
            }
        } else {
            const response = await fetch("https://tonmoy-portfolio-server-rosy.vercel.app/blogPost", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blogData),
            });

            const newBlog = await response.json();
            setBlogs([...blogs, newBlog]);
            Swal.fire("Added!", "New blog has been added.", "success");
        }

        setIsModalOpen(false);
        setBlogData({ title: "", description: "", image: "", content: "" });
    };

    const handleDelete = async (_id: string | undefined) => {
        if (!_id) {
            return;
        }

        const confirmDelete = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmDelete.isConfirmed) {
            const response = await fetch(`https://tonmoy-portfolio-server-rosy.vercel.app/blogs/${_id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setBlogs(blogs.filter((blog) => blog._id !== _id));
                Swal.fire("Deleted!", "Your blog has been deleted.", "success");
            }
        }
    };

    return (
        <div className="max-w-7xl mx-auto text-black p-6">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ProView | Manage Blogs</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-6 text-center text-white">Manage Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-200 flex justify-center items-center rounded-lg p-6 cursor-pointer hover:bg-gray-300 transition" onClick={openAddModal}>
                    <span className="text-2xl font-bold text-gray-600">+ Add Blog</span>
                </div>
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
                            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                            <h2 className="text-xl font-semibold">{blog.title}</h2>
                            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                            <div className="flex justify-between items-center">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => openEditModal(blog)}>
                                    Edit
                                </button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition" onClick={() => handleDelete(blog._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No blogs available.</p>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Blog" : "Add New Blog"}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="text" name="title" placeholder="Title" value={blogData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="description" placeholder="Description" value={blogData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <input type="text" name="image" placeholder="Image URL" value={blogData.image} onChange={handleChange} className="w-full p-2 border rounded" required />
                            <textarea name="content" placeholder="Content" value={blogData.content} onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
                            <div className="flex justify-end space-x-2">
                                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                    {isEditing ? "Update Blog" : "Add Blog"}
                                </button>
                                <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogsManagePage;
