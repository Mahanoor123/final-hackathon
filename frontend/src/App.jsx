import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HijabGallery from "./pages/HijabGallery";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
        <Navbar />
        <HijabGallery />
        
        <Footer />
      </div>
    </>
  );
}

export default App;
