"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname(); // Get the current route

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="sticky top-0 bg-[#1D1730] p-7">
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

                {/* Navigation Links */}
                <div className="flex gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={` text-[16px] font-[400] transition-all duration-300 ${pathname === link.path
                                ? "text-[#F95353]  underline underline-offset-4"
                                : "hover:text-[#F95353]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Hire Me Button */}
                <div>
                    <button className="text-[16px] rounded-xl font-[400] bg-[#F95353] px-5 py-4">
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
