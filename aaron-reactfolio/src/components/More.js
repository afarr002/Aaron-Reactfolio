import React from "react";

const More = () => {
  return (
    <section id="more">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aaron!
          </h1>
          <br />
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Where I'm From!
          </h2>
          <p className="mb-8 leading-relaxed">
            I am Colorado born and raised, but I love to travel, explore and
            learn about all the different cultures and landscapes across the
            country and the world!
          </p>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Some of my favorite hobbies!
          </h2>
          <p className="mb-8 leading-relaxed">
            <ul className="list-none md:list-inside md:hover:list-outside md:hover:list-disc">
              <li>Coding! I've somehow fallen in love with functions.</li>
              <li>
                Spending time with my dog Margot. (She approves all my code
                before it goes to production)
              </li>
              <li>Listening to music (probably way too loud).</li>
              <li>Rooting for the Broncos (certianly way too loud).</li>
              <li>
                Spending time outside, be it hiking, or sports (disc golf is my
                current hobby of obsession), or a BBQ with friends.
              </li>
              <li>
                Reading all kind of books. I enjoy fiction and non fiction, and
                I especially enjoy horror novels and military history.
              </li>
              <li>
                Learning new things and using that knowledge to solve life's
                problems, little or big!
              </li>
            </ul>
          </p>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            What did I learn during quarentine?
          </h2>
          <p className="mb-8 leading-relaxed">
            I used the initial lock downs to learn about the hobbies I was
            interested in. I took classes on photography and photography
            editing. I learned about Investing and Day Trading, and I started
            businesses for disc dyeing and custom canvas prints.
            <br />
            Most importantly, it's when I declared my first function, mapped an
            array for the first time, and imported my first framework! It's when
            I created my first app, then created a quiz because my friends said
            I couldn't! It's when I laid the first bricks in the path I walk to
            my future!
          </p>
          <div className="flex justify-center">
            <a
              href="#about"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              About face! (Return to previous About page)
            </a>
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
            alt="aaron & margot"
            src="./images/aaron&margot_headshot.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default More;
