import React from "react";

const experiences = [
  {
    company: "Valtech",
    title: "Technical Lead & Senior Frontend Developer",
    period: "Sep 2023 - Present",
    location: "",
    responsibilities: [
      "Developed UI components using React, Tailwind CSS, and JavaScript (ES6).",
      "Integrated APIs to dynamically update UI.",
      "Ensured best practices and code quality through code reviews.",
      "Worked closely with designers for seamless Figma-to-code translation.",
      "Integrated components with Adobe AEM for responsive interfaces.",
    ],
  },
  {
    company: "DBC Company",
    title: "Senior Software Engineer & React Native Engineer",
    period: "Apr 2023 - Dec 2023",
    location: "",
    responsibilities: [
      "Enhanced a consignment portal for Banco ABC.",
      "Developed a cross-platform mobile app for Guideline using React Native and Expo.",
      "Delivered new features, improved performance, and collaborated in Agile environments.",
      "Integrated backend services using GraphQL and RESTful APIs.",
      "Ensured cross-browser compatibility with Tailwind CSS.",
    ],
  },
  {
    company: "Popstand",
    title: "Senior Frontend Software Engineer",
    period: "Mar 2021 - Mar 2023",
    location: "",
    responsibilities: [
      "Developed and maintained web applications using React, Firebase, and TypeScript.",
      "Migrated legacy systems, improved performance, and integrated blockchain technologies.",
      "Built NFT marketplaces and games, integrating blockchain and MetaMask.",
      "Led legacy system migrations to modern tech stacks.",
      "Conducted code reviews and optimized application performance.",
    ],
  },
  {
    company: "Own Consulting",
    title: "Fullstack Software Engineer",
    period: "Jan 2016 - Jan 2021",
    location: "",
    responsibilities: [
      "Worked on diverse global projects with a dynamic tech stack including Chakra UI, Figma, RESTful APIs, GraphQL, and more.",
      "Developed web apps using PHP, JavaScript, and HTML/CSS.",
      "Built backend services with Node.js and Express.",
      "Implemented CI/CD pipelines with Git and Azure DevOps.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-5 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-gray-400">
              {exp.title} | {exp.period}
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-300">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
