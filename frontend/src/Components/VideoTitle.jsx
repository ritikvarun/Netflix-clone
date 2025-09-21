import React from "react";
import { FaPlay } from "react-icons/fa6";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white w-full aspect-video absolute pt-[30%] px-2 sm:pt-[18%] sm:px-4 md:px-8 lg:px-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        {title}
      </h1>
      <p className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-3 text-xs sm:text-sm md:text-base lg:text-lg">
        {overview}
      </p>
      <div className="mt-6 flex-col sm:flex-row gap-2 sm:gap-4 hidden sm:flex">
        <button className="px-4 sm:px-6 flex items-center justify-center py-2 bg-white text-black rounded-md cursor-pointer hover:bg-opacity-80 text-base sm:text-lg font-semibold">
          <FaPlay className="mr-2" />
          Play
        </button>
        <button className="px-4 sm:px-6 py-2 bg-white text-black rounded-md text-base sm:text-lg font-semibold">
          Watch More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
