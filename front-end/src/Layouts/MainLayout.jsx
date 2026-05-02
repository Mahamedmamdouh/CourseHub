import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}