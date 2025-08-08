import React from "react";
import { BellIcon, Calendar, SearchIcon } from "lucide-react";

const Topbar = () => {
  return (
    <div className="py-2 sm:px-6 flex flex-wrap justify-end ">
      <div className="flex flex-col items-center gap-5 md:flex-row md:w-auto">
        <SearchIcon className="text-white" />
        <div className="relative">
          <BellIcon className="cursor-pointer text-white " />
          <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </div>
       
      </div>
    </div>
  );
};

export default Topbar;
