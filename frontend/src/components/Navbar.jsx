import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 left-0 right-0 w-full max-w-screen-2xl mx-auto p-3 backdrop-blur-xl border-b border-white/10 bg-white/5 shadow-xl shadow-pink-100/10">
      <div className="flex justify-between items-center text-gray-300">
        <div className="text-xl font-bold">Askiii</div>

        <nav className="flex gap-6 py-3 px-8">
          <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-6 md:bg-transparent transition-colors">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Pricing", path: "/pricing" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                cursor-pointer hover:scale-1 ${
                  isActive
                    ? "font-semibold underline text-blue-400"
                    : "text-gray-300"
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
          <div className="flex gap-2 items-center ">
            {user.image ? (
              <img
                src={user.image}
                alt="User Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <UserCircle className="w-8 h-8 text-gray-300" />
            )}
            <button className="px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 text-white transition duration-300 shadow-md shadow-pink-300/30"> 
            <NavLink to="/question">Ask a question</NavLink>
          </button>
          </div>

        ) : (
          <button className="px-6 py-2 rounded-lg bg-purple-400 hover:bg-purple-500 text-white font-bold transition duration-300 shadow-md shadow-pink-300/30">
            <NavLink to="/login">Login</NavLink>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
