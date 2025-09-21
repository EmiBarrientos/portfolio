
import {motion} from "framer-motion";
import Reveal from "./Reveal";

const experiences =[
    {
        company: 'Atomicat-Tech',
        period: 'Agosto 2024 - Mayo 2025',
        description:'Co-founder y Backend Developer de esta startup.\n\n Laboralmente fue la mejor experiencia de mi vida:\n me permitió crecer como profesional, mejoró mis habilidades blandas en el trato con los clientes, fortaleció mi resiliencia y el manejo del estrés, y además me hizo mejorar como desarrollador en general.\n\n Dentro de esta compañía diseñé y desarrollé conexiones a bases de datos, APIs y también ejercí como product owner de varios de los proyectos\n',
    },
    {
        company: 'No Country',
        period: 'Abril 2024-junio 2024',
        description:'Prácticas Laborales\n\n Bajo el marco de estas prácticas desarrollé myDoctorApp y propiedades 360',
    },
    {
        company: 'Tu Empresa :D',
        period: 'Octubre 2025 - Indefinido ',
        description:'En TU Empresa voy a aportar todas mis habilidades técnicas al equipo. \nMi creatividad, mi constancia y mi entrega están a disposición para alcanzar todas las metas que nos propongamos',
    }
]





const Experience=()=>{

    return(
        <div className="p-8 max-w-[600px] mx-auto">
            <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Experiencia</h1>
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
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-gray-400 mt-4 whitespace-pre-line'>{experience.description}</p>
                            
                            
                        </motion.div>
                    </Reveal>
                ))}

            </motion.div>
        
        
        
        
        </div>
    )

}

export default Experience