'use client'
import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    text: "This service is outstanding! The team is very professional and dedicated.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    text: "I had a great experience! The work quality exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Robert Wilson",
    role: "UI/UX Designer",
    text: "Absolutely love the professionalism and creativity in the work!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#1D1730] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What People Say</h2>
        <div className="relative bg-[#292148] p-8 rounded-lg shadow-lg">
          <FaQuoteLeft className="absolute top-4 left-4 text-[#F95353] text-2xl" />
          <FaQuoteRight className="absolute bottom-4 right-4 text-[#F95353] text-2xl" />
          <p className="text-lg italic">{testimonials[currentIndex].text}</p>
          <div className="mt-6 flex flex-col items-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full border-2 border-[#F95353]"
            />
            <h4 className="text-xl font-medium mt-2">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-[#F95353] rounded-lg hover:bg-white hover:text-[#F95353] transition-all"
          >
            Prev
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-[#F95353] rounded-lg hover:bg-white hover:text-[#F95353] transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
