import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
         <Route path="courses" element={<Courses/>} /> 
        {/* <Route path="course/:id" element={<CourseDetails />} /> */}
      </Route>
    </Routes>
  );
}

export default App;