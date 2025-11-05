
import project1 from "../assets/MyDoctorApp_video.mp4"
import project2 from "../assets/Propiedades-360.png"
import project3 from "../assets/Tp-3-Progra.mov"
import project4 from "../assets/GestionDeEmpleados_video.mov"
import project5 from "../assets/Popurri De proyectos.mov"
import project6 from "../assets/BarberiaAluraImg.png"
import project7 from "../assets/menAtWork.jpg"

import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from "./Reveal";

interface PortfolioProps{
    language: "es" | "en";
}



const projects = [
    {
      video: project1,
      title: "MyDoctorApp",
      description:{
                    es: "Aplicación Web para el manejo de turnos médicos.\n En este proyecto me desempeñé como desarrollador backend, en un equipo de 8 personas, 2 diseñadores, 1 frontend y 5 backends.\nDiseñé, implementé y codifiqué APIs y conexiones con la base de datos.\nUtilizamos Metodologías agiles bajo el marco Scrum, reuniones diarias, sprint Reviews, sprint plannings y jira como gestor de proyecto. \nTecnologías usadas:\nJava, SpringBoot, SpringSecurity, AWS, Docker, MySQL. \n\nEsta fue una de las mejores experiencias de mi vida, mas allá de lo aprendido, me permitió crecer como profesional, trabajar en un entorno colaborativo y además, me brindó la posibilidad de conocer personas maravillosas.\n\n",
                    en: "Web application for managing medical appointments.\n n In this project, I worked as a backend developer in a team of eight people: two designers, one frontend developer, and five backend developers.\nI designed, implemented, and coded APIs and database connections.\nWe used agile methodologies under the Scrum framework, daily meetings, sprint reviews, sprint planning, and Jira as a project manager. \nTechnologies used: \nJava, SpringBoot, SpringSecurity, AWS, Docker, MySQL. \n\nThis was one of the best experiences of my life. Beyond what I learned, it allowed me to grow as a professional, work in a collaborative environment, and also gave me the opportunity to meet wonderful people.\n\n"
                  }, 
      links: {
        site: "https://mydoctorapp.vercel.app/",
        github: "https://github.com/EmiBarrientos/c17-56-T-Java",
      },
    },
    
    {
      img: project2,
      title: "Propiedades 360",
      description:{
                  es: "Webapp creada para conectar Locatarios con inquilinos o posibles compradores.\nEn este proyecto me desempeñé principalmente como DevOps y desarrollador Backend.\n Compartí equipo con 1 Backend dev, 3 frontend devs, 1 diseñador y 2 QA\n Utilizamos Metodologías agiles Scrum, dalies, sprint planning y sprint reviews, además contamos con jira como gestor de proyectos \n\n Particularmente tuve que utilizar Docker para contenerizar la WebApp, Render para el despliegue del backend y los servicios RDS y S3 de AWS para el alojamiento de la base de datos. El backend Esta hecho con Springboot\n\n En este proyecto también tuve la posibilidad de conocer personas increíbles con las que al día de hoy mantengo una bonita amistad\n\n",
                  en: "Web app created to connect landlords with tenants or potential buyers.\nIn this project, I mainly worked as a DevOps and backend developer.\n I shared a team with one backend developer, three frontend developers, one designer, and two QA engineers.\n We used agile methodologies such as Scrum, daily meetings, sprint planning, and sprint reviews, and we also used Jira as our project management tool.\n\n I specifically had to use Docker to containerize the web app, Render for backend deployment, and AWS RDS and S3 services for database hosting. The backend is built with Springboot.\n\n In this project, I also had the opportunity to meet incredible people with whom I still maintain a beautiful friendship today.\n\n"
      }, 
      links: {
        site: "https://s15-12-m-java-vue-two.vercel.app/",
        github: "https://github.com/EmiBarrientos/s15-12-m-java-vue",
      },
    },
    
    {
      video: project3,
      title: "CheckInTech",
      description:{
                  es:  "WebApp de gestión Hotelera, Este proyecto lo realizamos en conjunto con 3 compañeros y amigos, en el marco del proyecto final del tercer cuatrimestre de la facultad, lo desarrollamos utilizando con Java, SpringBoot y SpringSecurity, JWT y una base de datos MySQL, el front esta codificado con PHP.\n Es este proyecto me encargue del modulo de seguridad, implementando Spring Security\n(En Progra-4 vamos a desarrollarle un front bonito con Angular )\n\n",
                  en:  "Hotel management web app. We carried out this project together with three colleagues and friends as part of our final project for the third semester at university. We developed it using Java, SpringBoot, SpringSecurity, JWT, and a MySQL database. The front end is coded in PHP.\n In this project, I was in charge of the security module, implementing Spring Security.\n (In Programaming 4, we are going to develop a nice front end with Angular )\n\n"
                },
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/TP-Final-progra-3",
      },
    },

    {
      video: project4,
      title: "Gestion De Empleados",
      description: {
        es: "Aplicación para la gestión de empleados, cuenta con la funcionalidad de crear, editar, eliminar y consultar una base de datos de empleados\nEste proyecto esta hecho utilizando NodeJS, Express, SweetAlert y una base de datos en MySQL.\n\n ",
        en: "Application for employee management, with the functionality to create, edit, delete, and consult an employee database.\n This project was created using NodeJS, Express, SweetAlert, and a MySQL database\n\n"
      }, 
       links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/GestionDeEmpleados",
      },
    },
    
    {
      video: project5,
      title: "Popurri de Proyectos",
      description: {
        es: "Dos proyectos Hechos con JavaScript puro, en el repositorio de este proyecto hay más, pero en el video grabé los dos mas WOW que encontré \n\n",
        en: "Two projects made of pure JavaSprit, there's more projects in the reposiroty, but in the video I just recorded the two more Awesome that I could found\n\n"
      },
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/JavaScript-Proyects",
      },
    },
    {
      img: project6,
      title: "Barberia Alura",
      description:{
        es: "Página web de una barberia fictícia hecha con Html CSS y JavaScript\n\n",
        en: "Website for a fictional barbershop created with HTML, CSS, and JavaScript.\n\n"
      }, 
      links: {
        site: "https://emibarrientos.github.io/BarberiaAlura/",
        github: "https://github.com/EmiBarrientos/BarberiaAlura",
      },
    },
     {
      img: project7,
      title: "Order MGMT",
      description: {
          es: "Actualmente estoy desarrollando una aplicación Web para el manejo de pedidos.\n En este proyecto planeo mejorar mis habilidades como desarrollador backend utilizando Java como lenguaje principal, profundizando más mis conocimientos en microservicios a través de su implementación, expandirme a SpringCloud, utilizar kafka, PostgreSql y además, masterizar Docker\n\n", 
          en: "I am currently developing a web application for order management.\n In this project, I plan to improve my skills as a backend developer using Java as the main language, deepening my knowledge of microservices through their implementation, expanding to SpringCloud, using Kafka, PostgreSQL, and also mastering Docker.\n\n"
        },
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/Gestion-De-Pedidos",
      },
    },

  ]


