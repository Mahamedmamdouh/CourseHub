import React from 'react'
import CourseHero from '../components/Courses.jsx/CourseHero'
import FeatureSection from '../components/Courses.jsx/FeaturesSection'
import InstructorProfile from '../components/Courses.jsx/InstructorProfile'
import FreeLectureSection from './../components/Home/FreeLectureSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import DesignCourseCards from '../components/Courses.jsx/DesignCourseCards';
import CertificationSection from '../components/Home/CertificationSection';
import MentorSection from '../components/Home/MentorSection';
import FAQSection from '../components/Courses.jsx/FAQSection';
import OurCourse from '../components/Courses.jsx/OurCourse';

export default function Courses() {
  return (
    <>
   <CourseHero/>
   <FeatureSection/>
   <InstructorProfile/>
   <FreeLectureSection/>
   <OurCourse/>
   <DesignCourseCards/>
   <CertificationSection />
   <MentorSection/>
   <TestimonialsSection/>
   <FAQSection/>
   

   </>
  )
}
