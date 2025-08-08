import axios from "axios";
import React, { useEffect, useState } from "react";
import HijabCard from "../components/HijabCard";
import ReviewModal from "../components/ReviewModal";


const HijabGallery = () => {
  // const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  // const [selectedHijabStyle, setSelectedHijabStyle] = useState(null);

  // const handleOpenReview = (style) => {
  //   setSelectedHijabStyle(style);
  //   setIsReviewModalOpen(true);
  // };

  const [hijabs, setHijabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHijabs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_HOST_URL}/hijabstyles`
        );
        console.log(data);
        setHijabs(data.data);
      } catch (err) {
        console.error("Error fetching hijabs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHijabs();
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-pink-100 via-white to-orange-100 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="w-10 h-10 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid gap-8 px-6 md:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.isArray(hijabs) &&
            hijabs.map((hijab) => (
              <div
                key={hijab._id}
                className="group relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <HijabCard
                  key={hijab._id}
                  hijab={hijab}
                 /*  onPostReviewClick={() => handleOpenReview(style)} */
                />
              </div>
            ))}
        </div>
      )}

      {/* <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        hijabStyle={selectedHijabStyle}
      /> */}
    </section>
  );
};

export default HijabGallery;
