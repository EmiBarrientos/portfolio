
import project1 from "../assets/Order-mgmt-v1.mp4"
import project2 from "../assets/MyDoctorApp_video.mp4"
import project3 from "../assets/propiedades360_video.mp4"


import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from "./Reveal";

interface PortfolioProps{
    language: "es" | "en";
}



const projects = [
   {
      video: project1,
      title: "Order MGMT",
      description: {
          es: "Sistema de gestión de pedidos con arquitectura de microservicios.\n Arquitectura: 6 servicios: 3 de infraestructura (Eureka para service discovery, Config Server y un API Gateway reactivo con Spring Cloud Gateway) y 3 de dominio (usuarios, productos y órdenes). El servicio de usuarios está implementado con arquitectura hexagonal.\n\nUna base de datos por servicio: MySQL para productos, PostgreSQL para órdenes y MongoDB para usuarios.\n\nComunicación entre servicios: el servicio de órdenes consulta productos por id mediante OpenFeign.\n\nSeguridad: registro y login; el servicio de usuarios crea y valida usuarios y genera el JWT, que el gateway entrega al cliente dentro de una cookie.\n\nInfraestructura: servicios y bases de datos dockerizados y orquestados con Docker Compose.\n\nFrontend: React, Tailwind CSS y Vite, en un repositorio aparte.\n\nTests: tests de controllers y services\n\nPróxima fase: AOP y DDD\n\nStack: Java, Spring Boot, Spring Cloud (Eureka, Config Server, Gateway, OpenFeign), JWT, MySQL, PostgreSQL, MongoDB, Docker, React, Tailwind CSS", 
          en: "Order management system built with a microservices architecture.\n Architecture: 6 services: 3 infrastructure services (Eureka for service discovery, Config Server and a reactive API Gateway built with Spring Cloud Gateway) and 3 domain services (users, products and orders). The users service follows a hexagonal architecture.\n\nDatabase per service: MySQL for products, PostgreSQL for orders and MongoDB for users.\n\nInter-service communication: the orders service fetches products by id through OpenFeign.\n\nSecurity: registration and login; the users service creates and validates users and issues the JWT, which the gateway returns to the client inside a cookie.\n\nInfrastructure: services and databases containerized and orchestrated with Docker Compose.\n\nFrontend: React, Tailwind CSS and Vite, in a separate repository.\n\nTesting: controller and service tests.\n\nNext phase: AOP and DDD\nStack: Java, Spring Boot, Spring Cloud (Eureka, Config Server, Gateway, OpenFeign), JWT, MySQL, PostgreSQL, MongoDB, Docker, React, Tailwind CSS\n"
        },
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/Order-MGMT",
        frontend:"https://github.com/EmiBarrientos/Order-MGMT-Frontend",
      },
    },
   {
      video: project3,
      title: "Propiedades 360",
      description:{
                  es: "Aplicación web monolítica para gestionar propiedades, usuarios, visitas y pagos. Nació como proyecto grupal en No Country; retomé mi fork para dejarlo funcionando, seguro y desplegado.\n\n\nRediseño del backend: reorganicé responsabilidades cruzadas (por ejemplo, la reserva de inmuebles estaba en el servicio de clientes y la moví al servicio de reservas), saqué lógica de negocio de entidades y controllers y eliminé código sin uso y boilerplate redundante con Lombok.\n Seguridad: agregué autenticación con Spring Security y JWT, entregado dentro de una cookie.\n Infraestructura: dockericé la aplicación y migré la base de MySQL a PostgreSQL.\n\n Frontend: lo conecté al backend y refactoricé para corregir bugs.\n\nTests: agregué tests de los services usando JUnit y Mockito y de los controllers usando MockMvc\n\n Despliegue: backend en Render, frontend en Vercel y base de datos en Supabase.\n\n108 commits por delante del repositorio original.\n\nStack: Java, Spring Boot, Spring Security, JWT, JPA/Hibernate, PostgreSQL, Docker, React\n\n",
                  en: "Monolithic web application for managing properties, users, bookings and payments. It started as a team project at No Country; I later picked up my fork to get it working, secured and deployed.\nBackend redesign: Reorganized cross-cutting responsibilities (for example, property booking lived in the client service, so I moved it to the booking service), pulled business logic out of entities and controllers, and removed dead code and redundant boilerplate with Lombok.\n Security: Added authentication with Spring Security and JWT, delivered inside a cookie.\n Testing: Added tests for services using JUnit and Mockito and controllers using MockMvc.\n\n Infrastructure: Dockerized the application and migrated the database from MySQL to PostgreSQL.\n\n Frontend: Connected it to the backend and refactored it to fix bugs.\n\nDeployment: Backend on Render, frontend on Vercel, database on Supabase.\n\n108 commits ahead of the original repository.\nStack: Java, Spring Boot, Spring Security, JWT, JPA/Hibernate, PostgreSQL, Docker, React\n"
      }, 
      links: {
        site: "https://propiedades360.vercel.app/",
        github: "https://github.com/EmiBarrientos/s15-12-m-java-vue",
        RepoOriginal: "https://github.com/facu1391/s15-12-m-java-vue/tree/main",
      },
    },
    {
      video: project2,
      title: "MyDoctorApp",
      description:{
                    es: "Aplicación web para gestionar turnos médicos, desarrollada durante mi práctica en No Country en un equipo de 8 personas (2 diseñadores, 1 frontend y 5 backend), con Scrum y Jira.\n Mi rol: desarrollador backend, a cargo del módulo de recepcionistas y de parte del de doctores.\nImplementé el alta, baja, modificación, eliminación y consulta de recepcionistas.\nDesarrollé funciones de la entidad de doctores.\nTrabajé con dailies, sprint plannings y sprint reviews.\nStack: Java, Spring Boot, Spring Data JPA, MySQL, Docker, React. La seguridad y el despliegue de la base en AWS estuvieron a cargo de otros integrantes del equipo.\n\n",
                    en: "Web application for managing medical appointments, built during my No Country internship in a team of 8 (2 designers, 1 frontend and 5 backend developers), using Scrum and Jira.\n My role: backend developer, in charge of the receptionist module and part of the doctor module.\nBuilt create, update, delete and lookup for receptionists.\nBuilt patient registration by receptionists.\nDeveloped features of the doctor entity.\nWorked with daily meetings, sprint planning and sprint reviews.\n\nStack: Java, Spring Boot, Spring Data JPA, MySQL, Docker, React. Security and the AWS database deployment were handled by other team members.\n\n"
                  }, 
      links: {
        site: "https://mydoctorapp.vercel.app/",
        github: "https://github.com/EmiBarrientos/c17-56-T-Java",
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
                                className="w-full h-auto object-contain rounded-lg shadow-lg"
                                />
                              )
                              :
                              null
                            }
                          </div>
                          
                          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
                              <p className="text-gray-200 mb-30 list-inside whitespace-pre-line">
                                {project.description[language] .split(/\n+/)
                                .map((texto) => texto.trim())
                                .filter(Boolean)
                                .map((texto, index) => (
                                  <li key={index}
                                   className={index === 0 ? "list-none" : ""}
                                   >{texto}</li>
                                ))}</p>
                              <div className="flex space-x-4S mt-7 flex-wrap gap-4">
                                
                                {(project.links.site && project.links.site !== "#") ? (
                                  <a href={project.links.site}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                                transition duration-300">
                                                    {language === "es" ? "ver sitio" : "view site"}</a>
                                ) : null}

                                <a href={project.links.github}
                                   target="_blank"
                                   rel="noopener noreferrer" 
                                   className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                              transition duration-300">  {language === "es" ? "Repositorio" : "Repository"}<AiOutlineGithub/></a>

                                {project.links.RepoOriginal && (
                                  <a href={project.links.RepoOriginal}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                                transition duration-300"> {language === "es" ? "Repositorio Original" : "Original Repository"}<AiOutlineGithub/></a>
                                )}
                                 {project.links.frontend && (
                                  <a href={project.links.frontend}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                                transition duration-300"> {language === "es" ? "Repositorio Frontend" : "Frontend Repository"}<AiOutlineGithub/></a>
                                )}
                              </div>
                                
                          </div>
                </div>
              </Reveal>
            ))}

        </div>
    )
}

export default Portfolio


/** 
 * onClick={(e) => {
                                    e.preventDefault(); 
                                    if (project.links.site && project.links.site !== "#") {
                                      window.open(project.links.site, "_blank");
                                    } else {
                                      alert("Este proyecto no está desplegado");
                                    }
                                  }}
 */