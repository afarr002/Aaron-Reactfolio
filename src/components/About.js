import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aaron!
            <br />
            <p className="opacity-0 hover:opacity-100">
              &&I fell in <span className="text-darkorange">LOVE</span> with
              coding.
            </p>
          </h1>
          <p className="mb-8 leading-relaxed">
            Someone once told me that coding is as fun and endless as you can be
            creative. They said it's a field where you have to continuously be
            learning and growing and developing new skills. And, as it turns
            out, they weren't lying!
            <br />
            <br />
            I LOVE that there's always going to be a new language, or
            technology, or framework to learn. I LOVE the problem solving
            challenges, as well as the community within the development world.
            Finally, I LOVE that while you can work independently, the best
            frameworks, libraries, and apps are typically created with mulitple
            collaborators! Even languages are updated with feedback from the
            communities that utilize them to make them as updated and advanced
            as the times!
            <br />
            <br />
            I've found that there's just no better feeling than that moment
            between checking the last item off your Kanban board, playing with a
            completed project that's operational - and refactoring WET to DRY,
            pseudo coding Icebox features, and starting the process over again!
          </p>
          <div className="flex justify-center">
            <a
              href="#more"
              className="inline-flex text-white bg-darkorange border-0 py-2 px-6 focus:outline-none hover:bg-lightorange rounded text-lg"
            >
              More About Me!
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-darkorange border-0 py-2 px-6 focus:outline-none hover:bg-lightorange rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-darkorange border-0 py-2 px-6 focus:outline-none hover:bg-lightorange rounded text-lg"
            >
              See My Portfolio
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="aaron&margot"
            src="./images/aaron&margot_headshot.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
