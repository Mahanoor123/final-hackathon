import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReviewModal from "./ReviewModal";
import { Star } from "lucide-react";


const HijabCard = ({ hijab}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

   const handlePostReviewClick = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "You have to login",
        text: "Please login to post a review.",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group relative">
      <div className="h-60 overflow-hidden">
        <img
          src={hijab?.imageUrl}
          alt={hijab.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{hijab.name}</h3>

        <p className="text-gray-600 text-sm line-clamp-2">
          {hijab.description}
        </p>

        <div className="flex items-center gap-1 text-yellow-500 mt-1">
          <Star className="w-4 h-4 fill-yellow-500" />
          <span className="font-medium">
            {hijab.avgRating?.toFixed(1) || 0}
          </span>
          <span className="text-gray-500 text-sm">
            ({hijab.reviewCount || 0} reviews)
          </span>
        </div>

        <button
          onClick={handlePostReviewClick}
          className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition"
        >
          Post Review
        </button>
      </div>

      {/* Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        hijabId={hijab._id}
        userId={user?._id}
      />
    </div>
  );
};

export default HijabCard;
