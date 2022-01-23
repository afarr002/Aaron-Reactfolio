import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            hi, i'm aaron!
            <br className="hidden lg:inline-block" />
            &&i fell in love with coding.
          </h1>
          <p className="mb-8 leading-relaxed">
            Someone once told me that coding is as fun and endless as you can be
            creative. They said it's a field where you have to continuously be
            learning and growing and developing new skills. And, as it turns
            out, they weren't lying!
            <br />I LOVE that there's always going to be a new language, or
            technology, or framework to learn. I LOVE the problem solving
            challenges, as well as the community within the development world.
            Finally, I LOVE that while you can work independently, the best
            frameworks, libraries, and apps are typically created with mulitple
            collaborators! Even languages are updated with feedback from the
            communities that utilize them to make them as updated and advanced
            as the times!
            <br />
            I've found that there's just no better feeling than that moment
            between checking the last item off your Kanban board, playing with a
            completed project that's operational - and refactoring WET to DRY,
            pseudo coding Icebox features, and starting the process over again!
            <span className="flex justify-center">
              <a
                href="#more"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                A Little More About Me!
              </a>
            </span>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
