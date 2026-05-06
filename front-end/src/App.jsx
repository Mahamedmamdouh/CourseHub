import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Instructor from "./pages/Instructor";
import Certifications from "./pages/Certifications";
import CourseVideos from "./pages/CourseVideos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
         <Route path="courses" element={<Courses/>} /> 
          {/* <Route path="course/:id" element={<CourseDetails />} /> */}
         <Route path="about" element={<AboutUs/>} /> 
         <Route path="contact" element={<ContactUs/>} /> 
         <Route path="instructor" element={<Instructor/>} /> 
         <Route path="certifications" element={<Certifications/>} /> 
         <Route path="Videos" element={<CourseVideos/>} /> 
       
      </Route>
    </Routes>
  );
}

export default App;