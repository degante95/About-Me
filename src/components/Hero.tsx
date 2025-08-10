import React from "react";

/**
 * Hero section component.
 * This section introduces me with a large heading, subheading,
 * and a call to action button.
 */
const Hero: React.FC = () => {
  return (
    <section id="home" className="section" style={{ paddingTop: "6rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Hello, I'm Carlos Degante
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px", lineHeight: 1.6 }}>
        Driven software engineer dedicated to solving complex problems and
        embracing new technologies
      </p>
      <a href="#contact" className="button" style={{ marginTop: "2rem" }}>
        Get in touch
      </a>
    </section>
  );
};

export default Hero;
