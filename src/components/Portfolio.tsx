
import project1 from "../assets/MyDoctorApp_video.mp4"
import project2 from "../assets/Propiedades-360.png"
import project3 from "../assets/Tp-3-Progra.mov"
import project4 from "../assets/GestionDeEmpleados_video.mov"
import project5 from "../assets/Popurri De proyectos.mov"
import project6 from "../assets/BarberiaAluraImg.png"
import project7 from "../assets/ComingSoon.png"

import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from "./Reveal";


const projects = [
    {
      video: project1,
      title: "MyDoctorApp",
      description: "Aplicación Web para el manejo de turnos médicos.\n En este proyecto me desempeñé como desarrollador backend, en un equipo de 8 personas, 2 diseñadores, 1 frontend y 5 backends.\nDiseñé, implementé y codifiqué APIs y conexiones con la base de datos.\nUtilizamos Metodologías agiles bajo el marco Scrum, reuniones diarias, sprint Reviews, sprint plannings y jira como gestor de proyecto. \nTecnologías usadas:\nJava, SpringBoot, SpringSecurity, AWS, Docker, MySQL \n\nEsta fue una de las mejores experiencias de mi vida, mas allá de lo aprendido, me permitió crecer como profesional, trabajar en un entorno colaborativo y además, me brindó la posibilidad de conocer personas maravillosas\n\n",
      links: {
        site: "https://mydoctorapp.vercel.app/",
        github: "https://github.com/EmiBarrientos/c17-56-T-Java",
      },
    },
    
    {
      img: project2,
      title: "Propiedades 360",
      description: "Webapp creada para conectar Locatarios con inquilinos o posibles compradores.\nEn este proyecto me desempeñé principalmente como DevOps y desarrollador Backend.\n Compartí equipo con 1 Backend dev, 3 frontend devs, 1 diseñador y 2 QA\n Utilizamos Metodologías agiles Scrum, dalies, sprint planning y sprint reviews, además contamos con jira como gestor de proyectos \n\n Particularmente tuve que utilizar Docker para contenerizar la WebApp, Render para el despliegue del backend y los servicios RDS y S3 de AWS para el alojamiento de la base de datos. El backend Esta hecho con Springboot\n\n En este proyecto también tuve la posibilidad de conocer personas increíbles con las que al día de hoy mantengo una bonita amistad\n\n",
      links: {
        site: "https://s15-12-m-java-vue-two.vercel.app/",
        github: "https://github.com/EmiBarrientos/s15-12-m-java-vue",
      },
    },
    
    {
      video: project3,
      title: "CheckInTech",
      description: "WebApp de gestión Hotelera, Este proyecto lo realizamos en conjunto con 3 compañeros y amigos, en el marco del proyecto final del tercer cuatrimestre de la facultad, lo desarrollamos utilizando con Java, SpringBoot y SpringSecurity, JWT y una base de datos MySQL, el front esta codificado con PHP.\n Es este proyecto me encargue del modulo de seguridad, implementando Spring Security\n(En Progra-4 vamos a desarrollarle un front bonito con Angular )\n\n",
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/TP-Final-progra-3",
      },
    },

    {
      video: project4,
      title: "Gestion De Empleados",
      description: "Aplicación para la gestión de empleados, cuenta con la funcionalidad de crear, editar, eliminar y consultar una base de datos de empleados\nEste proyecto esta hecho utilizando NodeJS, Express, SweetAlert, una base de datos en MySQL y el ingrediente secreto: Amor <3\n\n ",
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/GestionDeEmpleados",
      },
    },
    
    {
      video: project5,
      title: "Popurri de Proyectos",
      description: "Dos proyectos Hechos con JavaScript puro, en el repositorio de este proyecto hay más, pero en el video grabé los dos mas WOW que encontré xd\n\n",
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/JavaScript-Proyects",
      },
    },
    {
      img: project6,
      title: "Barberia Alura",
      description: "Página web de una barberia fictícia hecha con Html CSS y JavaScript\n\n",
      links: {
        site: "https://emibarrientos.github.io/BarberiaAlura/",
        github: "https://github.com/EmiBarrientos/BarberiaAlura",
      },
    },
     {
      img: project7,
      title: "Gestion De pedidos",
      description: "Actualmente estoy desarrollando una aplicación Web para el manejo de pedidos.\n En este proyecto planeo mejorar mis habilidades como desarrollador backend utilizando Java como lenguaje principal, profundizando más mis conocimientos en microservicios a través de su implementación, expandirme a SpringCloud, utilizar kafka, PostgreSql y además, masterizar Docker\n\n",
      links: {
        site: "#",
        github: "https://github.com/EmiBarrientos/Gestion-De-Pedidos",
      },
    },

  ]


const Portfolio = ()=>{
    return(
        <div className=" max-w[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
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
                                alt={project.description}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                              ):
                              null
                            }
                          </div>
                          
                          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
                              <p className="text-gray-200 mb-30 whitespace-pre-line">{project.description}</p>
                              <div className="flex space-x-4S">
                                <a onClick={(e) => {
                                    e.preventDefault(); // evita que navegue al "#"
                                    if (project.links.site && project.links.site !== "#") {
                                      window.open(project.links.site, "_blank");
                                    } else {
                                      alert("Este proyecto no está desplegado xd ");
                                    }
                                  }}
                                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                              transition duration-300">ver sitio</a>
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