"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import MyImage from "../images/MyPhoto.png";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { BsYoutube } from "react-icons/bs";

const Banner = () => {

    const resumeLink = "https://drive.usercontent.google.com/u/0/uc?id=1uq1YFRqrk0ZLkgwOHJnTM7NPYRpGbLtm&export=download";

    return (
        <div className="relative md:p-0 p-5 mb-10 min-h-[650px] bg-[#1D1730] text-white px-5">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between pt-10">
                {/* Left Content */}
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h4 className="text-3xl md:text-4xl font-light text-gray-300">Hi, This is</h4>
                    <h1 className="text-5xl md:text-7xl font-bold text-purple-500">Tonmoy Ahamed</h1>
                    <p className="flex justify-center md:justify-start items-center gap-2 text-lg md:text-xl font-medium mt-2 text-gray-200">
                        I am a
                        <Typewriter
                            words={["Web Developer", "Frontend Developer", "Programmer", "Coder", "Backend Developer", "React Developer", "Next.js Developer"]}

                            loop={Infinity}
                            cursor
                            cursorStyle="|"
                            typeSpeed={75}
                            deleteSpeed={50}
                        />
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#F95353] px-6 py-3 rounded-md transition-all hover:bg-white hover:text-black"
                        >
                            Download Resume
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-[#2B2344] px-6 py-3 rounded-md transition-all hover:bg-[#F95353]"
                        >
                            Contact Me
                        </motion.button>
                    </div>

                    {/* Social Media */}
                    <div className="mt-10">
                        <p className="text-lg text-gray-300">Find Me On</p>
                        <div className="flex justify-center md:justify-start gap-4 mt-2">
                            {[FaFacebook, LiaLinkedin, FaXTwitter, BsYoutube].map((Icon, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="bg-[#2B2344] p-4 rounded-md transition-all"
                                >
                                    <Icon className="text-xl" />
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side Image */}
                <motion.div
                    className="mt-10 md:mt-0"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <Image
                        src={MyImage}
                        width={300}
                        height={300}
                        alt="My Image"
                        className="rounded-full border-4 border-purple-500 shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
