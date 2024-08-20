import React from "react";

export const AboutMe = () => {
  return (
    <section className="my-10 text-center">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-5 text-gray-300">
        Seasoned JavaScript developer with 7+ years of experience in frontend
        and backend technologies. Proficient in React, NextJS, NestJS, and
        Node.js. Keen eye for detail, delivering clean and maintainable code.
        Expertise from prototyping to deployment.
      </p>
      <div className="flex justify-center mt-5 space-x-4">
        <a
          href="https://github.com/christopher"
          className="text-gray-500 hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/christopher-marques-correa"
          className="text-gray-500 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};
export default AboutMe;
