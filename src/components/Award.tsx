"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaAward, FaProjectDiagram, FaSmile } from "react-icons/fa";

const Award = () => {
  const awards = [
    {
      id: 1,
      icon: <FaAward className="text-[#E44D50] text-6xl" />,
      count: 1,
      title: "PH-Web Dev",
      description: "Award",
      isStatic: true,
    },
    {
      id: 2,
      icon: <FaProjectDiagram className="text-[#E44D50] text-6xl" />,
      count: 120,
      title: "Projects Completed",
      description: "Successfully Done",
    },
    {
      id: 3,
      icon: <FaSmile className="text-[#E44D50] text-6xl" />,
      count: 680,
      title: "Happy Clients",
      description: "Satisfied Customers",
    },
  ];

  return (
    <div className="py-16 px-4  text-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="border-[1px] h-[250px] w-[300px] py-6 px-5 rounded-lg border-[#E44D50] flex flex-col items-center gap-3 shadow-lg bg-[#251D3A] text-center transform transition-all duration-300 hover:shadow-2xl"
          >
            {/* Title */}
            <p className="text-xl font-semibold text-gray-300">{award.description}</p>
            
            {/* Icon */}
            {award.icon}
            
            {/* Count Animation */}
            <h3 className="text-[40px] font-bold mt-2 text-[#E44D50]">
              {award.isStatic ? (
                award.count
              ) : (
                <CountUp start={0} end={award.count} duration={3} />
              )}
            </h3>

            {/* Subtitle */}
            <p className="text-[16px] font-[400] text-gray-400">{award.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Award;
