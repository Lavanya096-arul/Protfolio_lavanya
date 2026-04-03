import React from "react";
import { projects } from "../data";
import "../styles/Projects.css";

const Projects = () => {
    return (
        <section id="projects" className="projects-section fade-in">
            <h2>Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tech:</strong> {project.tech}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;