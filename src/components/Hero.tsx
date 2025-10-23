import profilepic from "../assets/IMG_profpic.png";
import { TypeAnimation} from "react-type-animation";
import ShinyEffect from "./ShinyEffect.tsx";
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
} from "react-icons/ai";

import{
    DiJava,
    DiJavascript1,
    DiNodejs,
    DiReact
} from "react-icons/di";

import { SiSpringboot } from "react-icons/si";
import{motion} from "framer-motion";

interface HeroProps {
  language: "es" | "en";
}


const texts = {
  es: {
    sequence: [
      "Fullstack Developer",
      1000,
      "Software Engineer",
      1000,
      "Backend Developer",
      1000,
    ],
    hello: "¡Hola! Mi nombre es ",
    description: "Busco crecer como Backend / Cloud Engineer, contribuyendo en la arquitectura y despliegue de sistemas escalables.\n\n Tambien disfruto del Front-end porque me ayuda a entender el producto completo.",
    download: "Descargar CV",
    stack: "Mi Stack Tecnologico"
  },
  en: {
    sequence: [
      "Fullstack Developer",
      1000,
      "Software Engineer",
      1000,
      "Backend Developer",
      1000,
    ],
    hello: "Hi! My name is",
    description: "I am looking to grow as a Backend/Cloud Engineer, contributing to the architecture and deployment of scalable systems. \n\nI also enjoy front-end development because it helps me understand the entire product.",
    download: "Download CV",
    stack: "My Tech Stack"
  }
};


const Hero = ({ language }: HeroProps) => {
    const t = texts[language];
    return (
        <div className="mt-24 max-[1200px] mx-auto relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{opacity: 0, y : -50}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once: true}}
                    transition={{duration:1}}
                >
                
                <TypeAnimation
                    sequence={t.sequence}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5x1 italic- mb-4"

                />

                <motion.p  
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:0.5}}
                    className="text-gray-200 md:text-7xl text-5x1 tracking-tight mb-4"        
                    >
                    {t.hello}<br/>
                    <span className="text-purple-500"> EMILIANO BARRIENTOS</span>
                    
                </motion.p>

                <motion.p  
                    initial={{opacity: 0}}
                    whileInView={{opacity:1}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:1}}
                    className="text-gray-300 max-[300px] md:max-w-[500px]: md:text-2xl text-lg  mb-6 whitespace-pre-line"        
                    >
                        {t.description}<br /> 
                    
                </motion.p >
                    
                <motion.div
                    initial={{opacity: 0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once: true}}
                    transition={{duration:1, delay:1.5}}
                    className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{scale:1.05, boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.2)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p4 border
                         border-purple-400 rounded-4"
                         
                    
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)" }}
                            href={language === "es" ? "/Emiliano Barrientos Desarrollador Backend.pdf" : "/Emiliano Barrientos Backend Developer.pdf"}
                            download
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-4 py-2 border
                                        border-purple-400 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
                            >
                           {t.download}
                            </motion.a>
                        
                    </motion.button>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{scale:1.2}} href="https://github.com/EmiBarrientos">
                            <AiOutlineGithub/>
                        </motion.a>
                         <motion.a whileHover={{scale:1.2}} href="https://www.linkedin.com/in/emiliano-barrientos">
                            <AiOutlineLinkedin/>
                        </motion.a>
                        
                    </div>
                </motion.div>
            </motion.div>

            <motion.img
                src={profilepic}
                className="w-[300] md:w[450px]"
                initial={{opacity: 0, scale:0.8}}
                whileInView={{opacity:1, scale:1}}
                viewport={{once: true}}
                transition={{duration:1}}
            />
        </div>
    
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            viewport={{once: true}}
            transition={{duration:1, delay:2}}
            className=" flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        
        >
            <p className="text-gray-200 mr-6">{t.stack} </p>
            
              <div className="flex flex-wrap justify-center md:justify-start">
                <motion.div whileHover={{ scale: 1.2 }} className="mx-2">
                <DiJava className="text-orange-600 text-6xl md:text-7xl" title="Java" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="mx-2">
                <SiSpringboot className="text-blue-600 text-6xl md:text-7xl" title="Spring Boot" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="mx-2">
                <DiJavascript1 className="text-yellow-500 text-6xl md:text-7xl" title="JavaScript" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="mx-2">
                <DiReact className="text-blue-500 text-6xl md:text-7xl" title="React" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="mx-2">
                <DiNodejs className="text-green-500 text-6xl md:text-7xl" title="Node.js" />
                </motion.div>
            </div>

        </motion.div>
            

        <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
    
    )
}

export default Hero