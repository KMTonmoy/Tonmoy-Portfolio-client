'use client';
import React, { useEffect, useState } from "react";
import {
    FaBars,
    FaTimes,
    FaNewspaper,
    FaProjectDiagram,
    FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
    const [hasToken, setHasToken] = useState(false);
    console.log(hasToken);
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setHasToken(!!token);
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const links = [
        { name: "Blog Management", icon: <FaNewspaper />, path: "/dashboard/blogs" },
        { name: "Project Management", icon: <FaProjectDiagram />, path: "/dashboard/projects" },
        { name: "Message Management", icon: <FaEnvelope />, path: "/dashboard/messages" },
    ];
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setHasToken(false);
        window.location.href = "/login"; // Redirect to login page after logout
    };
    return (
        <div className="flex md:z-0 md:w-[300px] z-50 min-h-screen bg-gray-800 text-white">
            <button
                onClick={toggleSidebar}
                className="lg:hidden p-4 text-2xl focus:outline-none"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div
                className={`fixed lg:static bg-gray-900 w-64 h-full transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 overflow-y-auto overflow-x-hidden`}
            >

                <nav className="mt-8">
                    {links.map(({ name, icon, path }) => (
                        <Link
                            key={name}
                            href={path}
                            className="flex items-center space-x-4 p-4 hover:bg-gray-700 rounded-lg transition-transform transform hover:scale-105"
                        >
                            <span className="text-xl">{icon}</span>
                            <span>{name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-5">
                    <button
                        onClick={handleLogout}
                        className="text-[16px] rounded-xl font-[400] bg-[#F95353] px-6 py-3 hover:bg-[#F95353]/90 transition-all duration-300">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
