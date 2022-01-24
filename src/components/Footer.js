import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 md:sticky bottom-0 z-10">
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-around">
        <a
          href="https://www.linkedin.com/in/aaron-farrell-1a7101219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="white" size="100px" style={{ padding: "1%" }} />
        </a>
        <a
          href="https://github.com/afarr002"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="white" size="100px" style={{ padding: "1%" }} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
