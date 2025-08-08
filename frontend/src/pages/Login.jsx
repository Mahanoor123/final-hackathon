import axios from "axios";
import React, { useState } from "react";
import { setToken, setUser } from "../utils/auth";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("submitted ");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_HOST_URL}/auth/login`,
        { email: formData.email, password: formData.password }
      );

      console.log(">>>>", data);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);

        Swal.fire("Congratulations!", "Login successful", "success");

        setFormData({
          email: " ",
          password: " ",
        });

        navigate("/");
      } else {
        Swal.fire("Login failed!", "error");
        console.log("Login failed", data.mesage);
      }
    } catch (error) {
      console.log("Login failed", error);
      Swal.fire("Oops!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      <div className="w-full max-w-lg p-10 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 shadow-xl shadow-pink-100/10">
        <h1 className="text-3xl font-bold text-center mb-8 text-pink-300 tracking-wider">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-pink-200 font-medium mb-1">Email</label>
            <input
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300"
              type="text"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-pink-200 font-medium mb-1">Password</label>
            <input
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all duration-300"
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 rounded-lg bg-pink-400 hover:bg-pink-500 text-white font-bold transition duration-300 shadow-md shadow-pink-300/30"
          >
            Login
          </button>
          <div className="flex justify-between items-center py-3 text-sm ">
            <NavLink to="/register">
              <button className="text-dark font-medium hover:text-underline">
                Register
              </button>
            </NavLink>

            <NavLink to="/forgot-password">
              <button className="text-dark font-medium hover:underline cursor-pointer">
                Forgot password?
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
