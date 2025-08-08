import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-pink-50 border-t border-pink-300">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Logo or Brand Name */}
        <div className="text-pink-600 font-semibold text-lg">
          Hijab Gallery
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center sm:text-left">
          Developed by <span className="text-pink-500 font-medium">Mahanoor Khan</span> | All Rights Reserved © {new Date().getFullYear()}
        </p>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
