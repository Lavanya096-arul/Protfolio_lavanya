import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Coding from "./components/Coding";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./styles/App.css";
import "./styles/Sidebar.css";

const App = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="app-container">
            {/* Sidebar */}
            <nav className="sidebar">
                <ul>
                    <li onClick={() => scrollToSection("hero")}>Home</li>
                    <li onClick={() => scrollToSection("about")}>About Me</li>
                    <li onClick={() => scrollToSection("skills")}>Skills</li>
                    <li onClick={() => scrollToSection("projects")}>Projects</li>
                    <li onClick={() => scrollToSection("coding")}>Coding</li>
                    <li onClick={() => scrollToSection("resume")}>Resume</li>
                    <li onClick={() => scrollToSection("Contact")}>Contact</li>

                </ul>
            </nav>

            {/* Main Content */}
            <div className="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Coding />
                <Resume />
                <Contact />
            </div>
        </div>
    );
};

export default App;