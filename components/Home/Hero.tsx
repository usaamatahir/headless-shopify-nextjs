import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="flex-grow">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            Denim Collection 2021
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600 max-w-md mb-5">
            Start of the new year by hitting the ground, looking fabulous in the
            new Denim Collection 2021.
          </p>
          <Link href="/products">
            <a
              aria-label="explore collection"
              className="border border-solid border-gray-900 rounded-3xl py-2 px-6 text-white bg-gray-800 hover:bg-gray-900 mt-10"
            >
              Explore collection
            </a>
          </Link>
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
