import React from "react";

export const Projects = () => {
  const projects = [
    {
      name: "Bayer Cropscience | AgroBayer",
      link: "https://www.agro.bayer.com.br/",
    },
    {
      name: "Guideline Mobile Application",
      link: "https://www.guideline.com/blog/mobile-app/",
    },
    { name: "Consignment Portal Project", link: "https://abcbrasil.com.br/" },
    { name: "MeiraT", link: "https://www.meiratdesigns.com/" },
    { name: "Colonize Mars", link: "https://colonizemars.com/" },
  ];

  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      <ul className="mt-5 space-y-3">
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Projects;
