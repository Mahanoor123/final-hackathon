import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  const { user } = useAuth();

  const openProfile = () => {
    console.log("khul gaiii");
    
  }

  return (
    <header className="sticky top-0 left-0 right-0 w-full bg-white shadow-md border-b border-pink-200 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        
        <div className="text-2xl font-bold text-orange-500 tracking-wide">
          حجابی
        </div>

        <nav>
          <ul className="flex flex-col md:flex-row items-center gap-4">
            {[
              { label: "Home", path: "/" },
              { label: "Hijabs", path: "/hijabs" },
            ].map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    px-3 py-1 rounded-md transition-all duration-300
                    ${isActive 
                      ? "text-pink-500 font-semibold border-b-2 border-orange-400"
                      : "text-gray-700 hover:text-orange-500"
                    }
                  `}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {user ? (
          <div className="flex gap-2 items-center">
            {user.image ? (
              <img
                src={user.image}
                alt="User Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-pink-300"
              />
            ) : (
              <UserCircle onClick={openProfile} className="w-8 h-8 text-orange-400" />
            )}
          </div>
        ) : (
          <NavLink
            to="/login"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 
            hover:from-pink-500 hover:to-orange-500 text-white font-bold 
            transition duration-300 shadow-md"
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
