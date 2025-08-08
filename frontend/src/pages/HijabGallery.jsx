import axios from "axios";
import React, { useEffect, useState } from "react";

import HijabCard from "../components/HijabCard";

const HijabGallery = () => {

  const [hijabs, setHijabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHijabs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_HOST_URL}/hijabs`
        );
        console.log(data.hijabs);

        setHijabs(data.hijabs);
      } catch (err) {
        console.error("Error fetching hijabs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHijabs();
  }, []);


  return (
    <section className="py-12 bg-gradient-to-br from-white via-pink-50 to-pink-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Featured Hijab Styles
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="w-10 h-10 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid gap-8 px-6 md:px-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.isArray(hijabs) && hijabs.map((hijab) => (
            <div key={hijab._id}  className="group relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <HijabCard key={hijab._id} hijab={hijab} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HijabGallery;
