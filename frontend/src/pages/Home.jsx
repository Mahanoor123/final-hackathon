import React from "react";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto my-6">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-gray-600 text-sm">Optimize Growth</h1>
        <h1 className="text-white font-semibold text-5xl text-center pt-2">
          Streamline your goals with our KPI & Project management platform
        </h1>
        <p className="text-gray-300 font-normal text-sm text-center pt-4">
          Our innoative platform offers a robust solution to help you stay
          organized, focus and on track to achieve your strategc objectives
        </p>
        <div className="flex items-center gap-2 my-5">
          <button className="px-4 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 text-white font-bold transition duration-300 shadow-md shadow-pink-300/30">Try it free</button>
          <button className="px-4 py-2 rounded-lg border border-pink-400 hover:border-pink-500 text-pink-700 font-bold transition duration-300 shadow-md shadow-pink-300/30">Register</button>
        </div>
      </div>
      <img src="/home.png" className="py-4" />
    </div>
  );
};

export default Home;
