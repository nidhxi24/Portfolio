import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Navbar.css'
// import {Routes, Route} from "react-router-dom";
import ContactMe from './ContactMe';
import Project from './Projects';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav-main">
            <div className='nav-box'>

                <Link to="/">Home</Link>
                <Link to= "/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to= "/experience">Experience</Link>
                <Link to="/education">Education</Link>
                <Link to="/contact">ContactMe</Link>
            </div>
        </div>
    );
}

export default Navbar;