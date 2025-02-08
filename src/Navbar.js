import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Navbar.css";
// import {Routes, Route} from "react-router-dom";
import ContactMe from "./ContactMe";
import Project from "./Projects";
import { Link } from "react-scroll";
import Icon from "@mdi/react";
import { mdiHomeOutline } from "@mdi/js";
import { mdiAccount } from "@mdi/js";
import { mdiBriefcaseVariantOutline } from "@mdi/js";
import { mdiApplicationBracketsOutline } from "@mdi/js";
import { mdiSchool } from "@mdi/js";
import { mdiTrophyAward } from "@mdi/js";

// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav-main nav-menu">
        <ul>
          <li>
            <a to="home" smooth={true} duration={700}>
              <i class="bx bx-home"></i>
              {/* <Link to="home" smooth={true} duration={700}>
                Home
              </Link> */}
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="/about">
              <i class="bx bx-user"></i>
              <span>About</span>
              {/* <span>About</span> */}
            </a>
          </li>

          <li>
            <a href="/experience">
              <i class="bx bxs-briefcase"></i>
              <span>Experience</span>
            </a>
          </li>

          <li>
            <a href="/experience">
              <i class="bx bx-code"></i>
              <span>Projects</span>
            </a>
          </li>

          <li>
            <a to="projects" smooth={true} duration={700}>
              <i class="bx bxs-briefcase"></i>
              {/* <Link to="projects" smooth={true} duration={700}>
                Experience
              </Link> */}
              <span>Experience</span>
            </a>
          </li>

          <li>
            <a href="/experience">
              <i class="bx bxs-graduation"></i>
              <span>Education</span>
            </a>
          </li>
        </ul>

        {/* <div
        className="nav-box"
        // style={{display: "flex", width: "10%", height: "100%"}}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "80%",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", height: "20%" }}>
            <Icon path={mdiHomeOutline} size={1} style={{ color: "white" }} />
            <Link to="home" smooth={true} duration={700}>
              Home
            </Link>
          </div>
          <div style={{ display: "flex", height: "20%" }}>
            <Icon path={mdiAccount} size={1} style={{ color: "white" }} />
            <Link to="projects" smooth={true} duration={700}>
              About
            </Link>
          </div>

          <div style={{ display: "flex", height: "20%" }}>
            <Icon
              path={mdiBriefcaseVariantOutline}
              size={1}
              style={{ color: "white" }}
            />
            <Link to="projects" smooth={true} duration={700}>
              Experience
            </Link>
          </div>

          <div style={{ display: "flex", height: "20%" }}>
            <Icon
              path={mdiApplicationBracketsOutline}
              size={1}
              style={{ color: "white" }}
            />
            <Link to="skills" smooth={true} duration={700}>
              Projects
            </Link>
          </div>

          <div style={{ display: "flex", height: "20%" }}>
            <Icon
              path={mdiTrophyAward}
              size={1}
              style={{ color: "white" }}
            />
            <Link to="experience" smooth={true} duration={700}>
              Achiecement
            </Link>
          </div>

          <div style={{ display: "flex", height: "20%" }}>
            <Icon path={mdiSchool} size={1} style={{ color: "white" }} />
            <Link to="education" smooth={true} duration={700}>
              Education
            </Link>
          </div>
        </div>
      </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
