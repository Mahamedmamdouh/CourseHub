import React from "react";
import CourseCard from "../common/CourseCard";
import img1 from "../../assets/images/home/Project8.png"
import img2 from "../../assets/images/home/Project4.png"
import img3 from "../../assets/images/home/Project2.png"
import img4 from "../../assets/images/home/Project15.webp"
import img5 from "../../assets/images/home/Project16.webp"
import img6 from "../../assets/images/home/Project3.png"


export default function CourseVideos() {
  const courses = [
    {
      image:img1,
      title: "Street Market",
      lessons: 10,
      duration: "3h",
    },
    {
      image: img2,
      title: "Car Editing",
      lessons: 12,
      duration: "4h",
    },
    {
      image: img3,
      title: "Coffee Ads",
      lessons: 8,
      duration: "2.5h",
    },
    {
      image: img4,
      title: "Nescafe Design",
      lessons: 9,
      duration: "3h",
    },
    {
      image: img5,
      title: "Deep Space",
      lessons: 11,
      duration: "3.5h",
    },
    {
      image: img6,
      title: "Creative Poster",
      lessons: 7,
      duration: "2h",
    },
 
  ];

  return (
    <section className="bg-gradient-to-b from-[#f3f4f6] to-[#d1fae5] py-10 px-5 rounded-[100px]">
      
      {/* Header */}
   <div className="text-center mb-8 px-4">
  {/* العنوان الرئيسي */}
  <h2 
    className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-4 tracking-tight"
    style={{ fontFamily: "'Lexend', sans-serif" }}
  >
    Course videos
  </h2>

  {/* النص المطلوب في الصورة */}
  <p 
    className="text-black font-semibold text-2xl md:text-5xl max-w-4xl mx-auto tracking-tight leading-[1.1]"
    style={{ fontFamily: "'Lexend', sans-serif" }}
  >
    Carefully designed training pathways to move you from the 
    "implementer" stage to the status of "creative partner"
  </p>
</div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80">
          View All courses
        </button>
      </div>
    </section>
  );
}