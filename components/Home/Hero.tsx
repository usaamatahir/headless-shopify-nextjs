import React from "react";

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
            <img
              src="https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I="
              alt="apartment design"
              className="w-full h-60 object-cover sm:block"
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img
              src="https://media.istockphoto.com/photos/interior-of-clothing-store-picture-id1023612090?k=20&m=1023612090&s=612x612&w=0&h=OEvH3MRPMPMa7aFKV5OExSlDndvh2YZ87QZHCLXIvJo="
              className="w-full h-60 object-cover hidden sm:block"
              alt="kitchen"
            />
            <img
              src="https://media.istockphoto.com/photos/close-up-of-colorful-tshirts-on-hangers-apparel-background-picture-id1170635789?b=1&k=20&m=1170635789&s=170667a&w=0&h=5CZtqZRGBRkQtZw3YIRotRDu4OROZPSkXeyzaMs-xYE="
              className="w-full h-60 object-cover hidden sm:block"
              alt="sitting room"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
