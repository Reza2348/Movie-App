import React from "react";
import Img from "../../assets/img/Rectangle 2.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      <img
        src={Img}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to Movie Explorer
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mb-6">
          Discover trending movies, series, and animations. Search, explore, and
          enjoy!
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
