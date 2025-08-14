import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import s from "./Connect.module.css";

/**
 * Connect section component.
 */
const Connect: React.FC = () => {
  return (
    <section id="connect" className={`section ${s.connect}`}>
      <h2>Let’s Connect</h2>
      <p>I’m always happy to chat — let’s connect on the platforms below!</p>

      <div className={s.icons}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={s.iconLink}
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={s.iconLink}
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Connect;
