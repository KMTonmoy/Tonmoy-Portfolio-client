'use client'
import React from "react";
import { FaCode, FaLaptopCode, FaRocketchat } from "react-icons/fa"; // Icons from react-icons
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const MyServices = () => {
    return (
        <div className="bg-[#1D1730] py-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ProView | Services</title>
            </Helmet>
            <p className="italic text-center font-medium text-lg text-white">
                Services <span className="text-[#F95353]">.....</span>
            </p>
            <h1 className="text-4xl font-bold text-center mb-10 text-white">
                What I Offer <span className="text-[#F95353]">🚀</span>
            </h1>

            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center mx-auto">
                    {/* Service Card 1 */}
                    <motion.div
                        className="bg-[#2B2344] border-[1px] border-[#F95353] rounded-tr-[200px] w-[350px] p-10 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center group-hover:rotate-180 transition-transform duration-500" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>
                        <div className="relative z-10 text-center">
                            <FaCode size={50} className="mx-auto text-[#F95353]" />
                            <h3 className="text-xl font-semibold mt-5 text-white">Web Development</h3>
                            <p className="text-white mt-3">
                                Creating dynamic and responsive websites with modern technologies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service Card 2 */}
                    <motion.div
                        className="bg-[#2B2344] border-[1px] border-[#F95353] rounded-tr-[200px] w-[350px] p-10 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center group-hover:rotate-180 transition-transform duration-500" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>
                        <div className="relative z-10 text-center">
                            <FaLaptopCode size={50} className="mx-auto text-[#F95353]" />
                            <h3 className="text-xl font-semibold mt-5 text-white">UI/UX Design</h3>
                            <p className="text-white mt-3">
                                Designing intuitive and engaging user interfaces and experiences.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service Card 3 */}
                    <motion.div
                        className="bg-[#2B2344] border-[1px] border-[#F95353] rounded-tr-[200px] w-[350px] p-10 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center group-hover:rotate-180 transition-transform duration-500" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>
                        <div className="relative z-10 text-center">
                            <FaRocketchat size={50} className="mx-auto text-[#F95353]" />
                            <h3 className="text-xl font-semibold mt-5 text-white">Consultation</h3>
                            <p className="text-white mt-3">
                                Offering expert advice and guidance for your digital projects.
                            </p>
                        </div>
                    </motion.div>

                    {/* More Service Cards */}
                    <motion.div
                        className="bg-[#2B2344] border-[1px] border-[#F95353] rounded-tr-[200px] w-[350px] p-10 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center group-hover:rotate-180 transition-transform duration-500" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>
                        <div className="relative z-10 text-center">
                            <FaCode size={50} className="mx-auto text-[#F95353]" />
                            <h3 className="text-xl font-semibold mt-5 text-white">Full Stack Development</h3>
                            <p className="text-white mt-3">
                                Building robust full-stack applications with front-end and back-end technologies.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-[#2B2344] border-[1px] border-[#F95353] rounded-tr-[200px] w-[350px] p-10 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center group-hover:rotate-180 transition-transform duration-500" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>
                        <div className="relative z-10 text-center">
                            <FaRocketchat size={50} className="mx-auto text-[#F95353]" />
                            <h3 className="text-xl font-semibold mt-5 text-white">Project Management</h3>
                            <p className="text-white mt-3">
                                Managing projects efficiently from concept to delivery with agile practices.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-[#2B2344] border-[1px] border-[#F95353] rounded-tr-[200px] w-[350px] p-10 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center group-hover:rotate-180 transition-transform duration-500" style={{ backgroundImage: "url('your-image-url.jpg')" }}></div>
                        <div className="relative z-10 text-center">
                            <FaLaptopCode size={50} className="mx-auto text-[#F95353]" />
                            <h3 className="text-xl font-semibold mt-5 text-white">Web Application Development</h3>
                            <p className="text-white mt-3">
                                Developing high-performance web apps tailored to your business needs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;
