import Reveal from "./Reveal";

interface ContactProps{
    language: "es" | "en";
}

const texts = {
  es: {
    
    about: "Sobre ",
    me:"Mi",
    description: "Me considero un apasionado por el mundo del desarrollo de software, poseo experiencia como desarrollador Backend, utilizando lenguajes como Java, principalmente, y asimismo JavaScript y NodeJS.\n\nTengo una curiosidad inagotable que me impulsa a adquirir nuevos conocimientos.\n\n Mi principal área de interés es el desarrollo Backend, pero no es la única.\n Además poseo un gran entusiasmo por el submundo DevOps y CyberSec, lo que me impulsa a seguir investigando sobre estas áreas y también me permite desarrollar productos mas seguros.\n\n Mi experiencia como co-founder me brindó la posibilidad de expandir mi visión del producto.\n\n Mi perfil es dinámico y orientado a resultados, apunto a la excelencia y a la calidad a la hora de escribir software, además puedo estar presente en todo el ciclo de vida del desarrollo de software, desde el frontend hasta el despliegue, pasando por el backend.\n\n\nMi rápido aprendizaje, mi curiosidad y mi actitud autodidacta me permiten indagar sobre múltiples áreas, pero mi amor más grande está en el Backend.\n\n",
    
    
  },
  en: {
    
    about: "About ",
    me:"Me",
    description: "I consider myself passionate about the world of software development. I have experience as a backend developer, mainly using languages such as Java, as well as JavaScript and NodeJS.\n\n My main area of interest is backend development, but it is not the only one.\n I am also very enthusiastic about the DevOps and CyberSec subworld, which drives me to continue researching these areas and also allows me to develop more secure products. \n\n My experience as a co-founder gave me the opportunity to expand my vision of the product. \n\n I am dynamic and results-oriented, striving for excellence and quality when writing software. I can also be involved in the entire software development lifecycle, from frontend to deployment, including the backend. \n\n My quick learning, curiosity, and self-taught attitude allow me to explore multiple areas, but my greatest love is in the backend."
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
                        
                        <div className="flex mt-10 items-center gap-7 flex-wrap md:flex-nowrap">
                            <div className="bg-gray-800/40 p-8 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"> <span>{language === "es" ? "Proyectos": "Projects" }</span> </p>
                            </div>

                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">2
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"> <span> {language === "es" ? "Años de experiencia" : "years of experience" }</span> </p>
                            </div>

                            <div className="bg-gray-800/40 p-4 md:p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">{language === "es" ? "Varios" : "Several" } 
                            
                                </h3>
                                <p className="text-xs md:text-base"> <span>{language === "es" ? "Clientes Satisfechos" : "Happy Clients" }  </span> </p>
                            </div>

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