import React from "react";
import Link from "next/link";
import { FaFacebookF, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D1730] text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Say Hi Section */}
        <h2 className="text-2xl font-semibold">Lets Say Hi 👋</h2>
        <Link
          href="mailto:tonmoyahamed2009@gmail.com"
          className="text-[#F95353] text-lg font-medium hover:underline"
        >
          tonmoyahamed2009@gmail.com
        </Link>

        {/* Social Media Links */}
        <div className="flex gap-5 mt-3">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="p-3 rounded-full bg-[#F95353] hover:bg-white hover:text-[#F95353] transition-all duration-300"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://dribbble.com"
            target="_blank"
            className="p-3 rounded-full bg-[#F95353] hover:bg-white hover:text-[#F95353] transition-all duration-300"
          >
            <FaDribbble size={20} />
          </Link>
          <Link
            href="https://behance.net"
            target="_blank"
            className="p-3 rounded-full bg-[#F95353] hover:bg-white hover:text-[#F95353] transition-all duration-300"
          >
            <FaBehance size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
