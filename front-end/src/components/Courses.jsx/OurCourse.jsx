import React from "react";
import CourseCard from "../common/CourseCard";
import img1 from "../../assets/images/home/Project8.png"
import img2 from "../../assets/images/home/Project4.png"
import img3 from "../../assets/images/home/Project2.png"
import img4 from "../../assets/images/home/Project15.webp"
import img5 from "../../assets/images/home/Project16.webp"
import img6 from "../../assets/images/home/Project3.png"
import img7 from "../../assets/images/home/project17.webp"
import img8 from "../../assets/images/course/project18.webp"
import img9 from "../../assets/images/course/project19.webp"
import img10 from "../../assets/images/course/project20.webp"
import img11 from "../../assets/images/course/project21.webp"



export default function OurCourse({ variant = "colored" }) {
  const courses = [
        {
      image:img7,
      title: "Street Market",
      lessons: 10,
      duration: "3h",
    },
      {
      image:img8,
      title: "Street Market",
      lessons: 10,
      duration: "3h",
    },
      {
      image:img11,
      title: "Street Market",
      lessons: 10,
      duration: "3h",
    },
      {
      image:img9,
      title: "Street Market",
      lessons: 10,
      duration: "3h",
    },
      {
      image:img5,
      title: "Street Market",
      lessons: 10,
      duration: "3h",
    },
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
      image: img10,
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
    <section className="bg-gradient-to-b from-[#f3f4f6] to-[#d1fae5] py-10 px-5 rounded-[100px]"
      className={`py-10 px-5 ${
    variant === "white"
      ? "bg-white rounded-none"
      : "bg-gradient-to-b from-[#f3f4f6] to-[#d1fae5] rounded-[100px]"
  }`}>
      
      {/* Header */}
   <div className="text-center mb-8 px-4">
  {/* العنوان الرئيسي */}
  <h2 
    className="text-4xl md:text-6xl font-bold leading-tight gradient-text mb-4 tracking-tight"
    style={{ fontFamily: "'Lexend', sans-serif" }}
  >
    Course videos
  </h2>

 
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
          Subscribe to the course

        </button>
      </div>
    </section>
  );
}