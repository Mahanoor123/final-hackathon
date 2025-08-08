import React, { useState } from "react";
import axios from "axios";
import { setToken, setUser } from "../utils/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_HOST_URL}/auth/register`,
        formData
      );

      console.log(">>>>> ", data);

      if (data.success) {
        setToken(data.token);
        setUser(data.user);

        Swal.fire("Congratulations!", "Registration Successful", "success");

        setFormData({
          name: "",
          email: "",
          password: "",
        });

        navigate("/");
      } else {
        Swal.fire("Oops!", "Something went wrong.", "error");
        console.log("Signup failed", data.mesage);
      }
    } catch (error) {
      console.log("Signup failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 shadow-lg shadow-pink-200/10">
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <h1 className="text-3xl font-bold text-center text-pink-300 mb-6 tracking-wide">
            Register Yourself
          </h1>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-white/70">Name</label>
            <input
              className="bg-black/40 border border-white/10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400/50"
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-white/70">Email</label>
            <input
              className="bg-black/40 border border-white/10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/50"
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-medium text-sm text-white/70">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-black/40 border border-white/10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400/50"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-black font-semibold py-2 rounded-xl hover:opacity-90 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
