import Reveal from "./Reveal";

interface ContactProps{
    language: "es" | "en";
}

const texts = {
  es: {
    
    about: "Sobre ",
    me:"Mi",
    description: "Soy desarrollador backend con foco en Java y Spring Boot.\n\nTrabajé en equipo con Scrum, rehabilité y desplegué una aplicación completa, y hoy desarrollo un sistema de microservicios con arquitectura hexagonal, seguridad con JWT y tests.\n\n También tengo experiencia con React y Node.js. Estudio la Tecnicatura en Programación en la UTN y tengo inglés C1.\n\n",
    
    
  },
  en: {
    
    about: "About ",
    me:"Me",
    description: "I’m a backend developer focused on Java and Spring Boot.\n\n I’ve worked in teams using Scrum, revived and deployed a full application, and I’m currently building a microservices system with hexagonal architecture, JWT security and tests.\n I also have experience with React and Node.js. I’m studying a Programming degree at UTN and have C1 English."
  }
};

const Contact = ({language}:ContactProps) => {
const t=texts[language];
    return(
        <div className="w-full max-w-full md:max-w-[1000px] px-2 md:px-4  mx-auto md:my-12" id="Contact">
            <Reveal>
                <div className="w-full grid md:grid-cols-2 gap-0 md:gap-8 place-items-center">
                    <div>
                        <div className="text-gray-300 my-3">
                            <h3 className="text-4xl font-semibold mb-5">{t.about} <span>{t.me} </span></h3>
                            <p className="w-full px-2 md:px-6 text-left md:text-justify leading-7 mx-auto md:max-w-2xl whitespace-pre-line" >
                                        {t.description} 
                                </p>
                        </div>
                        
                      
                        
                    </div>

                        <form action="https://getform.io/f/agdjvoxb"
                        method="POST"
                        className="w-full md:max-w-2xl p-2 md:p-12"
                        id="form"
                    >

                        <p className="text-gray-100 font-bold text-xl mb-2"> {language === "es" ? "¡Conectemos!" : "Lets Connect!" } </p>
                        
                        <input
                            type="text"
                            id="name"
                            placeholder={language === "es" ? "Nombre..." : "Name..." }
                            name="name"
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                        
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder= {language === "es" ? "Tu Email..." : "Your Email..." }
                            name="email"
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                        />

                        <textarea
                            name="textarea"
                            id="textarea"
                            cols={30}
                            rows={4}
                            placeholder={language === "es" ? "Tu mensaje..." : "Your message..." }
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 md:py-10 md:pl-10"
                        />

                        <button 
                            type="submit"
                            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                            >
                            {language === "es" ? "Enviar mensaje" : "Send Message" }
                        </button>  
                    </form>

                </div>
            </Reveal>
            
        </div>

    )
}

export default Contact