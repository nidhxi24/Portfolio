import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Navbar.css'
// import {Routes, Route} from "react-router-dom";
import ContactMe from './ContactMe';
import Project from './Projects';

function Navbar() {
    return (
        <div className="nav-main">
            <div className='left-icon'>
                <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                <a href="https://github.com/"><FaGithub /></a>
            </div>

            <div className='right-icon'>

                {/* <Routes>

                    <Route path = "/project" element = {<Project/>}></Route>

                    <Route path = "/contact" element = {<ContactMe/>}></Route> */}
                <a href="/projects">Projects</a>
                
                <a href="/contact">Contact Me</a>

                {/* </Routes> */}

            </div>
        </div>
    );
}

export default Navbar;