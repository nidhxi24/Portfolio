import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav-main nav-menu">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={700}>
              <i className="bx bx-home"></i>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="about" smooth={true} duration={700}>
              <i className="bx bx-user"></i>
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link to="experience" smooth={true} duration={700}>
              <i className="bx bxs-briefcase"></i>
              <span>Experience</span>
            </Link>
          </li>

          <li>
            <Link to="projects" smooth={true} duration={700}>
              <i className="bx bx-code"></i>
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link to="skills" smooth={true} duration={700}>
              <i className="bx bxs-graduation"></i>
              <span>Skills</span>
            </Link>
          </li>

          <li>
            <Link to="education" smooth={true} duration={700}>
              <i className="bx bxs-graduation"></i>
              <span>Education</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
