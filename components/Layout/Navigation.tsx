import Link from "next/link";
import React, { useState } from "react";
import {
  SearchIcon,
  HeartIcon,
  ShoppingBagIcon,
  MenuAlt1Icon,
  XIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

export default function Navigation() {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dark:bg-gray-900">
      <div>
        <div className="relative">
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex"
            } bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}
          >
            <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
              <SearchIcon className="w-6 h-6 object-contain border-none text-gray-600 outline-none " />

              <input
                type="text"
                placeholder="Search for products"
                className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none"
              />
            </div>
            <div className="space-x-6">
              <button
                aria-label="go to cart"
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <ShoppingBagIcon className="w-6 h-6 object-contain border-none text-gray-600 outline-none " />
              </button>
            </div>
          </div>
          {/* For md screen size */}
          {/* For large screens */}
          <div className="dark:bg-gray-900 bg-gray-50 px-6 py-9">
            <div className="container mx-auto flex items-center justify-between">
              <h1
                className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white"
                aria-label="the Crib."
              >
                <svg
                  className="fill-stroke"
                  width={93}
                  height={19}
                  viewBox="0 0 93 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.272 6V9.336H7.008V13.392C7.008 13.952 7.128 14.352 7.368 14.592C7.624 14.832 8 14.952 8.496 14.952C8.848 14.952 9.152 14.92 9.408 14.856C9.664 14.776 9.904 14.672 10.128 14.544L10.44 17.376C10.04 17.648 9.512 17.856 8.856 18C8.216 18.16 7.584 18.24 6.96 18.24C5.424 18.24 4.24 17.936 3.408 17.328C2.576 16.704 2.16 15.648 2.16 14.16V9.336H0.192V6H2.16V3.384L7.008 2.04V6H10.272ZM12.1916 18V1.056H17.0396V8.328C17.7436 6.616 18.9996 5.76 20.8076 5.76C22.0236 5.76 22.9836 6.12 23.6876 6.84C24.3916 7.544 24.7436 8.56 24.7436 9.888V18H19.8956V11.184C19.8956 10.496 19.7836 10.024 19.5596 9.768C19.3516 9.512 19.0556 9.384 18.6716 9.384C18.1916 9.384 17.7996 9.568 17.4956 9.936C17.1916 10.304 17.0396 10.888 17.0396 11.688V18H12.1916ZM33.2184 18.24C31.1384 18.24 29.5064 17.696 28.3224 16.608C27.1384 15.52 26.5464 13.984 26.5464 12C26.5464 10.672 26.8184 9.544 27.3624 8.616C27.9064 7.688 28.6664 6.984 29.6424 6.504C30.6184 6.008 31.7464 5.76 33.0264 5.76C34.3384 5.76 35.4504 6.008 36.3624 6.504C37.2904 6.984 37.9944 7.656 38.4744 8.52C38.9704 9.384 39.2184 10.392 39.2184 11.544C39.2184 12.136 39.1784 12.64 39.0984 13.056H31.2024C31.3144 13.776 31.5384 14.272 31.8744 14.544C32.2264 14.8 32.6904 14.928 33.2664 14.928C33.7624 14.928 34.1544 14.824 34.4424 14.616C34.7464 14.408 34.9624 14.12 35.0904 13.752L38.9784 14.904C38.7704 15.64 38.3784 16.256 37.8024 16.752C37.2264 17.248 36.5384 17.624 35.7384 17.88C34.9384 18.12 34.0984 18.24 33.2184 18.24ZM33.0264 9.048C32.5144 9.048 32.1064 9.192 31.8024 9.48C31.5144 9.768 31.3224 10.256 31.2264 10.944H34.6344C34.5704 10.32 34.4104 9.848 34.1544 9.528C33.9144 9.208 33.5384 9.048 33.0264 9.048Z"
                    fill="#9CA3AF"
                  />
                  <path
                    d="M46.9723 5.76C48.3163 5.76 49.4203 5.952 50.2843 6.336C51.1643 6.72 51.8283 7.208 52.2763 7.8C52.7243 8.392 52.9803 9.016 53.0443 9.672L48.5563 11.04C48.5083 10.384 48.3723 9.896 48.1483 9.576C47.9403 9.256 47.6043 9.096 47.1403 9.096C46.5323 9.096 46.0763 9.32 45.7723 9.768C45.4843 10.216 45.3403 10.976 45.3403 12.048C45.3403 13.168 45.5083 13.928 45.8443 14.328C46.1803 14.712 46.6203 14.904 47.1643 14.904C48.0443 14.904 48.5483 14.32 48.6763 13.152L53.0203 14.52C52.9563 15.208 52.6763 15.832 52.1803 16.392C51.7003 16.952 51.0363 17.4 50.1883 17.736C49.3403 18.072 48.3403 18.24 47.1883 18.24C45.1083 18.24 43.4683 17.696 42.2683 16.608C41.0683 15.52 40.4683 13.984 40.4683 12C40.4683 10.672 40.7403 9.544 41.2843 8.616C41.8283 7.688 42.5883 6.984 43.5643 6.504C44.5403 6.008 45.6763 5.76 46.9723 5.76ZM54.6604 18V6H59.0044L59.1484 8.808C59.4204 7.864 59.8444 7.12 60.4204 6.576C61.0124 6.032 61.7804 5.76 62.7244 5.76C63.0604 5.76 63.3244 5.792 63.5164 5.856C63.7244 5.904 63.8844 5.968 63.9964 6.048L63.5644 9.984C63.4044 9.92 63.1964 9.864 62.9404 9.816C62.6844 9.768 62.3884 9.744 62.0524 9.744C61.3324 9.744 60.7244 9.944 60.2284 10.344C59.7484 10.728 59.5084 11.312 59.5084 12.096V18H54.6604ZM67.5609 4.944C66.6009 4.944 65.9049 4.784 65.4729 4.464C65.0569 4.128 64.8489 3.576 64.8489 2.808C64.8489 2.04 65.0569 1.488 65.4729 1.152C65.9049 0.815999 66.6009 0.647999 67.5609 0.647999C68.5369 0.647999 69.2329 0.815999 69.6489 1.152C70.0649 1.488 70.2729 2.04 70.2729 2.808C70.2729 3.576 70.0649 4.128 69.6489 4.464C69.2329 4.784 68.5369 4.944 67.5609 4.944ZM69.9849 6V18H65.1369V6H69.9849ZM80.6843 18.24C79.7083 18.24 78.8763 17.968 78.1883 17.424C77.5163 16.864 77.0283 16.136 76.7243 15.24L76.5803 18H72.3323V1.056H77.1803V8.064C77.5003 7.376 77.9643 6.824 78.5723 6.408C79.1803 5.976 79.9483 5.76 80.8763 5.76C82.2523 5.76 83.3563 6.312 84.1883 7.416C85.0203 8.52 85.4363 10.064 85.4363 12.048C85.4363 14.016 85.0123 15.544 84.1643 16.632C83.3323 17.704 82.1723 18.24 80.6843 18.24ZM78.8363 14.784C79.3803 14.784 79.8043 14.576 80.1083 14.16C80.4123 13.744 80.5643 13.024 80.5643 12C80.5643 10.976 80.4123 10.264 80.1083 9.864C79.8043 9.448 79.3803 9.24 78.8363 9.24C78.3083 9.24 77.9003 9.48 77.6123 9.96C77.3243 10.44 77.1803 11.12 77.1803 12C77.1803 12.944 77.3243 13.648 77.6123 14.112C77.9163 14.56 78.3243 14.784 78.8363 14.784ZM89.451 13.44C90.299 13.44 90.955 13.648 91.419 14.064C91.899 14.48 92.139 15.064 92.139 15.816C92.139 16.568 91.899 17.152 91.419 17.568C90.955 17.984 90.299 18.192 89.451 18.192C88.603 18.192 87.939 17.984 87.459 17.568C86.995 17.152 86.763 16.568 86.763 15.816C86.763 15.064 86.995 14.48 87.459 14.064C87.939 13.648 88.603 13.44 89.451 13.44Z"
                    fill="currentColor"
                  />
                </svg>
              </h1>

              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={() => setSearchInput(!searchInput)}
                    aria-label="search items"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <SearchIcon className="w-6 h-6 object-contain border-none text-gray-600 outline-none  rotate-90" />
                  </button>
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    className={` ${
                      searchInput ? "hidden" : ""
                    } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="view favourites"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <HeartIcon className="w-6 h-6 object-contain border-none text-gray-600 outline-none " />
                  </button>
                  <button
                    aria-label="go to cart"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <ShoppingBagIcon className="w-6 h-6 object-contain border-none text-gray-600 outline-none " />
                  </button>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <MenuAlt1Icon className="w-6 h-6 object-contain border-none text-gray-600 rotate-180" />
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <MenuAlt1Icon className="w-6 h-6 object-contain border-none text-gray-600 rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3">
                <div>
                  <SearchIcon className="w-6 h-6 object-contain border-none text-gray-600 outline-none  rotate-90" />
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <XIcon className="w-6 h-6 object-contain border-none text-gray-600 outline-none " />
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <Link href="#">
                    <a
                      href="#"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Home
                      <ChevronRightIcon className="w-3 h-3 object-contain border-none text-gray-600 outline-none " />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      href="#"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Furniture
                      <ChevronRightIcon className="w-3 h-3 object-contain border-none text-gray-600 outline-none " />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      href="#"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Lookbook
                      <ChevronRightIcon className="w-3 h-3 object-contain border-none text-gray-600 outline-none " />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a
                      href="#"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Support
                      <ChevronRightIcon className="w-3 h-3 object-contain border-none text-gray-600 outline-none " />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-full flex items-end">
              <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                <li>
                  <Link href="#">
                    <a
                      href="#"
                      className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      <ShoppingBagIcon className="w-3 h-3 object-contain border-none text-gray-600 outline-none " />

                      <p className="text-base">Cart</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
