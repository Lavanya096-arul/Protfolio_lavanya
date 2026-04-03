import React from "react";
import { skills } from "../data";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section fade-in">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">

            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level + "%" }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;