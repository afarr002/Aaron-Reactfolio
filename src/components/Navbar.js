import React from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-darkneutral hover:text-lightneutral mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Aaron
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-lightneutral justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Portfolio
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="./resume/Aaron_Farrell_Resume.pdf"
          target="_blank"
          download
          className="inline-flex items-center border-0 py-1 px-3 text-darkneutral hover:bg-darkorange rounded hover:text-lightneutral mt-4 md:mt-0"
        >
          Resume <span className="text-xs">(Download)</span>
          <ArrowDownIcon className="w-4 h-4 ml-1" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center md:border-l md:border-gray-700 py-1 px-3 text-darkneutral hover:bg-darkorange rounded hover:text-lightneutral mt-4 md:mt-0"
        >
          Contact Me <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
