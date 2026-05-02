import React from 'react'
import Hero from '../components/Home/Hero'
import HeroContent from '../components/Home/HeroContent'
import SubscriptionForm from '../components/Home/SubscriptionForm'
import IntroVideoSection from '../components/Home/IntroVideoSection'
import Tracks from '../components/Home/Tracks'
import WhyHasOurPlatform from '../components/Home/WhyHasOurPlatform'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import MentorSection from '../components/Home/MentorSection.jsx'
import CourseProjects from '../components/Home/CourseProject.jsx'
import TraineesProjects from '../components/Home/TraineesProjects.jsx'
import Footer from '../components/Layout/Footer.jsx'
import FinalSection from '../components/Home/FinalSection.jsx'
import LeaderSection from '../components/Home/LeaderSection.jsx'
import CourseVideos from '../components/Home/CourseVideos.jsx'
import ToolsSection from '../components/Home/ToolsSection.jsx'
import FreeLectureSection from '../components/Home/FreeLectureSection.jsx'
import TestimonialsSection from '../components/Home/TestimonialsSection.jsx'
import CertificationSection from '../components/Home/CertificationSection.jsx'
import CustomerSlider from '../components/Home/CustomerSlider.jsx'

export default function Home() {
  return (
    <>
      <Hero/>
    <HeroContent/>
    <SubscriptionForm/>
    <IntroVideoSection/>
    <WhyHasOurPlatform/>
    <Tracks/>
    <WhyChooseUs/>
    <MentorSection/>     
    <LeaderSection/>
    <CustomerSlider/> 
    <CourseVideos/>
    <CourseProjects/>
    <ToolsSection/>
    <FreeLectureSection/>
    <TestimonialsSection/>
    <CertificationSection/>
    <TraineesProjects/>
    <FinalSection/>

    </>
  
  )
}
