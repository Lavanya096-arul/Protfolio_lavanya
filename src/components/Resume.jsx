import React from "react";
import "../styles/Resume.css";

const Resume = () => {
    return (
        <section className="resume-section">

            <h1 className="resume-title">My Resume</h1>

            <p className="resume-text">
                You can download my professional resume to learn more about my
                skills, projects, and experience in full-stack development.
            </p>

            <a
                href="/assets/resume.pdf"
                download
                className="resume-download-btn"
            >
                Download Resume
            </a>

        </section>
    );
};

export default Resume;