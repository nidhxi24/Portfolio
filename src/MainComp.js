import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import About from "./About";

function MainComp() {
    return (
        <>
            <div id="home"><Home /></div>
            <div><About/></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="skills"><Skills /></div>
            {/* <div id="experience"><Experience /></div> */}
            <div id="education"><Education /></div>
            <div id="contact"><ContactMe /></div>
        </>
    );
}

export default MainComp;
