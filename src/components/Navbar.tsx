"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="z-50 sticky top-0 bg-[#1D1730] p-7">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div>
                    <Image
                        src="https://iideainformatics.it/wp/proview/proview1/wp-content/uploads/2023/04/logo-white.png"
                        alt="Logo"
                        width={150}
                        height={150}
                    />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-[16px] font-[400] transition-all duration-300 ${pathname === link.path
                                ? "text-[#F95353] underline underline-offset-4"
                                : "hover:text-[#F95353]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Login Button */}
                <Link href="/login">
                    <button className="hidden md:block text-[16px] rounded-xl font-[400] bg-[#F95353] px-5 py-3 hover:bg-[#F95353]/90 transition-all duration-300">
                        Login
                    </button>
                </Link>

                {/* Mobile Hamburger Icon */}
                <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Animated) */}
            {isMenuOpen && (
                <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-full h-screen bg-[#1D1730] flex flex-col items-center justify-center z-50"
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-5 right-5 text-white text-3xl"
                    >
                        &times;
                    </button>

                    {/* Navigation Links */}
                    <div className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className="text-white text-xl hover:text-[#F95353] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Login Button (Visible in Mobile Menu) */}
                        <Link href="/login">
                            <button className="text-[16px] rounded-xl font-[400] bg-[#F95353] px-6 py-3 hover:bg-[#F95353]/90 transition-all duration-300">
                                Login
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
