import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { portfolio } from "../seed/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Work!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is a sample of some of my favorite projects that I've built so
            far! I'm proud to note that while (currently) everything is
            JavaScript based, I worked hard to learn different frameworks and
            libraries to pair with JS for use in different situations and
            applications!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {portfolio.map(({ link, image, title, description, gitlink }) => (
            <a href={link} key={image} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {title}
                  </h1>
                  <p className="leading-relaxed">
                    {description}
                    <br />
                    Github Repo: {gitlink}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
