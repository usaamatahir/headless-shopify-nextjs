import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute py-8 w-full bg-gray-900 text-white text-center flex items-center justify-between px-6 bottom-0">
      <Link href="https://usamatahir.netlify.app">
        <a
          className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer"
          target="_blank"
        >
          About Me
        </a>
      </Link>

      <div className="flex space-x-5">
        <Link href="https://github.com/usaamatahir">
          <a
            className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer"
            target="_blank"
          >
            Github
          </a>
        </Link>
        <Link href="https://linkedin.com/in/usamatahir0">
          <a
            className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer"
            target="_blank"
          >
            Linkedin
          </a>
        </Link>
        <Link href="https://twitter.com/usamatahir0">
          <a
            className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer"
            target="_blank"
          >
            Twitter
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
