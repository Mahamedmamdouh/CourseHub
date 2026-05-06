import React from 'react'
import AboutHeroSection from '../components/AboutUs/AboutHeroSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import VisionSection from '../components/AboutUs/VisionSection'
import MissionSection from '../components/AboutUs/MissionSection'
import ANSPhilosophy from '../components/AboutUs/ANSPhilosophy'
import LeaderSection from '../components/Home/LeaderSection'
import CustomerSlider from '../components/Home/CustomerSlider'
import ImpactSection from '../components/AboutUs/ImpactSection'
import MentorSection from '../components/Home/MentorSection'

export default function AboutUs() {
  return (
    <>
    <AboutHeroSection/>
    <VisionSection/>
    <MissionSection/>
    <ANSPhilosophy/>
    <LeaderSection/>
    <CustomerSlider/>
    <ImpactSection/>
     <MentorSection/>
    <TestimonialsSection/>  
    
    </>
  )
}
