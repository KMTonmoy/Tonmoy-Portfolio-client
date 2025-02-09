"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { SiRedux, SiExpress, SiFirebase, SiPostman, SiJsonwebtokens, SiTailwindcss, SiTypescript, SiGit, SiNpm } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const MySkill = () => {
    return (
        <div className="bg-[#1D1730] text-white py-16 px-5 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10 text-white">
                    My Skills <span className="text-[#F95353]">🚀</span>
                </h1>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Skill Cards */}
                    <SkillCard name="HTML" icon={<FaHtml5 size={50} />} />
                    <SkillCard name="CSS" icon={<FaCss3Alt size={50} />} />
                    <SkillCard name="JavaScript" icon={<FaJs size={50} />} />
                    <SkillCard name="React.js" icon={<FaReact size={50} />} />
                    <SkillCard name="Next.js" icon={<TbBrandNextjs size={50} />} />
                    <SkillCard name="Node.js" icon={<FaNodeJs size={50} />} />
                    <SkillCard name="Express.js" icon={<SiExpress size={50} />} />
                    <SkillCard name="MongoDB" icon={<DiMongodb size={50} />} />
                    <SkillCard name="Postman" icon={<SiPostman size={50} />} />
                    <SkillCard name="Mongoose" icon={<DiPostgresql size={50} />} />
                    <SkillCard name="Redux" icon={<SiRedux size={50} />} />
                    <SkillCard name="Firebase" icon={<SiFirebase size={50} />} />
                    <SkillCard name="JWT" icon={<SiJsonwebtokens size={50} />} />
                    <SkillCard name="Database" icon={<FaDatabase size={50} />} />
                    {/* Additional Skills */}
                    <SkillCard name="Tailwind CSS" icon={<SiTailwindcss size={50} />} />
                    <SkillCard name="TypeScript" icon={<SiTypescript size={50} />} />
                    <SkillCard name="Git" icon={<SiGit size={50} />} />
                    <SkillCard name="npm Packages" icon={<SiNpm size={50} />} />
                </motion.div>
            </div>
        </div>
    );
};

// Reusable SkillCard Component
const SkillCard = ({ name, icon }) => {
    return (
        <motion.div
            className="bg-[#292148] p-5 rounded-xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
        >
            {icon}
            <p className="mt-3 text-lg font-medium">{name}</p>
        </motion.div>
    );
};

export default MySkill;
