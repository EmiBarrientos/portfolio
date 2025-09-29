import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
    const [language, setLanguage] = useState<"es" | "en">("es");
  return (
    <>
    <Navbar language={language} setLanguage={setLanguage}/>
    <Hero language={language}/>
    <Skills language={language}/>
    <Portfolio language={language}/>
    <Experience language={language}/>
    <Contact language={language}/>
    <Footer/>
  </>
  );
}