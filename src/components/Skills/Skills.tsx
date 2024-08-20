import React from "react";

export const Skills = () => {
  const skillsColumn1 = [
    "React, React Native, Node.js, NestJS, Laravel",
    "TypeScript, GraphQL, RESTful APIs",
    "Firebase, GCP, AWS, Azure",
    "Chakra UI, Figma, MUI, TailwindCSS",
  ];

  const skillsColumn2 = [
    "Web3, Blockchain",
    "HTML, CSS, JavaScript (ES6), Redux",
    "Jira, Slack, GitHub, GitLab",
    "Bash, Webpack, NPM, Linux",
  ];

  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 text-gray-300">
        <ul className="list-none space-y-3">
          {skillsColumn1.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <ul className="list-none space-y-3">
          {skillsColumn2.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Skills;