const Portfolio = ({language}:PortfolioProps)=>{
   
  return(
        <div className=" max-w[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <h2 className="text-3xl font-bold text-gray-200 mb-8"> 
              {language === "es" ? "Portfolio" : "Portfolio"}
            </h2>
            {projects.map((project,index)=>(
              <Reveal>
                <div key={index} 
                 className={`flex flex-col md:flex-row ${index % 2 ==0 ? 'md:flex-row-reverse': ''} mb-12` }>
                         <div className="w-full md:w-1/2 p-6">
                          {project.video ?(
                              <video  loop muted playsInline controls
                                src={project.video}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                              )
                              :project.img ?(
                                <img 
                                src={project.img}
                                alt={project.description[language]}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                              ):
                              null
                            }
                          </div>
                          
                          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
                              <p className="text-gray-200 mb-30 whitespace-pre-line">{project.description[language]}</p>
                              <div className="flex space-x-4S">
                                <a onClick={(e) => {
                                    e.preventDefault(); 
                                    if (project.links.site && project.links.site !== "#") {
                                      window.open(project.links.site, "_blank");
                                    } else {
                                      alert("Este proyecto no está desplegado");
                                    }
                                  }}
                                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                              transition duration-300">
                                                  {language === "es" ? "ver sitio" : "view site"}
                                              </a>
                                <a href={project.links.github} 
                                 className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                              transition duration-300"> <AiOutlineGithub/></a>
                              </div>
                                
                          </div>
                </div>
              </Reveal>
            ))}

        </div>
    )
}

export default Portfolio