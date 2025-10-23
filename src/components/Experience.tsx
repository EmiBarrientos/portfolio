
import {motion} from "framer-motion";
import Reveal from "./Reveal";

interface ExperienceProps{
      language: "es" | "en";
}

const experiences =[
    {
        
        company:{
                es: 'Freelance',
                en: 'Freelance'
        },
        period: {
                es: 'junio 2025 - Actualidad',
                en: 'June 2025 - Currently'
        },
        description:{
            es:'Desarrollo de aplicaciones web y APIs REST con Java (Spring Boot) y PostgreSQL. \n\nImplementación de microservicios y despliegues en AWS RDS y Render. \n\nGestión de proyectos para clientes pequeños y startups, cubriendo todo el ciclo de desarrollo: diseño, backend, pruebas y deploy.',
            en:'Development of web applications and REST APIs with Java (Spring Boot) and PostgreSQL.\n\nImplementation of microservices and deployments on AWS RDS and Render.\n\nProject management for small clients and startups, covering the entire development cycle: design, backend, testing, and deployment.'
        }
    },
    {
        
        company:{
                es: 'Atomicat-Tech',
                en: 'Atomicat-Tech'
        },
        period: {
                es: 'Agosto 2024 - Mayo 2025',
                en: 'Agosto 2024 - Mayo 2025'
        },
        description:{
            es:'Co-founder y Backend Developer de esta startup.\n\n Laboralmente fue la mejor experiencia de mi vida:\n me permitió crecer como profesional, mejoró mis habilidades blandas en el trato con los clientes, fortaleció mi resiliencia y el manejo del estrés, y además me hizo mejorar como desarrollador en general.\n\n Dentro de esta compañía diseñé y desarrollé conexiones a bases de datos, APIs y también ejercí como product owner de varios de los proyectos\n',
            en:'Co-founder and Backend Developer of this startup.\n\n Professionally, it was the best experience of my life:\n it allowed me to grow as a professional, improved my soft skills in dealing with clients, strengthened my resilience and stress management, and also made me a better developer overall. \n\n Within this company, I designed and developed database connections and APIs, and I also served as product owner for several projects\n'
        }
    },
    {
        company:{
                es: 'No Country',
                en: 'No Country'
        },
        period: {
            es: 'Abril 2024-junio 2024',            
            en: 'Abril 2024-junio 2024'
        },
        description:{
            es: 'Prácticas Laborales\n\n Bajo el marco de estas prácticas desarrollé myDoctorApp y propiedades 360',
            en:'internship\n\n As part of this work experience, I developed myDoctorApp and 360 properties.'
        }
    }
    
]





const Experience=({language}:ExperienceProps)=>{

    return(
        <div className="p-8 max-w-[600px] mx-auto">
            <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
                {language === "es" ? "Portfolio" : "Portafolio"}
            </h1>
            <motion.div
                className=" space-y-8"
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index)=>(
                    
                    <Reveal>
                        <motion.div 
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount:0.3}}
                            className=' border border-purple-600 p-6 rounded-lg shadow-md
                                        hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                            >
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company[language]}</h2>
                            <p className='text-gray-300'>{experience.period[language]}</p>
                            <p className='text-gray-400 mt-4 whitespace-pre-line'>{experience.description[language]}</p>
                            
                            
                        </motion.div>
                    </Reveal>
                ))}

            </motion.div>
        
        
        
        
        </div>
    )

}

export default Experience