import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Connect section component.
 */
const Connect: React.FC = () => {
  return (
    <section id="connect" className="section">
      <h2>Let’s Connect</h2>
      <p>I’m always happy to chat let’s connect on the platforms below!</p>
      <div style={{ display: "flex", gap: "1.5rem", margin: "1rem 0" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ fontSize: "2rem", color: "var(--color-primary)" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ fontSize: "2rem", color: "var(--color-primary)" }}
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Connect;
