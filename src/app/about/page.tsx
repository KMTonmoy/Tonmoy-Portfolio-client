"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MyImage from "../../images/MyPhoto.png";

const About = () => {
    return (
        <div className="bg-[#1D1730] text-white py-16 px-5 md:px-10">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                
                {/* Left Side - About Me */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div>
                        <p className="italic font-medium text-lg text-white">
                            About Me <span className="text-[#F95353]">.....</span>
                        </p>
                        <h1 className="text-5xl font-semibold text-white mt-2">
                            Professional Web Developer
                        </h1>
                        <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                            I specialize in crafting modern, responsive, and user-friendly web applications with a strong focus on performance, accessibility, and scalability. 
                            With expertise in the <span className="text-[#F95353] font-semibold">MERN stack</span>, I develop high-quality web solutions tailored to meet business needs.
                        </p>
                        <p className="mt-5 text-lg text-gray-300 leading-relaxed">
                            My goal is to deliver seamless and engaging digital experiences through clean, maintainable, and efficient code. I am always eager to collaborate on innovative projects and stay updated with the latest industry trends.
                        </p>

                        <div className="mt-5">
                            <button className="text-lg rounded-xl font-medium bg-[#F95353] px-6 py-3 hover:bg-[#F95353]/90 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Image with Electric Border Effect */}
                <motion.div
                    className="flex-1 flex justify-center"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                    <div className="relative">
                        <Image
                            src={MyImage}
                            width={350}
                            height={350}
                            alt="Tonmoy Ahamed"
                            className="rounded-lg border-4 border-transparent shadow-lg electric-border"
                        />
                        {/* Animated electric border effect */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-transparent animate-electric" />
                    </div>
                </motion.div>
            </div>

            {/* Custom styles for animation */}
            <style jsx>{`
                @keyframes electric {
                    0% { box-shadow: 0 0 5px rgba(147, 112, 219, 0.5); }
                    25% { box-shadow: 0 0 15px rgba(147, 112, 219, 0.7); }
                    50% { box-shadow: 0 0 30px rgba(147, 112, 219, 0.9); }
                    75% { box-shadow: 0 0 15px rgba(147, 112, 219, 0.7); }
                    100% { box-shadow: 0 0 5px rgba(147, 112, 219, 0.5); }
                }
                
                .animate-electric {
                    animation: electric 1.5s infinite alternate;
                    border-radius: 10px;
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    border: 2px solid rgba(147, 112, 219, 0.7);
                }
            `}</style>
        </div>
    );
};

export default About;
