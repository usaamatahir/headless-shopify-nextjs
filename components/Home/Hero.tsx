import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Denim Collection 2021
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600">
            Start of the new year by hitting the ground, looking fabulous in the
            new Denim Collection 2021.
          </p>
          <button
            aria-label="view catalogue"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:bg-gray-900 hover:text-white bg-gray-50 px-5 py-2 rounded-2xl border border-gray-900"
          >
            Explore collection
          </button>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            <div className="relative w-full h-80 object-contain sm:block">
              <Image
                src="https://i.ibb.co/ZhFMkfH/Businessman-trying-suit-in-store.jpg"
                alt="apartment design"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <div className="relative w-full h-60 object-cover sm:block">
              <Image
                src="https://i.ibb.co/t82Bz7m/Interior-of-fashion-clothing-store-for-women.jpg"
                alt="Interior-of-fashion-clothing-store-for-women"
                layout="fill"
                priority
              />
            </div>
            <div className="relative w-full h-60 object-cover sm:block">
              <Image
                src="https://i.ibb.co/mR736T4/Close-up-of-Colorful-t-shirts-on-hangers-apparel-background.jpg"
                alt="Close-up-of-Colorful-t-shirts-on-hangers-apparel-background"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
