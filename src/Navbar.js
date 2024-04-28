import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Navbar.css'
// import {Routes, Route} from "react-router-dom";
import ContactMe from './ContactMe';
import Project from './Projects';

function Navbar() {
    return (
        <div className="nav-main">
            <div className='nav-box'>

                <div>Home</div>
                <div>Projects</div>
                <div>Skills</div>
                <div>Experience</div>
                <div>Education</div>
                <div>Contact</div>
                
            </div>
        </div>
    );
}

export default Navbar;