import React from "react";
import s from "./Projects.module.css";

// Define a type for project data
interface Project {
  title: string;
  description: string;
  link?: string;
}

/**
 * Projects section component.
 * Displays a grid of project cards with titles, descriptions and links.
 */
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Personal Site",
      description:
        "Built a modern personal site with full-screen landing, scroll-synced routing, sticky nav, dark mode, and mobile drawer.",
      link: "https://github.com/degante95/About-Me",
    },
    {
      title: "Bend by FNBO",
      description:
        "Contributed to scaling FNBO’s Bend platform by enhancing event-driven microservices and AWS-powered APIs, automating workflows, and improving efficiency for 6,000+ clients.",
    },
    {
      title: "Milli Bank",
      description:
        "Contributed to Milli Bank’s customer operations platform by improving load times, streamlining account closures, and enhancing the experience for 33,000+ users.",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Experience & Projects</h2>

      <div className={s.grid}>
        {projects.map((project) => (
          <div key={project.title} className={s.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link ? (
              <a
                className="button"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

// import React from "react";
//
// // Define a type for project data
// interface Project {
//   title: string;
//   description: string;
//   link?: string;
// }
//
// /**
//  * Projects section component.
//  * Displays a grid of project cards with titles, descriptions and links. The
//  * grid layout adjusts automatically based on viewport size thanks to CSS
//  * grid; cards have micro‑interactions such as subtle elevation on hover.
//  */
// const Projects: React.FC = () => {
//   const projects: Project[] = [
//     {
//       title: "Personal Site",
//       description:
//         "Built a modern personal site with full-screen landing, scroll-synced routing, sticky nav, dark mode, and mobile drawer.",
//       link: "https://github.com/degante95/About-Me",
//     },
//     {
//       title: "Bend by FNBO",
//       description:
//         "Contributed to scaling FNBO’s Bend platform by enhancing event-driven microservices and AWS-powered APIs, automating workflows, and improving efficiency for 6,000+ clients.",
//     },
//     {
//       title: "Milli Bank",
//       description:
//         "Contributed to Milli Bank’s customer operations platform by improving load times, streamlining account closures, and enhancing the experience for 33,000+ users.",
//     },
//   ];
//
//   return (
//     <section id="projects" className="section">
//       <h2>Experience & Projects</h2>
//       <div className="project-grid">
//         {projects.map((project) => (
//           <div key={project.title} className="project-card">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             {project.link ? (
//               <a
//                 className="button"
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project
//               </a>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
//
// export default Projects;
