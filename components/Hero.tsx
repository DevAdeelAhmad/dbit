import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex bgsvg z-50 flex-col items-center justify-center text-center">
      <div className="hero-text z-50 text-6xl font-extrabold tracking-wide py-5 md:lg:py-14">
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-10 md:lg:mt-3">
          Traditional Cloud
        </h1>
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-3 md:lg:py-6">
          storage systems
        </h1>

        {/* Button */}
        <Link href="/mining">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-buttonPrimary to-buttonSecondary focus:ring-4 focus:outline-none
          focus:ring-blue-300 font-medium rounded-lg text-sm w-40 px-5 py-2.5 text-center mt-14 md:lg:mt-0"
          >
            Start Mining
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
