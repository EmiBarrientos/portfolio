
import React from "react";
import {motion} from "framer-motion";
import Reveal from "./Reveal";

const experiences =[
    {
        company: 'First company',
        period: 'perido',
        description:'descripcion of your experience on this company',
    },
    {
        company: 'Second company',
        period: 'perido',
        description:'descripcion of your experience on this company',
    },
    {
        company: 'third company',
        period: 'perido',
        description:'descripcion of your experience on this company',
    }
]





const Experience=()=>{

    return(
        <div className="p-8 max-w-[600px] mx-auto">
            <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">Experience</h1>
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
                            <p className='text-gray-400 mt-4'>{experience.description}</p>
                            
                            
                        </motion.div>
                    </Reveal>
                ))}

            </motion.div>
        
        
        
        
        </div>
    )

}

export default Experience