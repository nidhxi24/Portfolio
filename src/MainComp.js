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
            <div id="home"><Home /></div>
            <div id="about"><About/></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="skills"><Skills /></div>
            <div id="education"><Education /></div>
            <div id="contact"><ContactMe /></div>
        </>
    );
}

export default MainComp;
