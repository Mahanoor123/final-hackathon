import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ReviewModal = ({ isOpen, onClose, hijabId, userId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const {data} = await axios.post(`http://localhost:5000/api/reviews`, {
        userId,
        hijabId,
        rating,
        comment,
      });

      if(data.success) {
        Swal.fire("Thanks", "your review has been posted", "success");
      }
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-black">
      <div className="bg-gradient-to-br from-pink-100 via-white to-orange-100 rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Post Review</h2>

        {/* Star Ratings */}
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-2xl ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          className="w-full border p-2 rounded mb-4"
        ></textarea>

         <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-pink-500 text-white rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
