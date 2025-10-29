import "./Navbar.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "education"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      <nav className="nav-main nav-menu">
        <ul>
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={700}
              className={activeSection === "home" ? "active" : ""}
            >
              <i className="bx bx-home"></i>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={700}
              className={activeSection === "about" ? "active" : ""}
            >
              <i className="bx bx-user"></i>
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link 
              to="experience" 
              smooth={true} 
              duration={700}
              className={activeSection === "experience" ? "active" : ""}
            >
              <i className="bx bxs-briefcase"></i>
              <span>Experience</span>
            </Link>
          </li>

          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={700}
              className={activeSection === "projects" ? "active" : ""}
            >
              <i className="bx bx-code"></i>
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link 
              to="skills" 
              smooth={true} 
              duration={700}
              className={activeSection === "skills" ? "active" : ""}
            >
              <i className="bx bx-star"></i>

              {/* <i className="bx bx-medal"></i> */}

              {/* <i className="bxr  bx-medal-star-alt"></i>  */}
              {/* <i className="bxr  bx-medal-star-alt-2"></i>  */}
              {/* <i className="bx bxs-graduation"></i> */}
              <span>Skills</span>
            </Link>
          </li>

          <li>
            <Link 
              to="education" 
              smooth={true} 
              duration={700}
              className={activeSection === "education" ? "active" : ""}
            >
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