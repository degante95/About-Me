import React from "react";
import { ResumeModal } from "../Resume/Resume";

/**
 * About section component.
 * This section contains a brief biography.
 */
const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        A Software Engineer with a strong background in full-stack
        development—proficient in Java, TypeScript, and building scalable
        applications on AWS. I enjoy bringing ideas to life, from crafting
        robust RESTful APIs to designing intuitive, modern web experiences.
      </p>
      <p>
        Outside of work, I’m a husband and father who loves gaming, fishing,
        playing fútbol (soccer), and getting outdoors whenever I can. Whether
        I’m exploring new tech or new trails, I’m always learning and always
        looking for the next adventure.
      </p>
      <p>
        I’m value collaboration, open communication, and seeing projects through
        from start to finish. If you want to talk code, sports, or just share a
        great fishing story, let’s connect!
      </p>
    </section>
  );
};

export default About;
