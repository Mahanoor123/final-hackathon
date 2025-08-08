import { UserCircle } from "lucide-react";
import React from "react";
import { useAuth } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user } = useAuth();

  const menuItems = [
    { name: "My questions", path: "/user/my-questions" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/" },
  ];

  if (user?.role === "admin") {
    menuItems.splice(0, 0, { name: "dashboard", path: "/admin/dashboard" });
    menuItems.splice(1, 0, { name: "users", path: "/admin/all-users" });
  }

  return (
    <div className="p-5 flex flex-wrap text-white">
      <div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-xl font-bold italic text-emerald-700">
            Askiii
          </h1>

          <div className="flex flex-col gap-1 items-center justify-center bg-emerald-50 shadow-sm rounded-lg px-6 py-2">
            {user && (
              <div className="flex flex-col items-center ">
                {user.image ? (
                  <img
                    src={user.image}
                    alt="User Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-12 h-12 text-gray-400" />
                )}
                <h1 className="text-sm font-semibold text-gray-700">{user.name}</h1>
                <h2 className="text-sm text-gray-600">{user.role}</h2>
              </div>
            )}
          </div>
        </div>

        <nav className="pt-12 flex-col gap-4 justify-start">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              className="flex items-center py-2 transition text-md font-normal"
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
