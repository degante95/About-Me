import React from "react";
import s from "./Hero.module.css";

/** Your original URL + smooth scroll with navbar offset */
function go(id: string) {
  const path = `/${id}`;
  if (window.location.pathname !== path) history.pushState({}, "", path);

  const el = document.getElementById(id);
  if (!el) return;

  const navVar = getComputedStyle(document.documentElement)
    .getPropertyValue("--navbar-height")
    .trim()
    .replace("px", "");
  const navH = Number(navVar) || 56;

  const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

const Hero: React.FC = () => {
  return (
    <section id="home" className={`section ${s.hero}`} aria-label="Intro">
      {/* Optional decorative background */}
      <div className={s.heroBg} aria-hidden="true">
        <div className={s.heroGradient} />
        <div className={`${s.orb} ${s.orb1}`} />
        <div className={`${s.orb} ${s.orb2}`} />
        <div className={`${s.orb} ${s.orb3}`} />
      </div>

      {/* Inner constrained block, left-aligned like original */}
      <div className={s.heroInner}>
        <h1 className={`${s.heroTitle} fade-in-up`}>Hi, I’m Carlos Degante</h1>

        <p
          className={`${s.heroSubtitle} fade-in-up`}
          style={{ animationDelay: "60ms" }}
        >
          Driven software engineer dedicated to solving complex problems and
          embracing new technologies.
        </p>

        <div
          className={`${s.heroCta} fade-in-up`}
          style={{ animationDelay: "120ms" }}
        >
          <button className="button" onClick={() => go("projects")}>
            View Projects
          </button>
          <button
            className="button button--secondary"
            onClick={() => go("connect")}
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        className={s.scrollCue}
        aria-label="Scroll to About"
        onClick={() => go("about")}
      >
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M5 7l5 6 5-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;

// import React from "react";
//
// /**
//  * Hero section component.
//  * This section introduces me with a large heading, subheading,
//  * and a call to action button.
//  */
// const Hero: React.FC = () => {
//   const go = (id: string) => {
//     // clean URL
//     const path = `/${id}`;
//     if (window.location.pathname !== path) history.pushState({}, "", path);
//
//     // smooth scroll with navbar offset
//     const el = document.getElementById(id);
//     if (!el) return;
//     const navVar = getComputedStyle(document.documentElement)
//       .getPropertyValue("--navbar-height")
//       .trim()
//       .replace("px", "");
//     const navH = Number(navVar) || 56;
//     const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
//     window.scrollTo({ top, behavior: "smooth" });
//   };
//
//   return (
//     <section id="home" className="section hero" aria-label="Intro">
//       <h1 className="hero-title fade-in-up">Hi, I’m Carlos Degante</h1>
//       <p
//         className="hero-subtitle fade-in-up"
//         style={{ animationDelay: "60ms" as any }}
//       >
//         Driven software engineer dedicated to solving complex problems and
//         embracing new technologies.
//       </p>
//
//       <div
//         className="hero-cta fade-in-up"
//         style={{ animationDelay: "120ms" as any }}
//       >
//         <button className="button" onClick={() => go("projects")}>
//           View Projects
//         </button>
//         <button
//           className="button button--secondary"
//           onClick={() => go("connect")}
//         >
//           Get in touch
//         </button>
//       </div>
//
//       {/* Scroll cue */}
//       <button
//         className="scroll-cue"
//         aria-label="Scroll to About"
//         onClick={() => go("about")}
//       >
//         <span>Scroll</span>
//         <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
//           <path
//             d="M5 7l5 6 5-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//           />
//         </svg>
//       </button>
//     </section>
//   );
// };
//
// export default Hero;
