import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import{motion} from "framer-motion";
import Reveal from "./Reveal";
const Contact = () => {

    return(
        <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="Contact">
            <Reveal>
                <div className="grid md:grid-cols-2 place-items-center">
                    <div>
                        <div className="text-gray-300 my-3">
                            <h3 className="text-4xl font-semibold mb-5">Sobre <span>Mi</span></h3>
                            <p className="text-justify leading-7 w-11/12 mx-auto" >Me considero un apasionado por el mundo del desarrollo de software, poseo experiencia como desarrollador Backend, utilizando lenguajes como Java, principalmente, y asimismo JavaScript y NodeJS.<br/> <br/> Tengo una curiosidad inagotable que me impulsa a adquirir nuevos conocimientos.<br/> <br/>  Mi principal área de interés es el desarrollo Backend, pero no es la única.<br/>  Además poseo un gran entusiasmo por el submundo DevOps y CyberSec, lo que me impulsa a seguir investigando sobre estas áreas y también me permite desarrollar productos mas seguros.<br/> <br/> Mi experiencia como co-founder me brindó la posibilidad de expandir mi visión del producto.<br/> <br/>  Mi perfil es dinámico y orientado a resultados, apunto a la excelencia y a la calidad a la hora de escribir software, además puedo estar presente en todo el ciclo de vida del desarrollo de software, desde el frontend hasta el despliegue, pasando por el backend.<br/> <br/>  Mi rápido aprendizaje, mi curiosidad y mi actitud autodidacta me permiten indagar sobre múltiples áreas, pero mi amor más grande está en el Backend. </p>
                        </div>
                        
                        <div className="flex mt-10 items-center gap-7">
                            <div className="bg-gray-800/40 p-8 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"> <span>Projectos</span> </p>
                            </div>

                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">3
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"> <span>Años de experiencia</span> </p>
                            </div>

                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">Varios
                            
                                </h3>
                                <p className="text-xs md:text-base"> <span>Clientes Satisfechos</span> </p>
                            </div>

                        </div>
                        
                    </div>

                        <form action="https://getform.io/f/agdjvoxb"
                        method="POST"
                        className="max-w-6xl p-5 md:p-12"
                        id="form"
                    >

                        <p className="text-gray-100 font-bold text-xl mb-2">¡Conectemos!</p>
                        
                        <input
                            type="text"
                            id="name"
                            placeholder="nombre..."
                            name="name"
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                        
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="tu email..."
                            name="email"
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                        />

                        <textarea
                            name="textarea"
                            id="textarea"
                            cols={30}
                            rows={4}
                            placeholder="tu mensaje..."
                            className="mb-2 w-full rounded-md border border-purple-600 py-10 pl-10 pr-4"
                        />

                        <button 
                            type="submit"
                            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                            >
                            Enviar mensaje
                        </button>  
                    </form>

                </div>
            </Reveal>
            
        </div>

    )
}

export default Contact