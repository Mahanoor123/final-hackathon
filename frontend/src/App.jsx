import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HijabGallery from "./pages/HijabGallery";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
        <Navbar />
        <Hero />
        <HijabGallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
