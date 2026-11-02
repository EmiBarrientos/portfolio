
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
            es:'Desarrollé el frontend en React de un catálogo online con carrito que envía los pedidos por WhatsApp, para un cliente. \n\nParticipé de forma intermitente en proyectos de evaluación de modelos de IA en Outlier.',
            en:'Built the React frontend of an online catalog with a cart that sends orders via WhatsApp, for a client.\n\nTook part, on an intermittent basis, in AI model evaluation projects at Outlier.'
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
            es:'Securicé un e-commerce y sus endpoints con Spring Security y JWT.\n\nEstuve en contacto con potenciales clientes y actué como Product Owner en algunos proyectos.',
            en:'Secured an e-commerce application and its endpoints with Spring Security and JWT.\n\n Dealt with prospective clients and acted as Product Owner on some projects.'
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
            es:'Desarrollador backend en MyDoctorApp, en un equipo de 8 personas con Scrum.',
            en:'Backend developer on MyDoctorApp, in a team of 8 using Scrum.'
        }
    }
    
]





const Experience=({language}:ExperienceProps)=>{

    return(
        <div className="p-8 max-w-[600px] mx-auto">
            <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
                {language === "es" ? "Experiencia" : "Experience"}
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