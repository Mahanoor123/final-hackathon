import React from "react";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto my-6">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-gray-600 text-sm">Optimize Fashion</h1>
        <h1 className="text-white font-semibold text-5xl text-center pt-2">
          Discover the perfect style for every occasion
        </h1>
        <p className="text-gray-300 font-normal text-sm text-center pt-4">
          Choose the best
        </p>
      </div>
      <img src="/home.png" className="py-4" />
    </div>
  );
};

export default Home;
