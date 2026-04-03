import React from "react";
import "../styles/Hero.css";

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <h1 className="hero-name">Lavanya</h1>
            <p className="hero-title">Full-Stack Developer | Programmer </p>
            <img src="/assets/images/profile.jpg" alt="Lisa Profile" className="profile-img" />
        </section>
    );
};

export default Hero;