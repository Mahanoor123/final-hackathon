import React, { useState } from "react";

import { useAuth } from "../contexts/authContext";
import ReviewModal from "./ReviewModal";

const HijabCard = ({ hijab }) => {
  const { user } = useAuth();


const hijabImages = [
  "/hijab.webp",
  "/hijab2.jpg",
  "/hijab3.jpg",
  "/hijab4.jpg",
];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReview = () => {

    setIsModalOpen(false);
  };



  return (
    <div>
      <div className="h-60 overflow-hidden">
        <img
          src="/hijab.webp"
          alt={hijab.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
          {hijab.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {hijab.description}
        </p>
      </div>

      {/* Overlay Button */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
        {user && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-700 transition"
          >
            Post reviews
          </button>
        )}
      </div>

      {/* Review Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onClick={handleReview}
      />
    </div>
  );
};

export default HijabCard;
