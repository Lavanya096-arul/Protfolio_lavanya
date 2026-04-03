import React from "react";
import { codingPlatforms } from "../data";
import "../styles/Coding.css";

const Coding = () => {
    return (
        <section id="coding" className="coding-section fade-in">
            <h2>Coding Section</h2>
            <div className="coding-list">
                {codingPlatforms.map((platform, index) => (
                    <a href={platform.link} target="_blank" rel="noopener noreferrer" key={index} className="coding-card">
                        <h3>{platform.name}</h3>
                        <p>{platform.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Coding;