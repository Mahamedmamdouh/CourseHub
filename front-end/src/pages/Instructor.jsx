import React from 'react'
import InstructorHeroSection from '../components/Instructor/InstructorHeroSection'
import JourneyAndGoal from '../components/Instructor/JourneyAndGoal'
import VideoIntroSection from '../components/Instructor/VideoIntroSection'
import UniqueExperience from '../components/Instructor/UniqueExperience'
import InstructorOurImpact from '../components/Instructor/InstructorOurImpact'
import CustomerSlider from '../components/Home/CustomerSlider'
import TransformationCTA from '../components/Instructor/TransformationCTA'

export default function Instructor() {
  return (
    <>
    <InstructorHeroSection/>
    <JourneyAndGoal/>
    <VideoIntroSection/>
    <UniqueExperience/>
    <InstructorOurImpact/>
    <CustomerSlider/>
    <TransformationCTA/>
   
</>
  )
}