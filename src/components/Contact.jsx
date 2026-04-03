import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact-section">

            <h2>Contact Me</h2>

            <p className="contact-text">
                Feel free to reach out for collaboration or opportunities.
            </p>

            <div className="contact-icons">

                <a href="mailto:youremail@gmail.com">
                    <FaEnvelope />
                </a>

                <a href="tel:+911234567890">
                    <FaPhone />
                </a>

                <a href="https://linkedin.com/in/yourprofile" target="_blank">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/yourprofile" target="_blank">
                    <FaGithub />
                </a>

            </div>

        </section>
    );
};

export default Contact;