import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiSass,
  SiTerraform,
  SiKubernetes,
  SiIstio,
  SiAmazondynamodb,
  SiMongodb,
  SiGit,
  SiGitlab,
  SiIntellijidea,
  SiWebstorm,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import s from "./Tech.module.css";

const techStack = [
  { icon: <SiTypescript title="TypeScript" />, name: "TypeScript" },
  { icon: <SiJavascript title="JavaScript" />, name: "JavaScript" },
  { icon: <SiKotlin title="Kotlin" />, name: "Kotlin" },
  { icon: <FaJava title="Java" />, name: "Java" },
  { icon: <SiPython title="Python" />, name: "Python" },
  { icon: <SiReact title="ReactJS" />, name: "ReactJS" },
  { icon: <SiNodedotjs title="Node.js" />, name: "Node.js" },
  { icon: <SiExpress title="Express.js" />, name: "Express.js" },
  { icon: <SiCss3 title="CSS" />, name: "CSS" },
  { icon: <SiSass title="Sass" />, name: "Sass" },
  { icon: <FaAws title="AWS" />, name: "AWS" },
  { icon: <SiTerraform title="Terraform" />, name: "Terraform" },
  { icon: <SiKubernetes title="Kubernetes" />, name: "Kubernetes" },
  { icon: <SiIstio title="Istio" />, name: "Istio" },
  { icon: <SiAmazondynamodb title="DynamoDB" />, name: "DynamoDB" },
  { icon: <SiMongodb title="DocumentDB" />, name: "DocumentDB" },
  { icon: <SiGit title="Git" />, name: "Git" },
  { icon: <SiGitlab title="GitLab" />, name: "GitLab" },
  { icon: <SiIntellijidea title="IntelliJ" />, name: "IntelliJ" },
  { icon: <SiWebstorm title="WebStorm" />, name: "WebStorm" },
];

const Tech: React.FC = () => (
  <section id="tech" className="section">
    <h2>Tech I Use</h2>
    <div className={s.grid}>
      {techStack.map((tech) => (
        <div className={s.item} key={tech.name}>
          <span className={s.icon}>{tech.icon}</span>
          <span className={s.label}>{tech.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Tech;

// import React from "react";
// import {
//   SiTypescript,
//   SiJavascript,
//   SiKotlin,
//   SiPython,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiCss3,
//   SiSass,
//   SiTerraform,
//   SiKubernetes,
//   SiIstio,
//   SiAmazondynamodb,
//   SiMongodb,
//   SiGit,
//   SiGitlab,
//   SiIntellijidea,
//   SiWebstorm,
// } from "react-icons/si";
// import { FaAws, FaJava } from "react-icons/fa";
//
// /**
//  * Tech section of Icons may reduce to core.
//  */
//
// const techStack = [
//   { icon: <SiTypescript title="TypeScript" />, name: "TypeScript" },
//   { icon: <SiJavascript title="JavaScript" />, name: "JavaScript" },
//   { icon: <SiKotlin title="Kotlin" />, name: "Kotlin" },
//   { icon: <FaJava title="Java" />, name: "Java" },
//   { icon: <SiPython title="Python" />, name: "Python" },
//   { icon: <SiReact title="ReactJS" />, name: "ReactJS" },
//   { icon: <SiNodedotjs title="Node.js" />, name: "Node.js" },
//   { icon: <SiExpress title="Express.js" />, name: "Express.js" },
//   { icon: <SiCss3 title="CSS" />, name: "CSS" },
//   { icon: <SiSass title="Sass" />, name: "Sass" },
//   { icon: <FaAws title="AWS" />, name: "AWS" },
//   { icon: <SiTerraform title="Terraform" />, name: "Terraform" },
//   { icon: <SiKubernetes title="Kubernetes" />, name: "Kubernetes" },
//   { icon: <SiIstio title="Istio" />, name: "Istio" },
//   { icon: <SiAmazondynamodb title="DynamoDB" />, name: "DynamoDB" },
//   { icon: <SiMongodb title="DocumentDB" />, name: "DocumentDB" },
//   { icon: <SiGit title="Git" />, name: "Git" },
//   { icon: <SiGitlab title="GitLab" />, name: "GitLab" },
//   { icon: <SiIntellijidea title="IntelliJ" />, name: "IntelliJ" },
//   { icon: <SiWebstorm title="WebStorm" />, name: "WebStorm" },
// ];
//
// const Tech: React.FC = () => (
//   <section id="tech" className="section">
//     <h2>Tech I Use</h2>
//     <div className="tech-icons-grid">
//       {techStack.map((tech) => (
//         <div className="tech-icon-item" key={tech.name}>
//           {tech.icon}
//           <span>{tech.name}</span>
//         </div>
//       ))}
//     </div>
//   </section>
// );
//
// export default Tech;
