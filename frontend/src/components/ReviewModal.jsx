import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/authContext";

const ReviewModal = ({ isOpen, onClose, productId }) => {

  const {user} = useAuth();

  const [formData, setFormData] = useState({
    rating: 5,
    review: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_HOST_URL}/reviews`,
        {
          productId,
          userId: user?._id,
          rating: formData.rating,
          comment: formData.review,
        },

      );

      if (data.success) {
        Swal.fire("Thank you!", "Your review has been posted.", "success");
        onClose();
      } else {
        Swal.fire("Failed!", data.message || "Could not post review.", "error");
      }
    } catch (error) {
      console.error("Review failed", error);
      Swal.fire("Oops!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-black">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Post a Review</h2>

        <form onSubmit={handleSubmit}>
          {/* Rating */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating</label>
            <select
              className="w-full border rounded px-3 py-2"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            >
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>
                  {num} Star{num > 1 && "s"}
                </option>
              ))}
            </select>
          </div>

          {/* Review Text */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Review</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="4"
              placeholder="Write your thoughts..."
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
