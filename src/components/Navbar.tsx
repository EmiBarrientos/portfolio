import {useState} from 'react';
import{AiOutlineClose} from 'react-icons/ai';
import{AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"

interface NavbarProps {
  language: "es" | "en";
  setLanguage: React.Dispatch<React.SetStateAction<"es" | "en">>;
}


const Navbar= ({ language, setLanguage }: NavbarProps) => {
   const [nav,setNav]=useState(false)
   
   const toggleNav=()=>{
    setNav(!nav)
    }
    const closeNav=()=>{
    setNav(false) 
    }
    const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

    const menuVariants = {
        open:{
            x:0,
            transition:{
                stiffness:20,   
                damping:15
            }
        },
        closed:{      
            x:'-100%',
            transition:{
                stiffness:20,   
                damping:15
            }
        }

    }

    return(
        <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'> 
            <div className='max-w-[1300px] mx-auto flex justify-between text-gray-200
            text-x1 items-center px-12 h-20 '>
                <a href='#' >Emi Barrientos</a>
                  <button onClick={toggleLanguage}>
                        {language === "es" ? "English" : "Español"}
                </button>

                <ul className='hidden md:flex gap-12 z-10- cursor-pointer'>
                    <li><Link to="skills" smooth={true} offset={50} duration={500}> {language === "es" ? "Herramientas" : "Tools"}</Link></li>
                    <li><Link to="portfolio" smooth={true} offset={50} duration={500}> {language === "es" ? "Portafolio" : "Portfolio"} </Link></li>   
                    <li><Link to="Contact" smooth={true} offset={50} duration={500}> {language === "es" ? "Contacto" : "Contact"} </Link></li>           
                </ul>
                
                <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} /> }
                </div>


                <motion.div
                initial={false}
                animate={nav ? 'open':'closed'}
                variants={menuVariants}
                className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
                >
                    <ul className='font-semibold text-4x1 space-y-8 mt-24 text-center'>
                        <li><Link to="skills"  onClick={closeNav} smooth={true} offset={50} duration={500}> {language === "es" ? "Herramientas" : "Tools"}</Link></li>
                        <li><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}> {language === "es" ? "Portafolio" : "Portfolio"}</Link></li>   
                        <li><Link to="Contact" onClick={closeNav} smooth={true} offset={50} duration={500}> {language === "es" ? "Contacto" : "Contact"} </Link></li>      

                    </ul>

                </motion.div>


            </div>

        </div>

    )
    
}

export default Navbar