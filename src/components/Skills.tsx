import { FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiSpring, SiSpringboot, SiSpringsecurity, SiJsonwebtokens, SiHibernate, SiJunit5,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiMongodb,
  SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiBootstrap,
  SiDocker, SiGithub, SiVercel, SiRender, SiSupabase,
} from "react-icons/si";
import Reveal from "./Reveal";

interface SkillsProps{
  language: "es" | "en";
}


const texts = {
  es: {
    
    tools: "Herramientas",
    description: "Tecnologías que usé en mis proyectos, revisalos ",
    here: "Aquí",
    
  },
  en: {
    
    tools: "Tools",
    description: "Technologies I’ve used in my projects. Check them out ",
    here: "here",
  }
};



export const skills = [
  {
    category: { es: "Backend", en: "Backend" },
    technologies: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Security", icon: <SiSpringsecurity /> },
      { name: "Spring Cloud", icon: <SiSpring /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "JPA / Hibernate", icon: <SiHibernate /> },
      { name: "JUnit", icon: <SiJunit5 /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    category: { es: "Bases de datos", en: "Databases" },
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: { es: "Frontend", en: "Frontend" },
    technologies: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: { es: "DevOps y despliegue", en: "DevOps and Deployment" },
    technologies: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
];



const Skills = ({ language }: SkillsProps) => {
  const t = texts[language];
  return (
    <div
      className="max-w-[900px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <h2 className="text-3xl font-bold text-center">{t.tools}</h2>
      <Reveal>
        <p className="text-center mb-8">
          {t.description}{" "}
          <a href="#portfolio" className="underline">{t.here}</a>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-4 text-center">{group.category[language]}</h3>
              <div className="grid grid-cols-3 gap-6">
                {group.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center gap-2 text-center"
                  >
                    <span className="text-4xl text-purple-300 transition-colors hover:text-purple-500">
                      {tech.icon}
                    </span>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
export default Skills