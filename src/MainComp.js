import React from "react";
import Home from './Home/Home';
import Projects from './Project/Projects';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ContactMe from './ContactMe/ContactMe';
import About from './About/About'

function MainComp() {
    return (
        <>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <div id="contact"><ContactMe /></div>
        </>
    );
}

export default MainComp;