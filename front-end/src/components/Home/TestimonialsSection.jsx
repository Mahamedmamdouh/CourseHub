import React from 'react'

import student4 from "../../assets/images/home/Student4.webp"
import student5 from "../../assets/images/home/student5.webp"
import student6 from "../../assets/images/home/student6.webp"
import student7 from "../../assets/images/home/student7.webp"
import student8 from "../../assets/images/home/student8.webp"
import student9 from "../../assets/images/home/student9.webp"
import TestimonialsCard from '../common/TestimonialsCard'

export default function TestimonialsSection() {

  const reviews = [
    { name: "Layla Mansour", role: "Creative Director", feedback: "The attention to detail is simply world-class. They took my vision and turned it into something even better than I imagined.", image: student4, isLight: false },
    { name: "Aya Mahmoud", role: "Freelance Graphic Designer", feedback: "This course was a turning point in my career. I went from struggling with tools to confidently handling complex projects.", image: student5, isLight: true },
    { name: "Mostafa Khaled", role: "Beginner Student", feedback: "I started with zero knowledge in design, but after just a few weeks, I can now create my own logos and posters.", image: student6, isLight: false },
    { name: "Mostafa Khaled", role: "Beginner Student", feedback: "I started with zero knowledge in design, but after just a few weeks, I can now create my own logos and posters.", image: student7, isLight: false },
    { name: "Mostafa Khaled", role: "Beginner Student", feedback: "I started with zero knowledge in design, but after just a few weeks, I can now create my own logos and posters.", image: student8, isLight: true },
    { name: "Mostafa Khaled", role: "Beginner Student", feedback: "I started with zero knowledge in design, but after just a few weeks, I can now create my own logos and posters.", image: student9, isLight: false },

  ];

  return (
    <section className="py-16 px-4 bg-white text-center font-sans">
      {/* Headings */}
      <h2 className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-4 tracking-tight">
        Testimonials
      </h2>
      <h3  className="text-black font-semibold text-2xl md:text-5xl max-w-4xl mx-auto tracking-tight leading-[1.1]"
    style={{ fontFamily: "'Lexend', sans-serif" }}>Student's Feedback</h3>
      
      <p className="text-black text-2xl md:text-3xl font-semibold max-w-xl mx-auto tracking-tight leading-relaxed">
        Elite voices: Success stories that began with passion and transformed into tangible professional realities thanks to methodology.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-10">
        {reviews.map((item, index) => (
          <TestimonialsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

