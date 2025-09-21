import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiJava,
  DiGithubBadge,
  DiDocker,
} from "react-icons/di"


import { 
    SiSpringboot,
    SiSpringsecurity,
    SiTypescript, 
    SiAmazonwebservices,
    SiMysql,
    SiRender 
  }from "react-icons/si";

import { RiVercelLine } from "react-icons/ri";



  import Reveal from "./Reveal";

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'TypeScript', icon: <SiTypescript className='text-pink-600' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },

      ],

    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Java', icon: <DiJava className='text-blue-500' /> },
        { name: 'SpringBoot', icon: <SiSpringboot className='text-blue-500' /> },
        { name: 'Spring Security', icon: <SiSpringsecurity className='text-green-600' /> },
        { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },    
        { name: 'Mysql', icon: <SiMysql className='text-gray-600' /> },
      ],
    },
    {
      category: 'Devops',
      technologies: [
        { name: 'Docker', icon: <DiDocker className='text-blue-500' /> },
        { name: 'AWS', icon: <SiAmazonwebservices className='text-blue-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'Vercel', icon: <RiVercelLine className='text-green-500' /> },    
        { name: 'Render', icon: <SiRender className='text-gray-600' /> },
      ],
    },
  ]




const Skills = () => {
    return(
        <div className=" max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
            <h2 className="text-3xl font-bold text-center">Herramientas</h2>
            <Reveal>
            <p className="text-center mb-8">
                Trabajé en varios proyectos Fullstack. Miralos  <a href="#portfolio" className="underline">aqui</a>.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 ">
                {
                  skills.map((skills,index)=>(
                      <div key={index} className="border border-purple-900  p-8 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2 min-h-[300px]">
                          <h3 className="text-4xl font-bold mb-4 text-center">{skills.category}</h3>
                          <div className="grid grid-cols-2 gap-10 ">
                              {
                                skills.technologies.map((tech, idx)=>(
                                    <div key={idx} className="flex flex-col items-center justify-center space-y-2 text-center" >
                                        <span className="text-4xl">{tech.icon}</span>
                                        <span >{tech.name}</span>
                                    </div>
                                ))
                              }
                          </div>   
                      </div>
                  ))
                }    

            </div>
            </Reveal>
        </div>
    )
}
export default Skills