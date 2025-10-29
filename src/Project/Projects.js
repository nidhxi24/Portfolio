import "./Project.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodeIcon from "@material-ui/icons/Code";

function Project() {
  return (
    <div className="project-main" id="projects">
      <div className="project-heading">Projects</div>
      <div className="all-project">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title">Portfolio</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <b>Tech: </b>React, JavaScript, HTML, CSS
            </h4>
            <p>
              Created a personal portfolio website using ReactJS, HTML, and CSS
              to showcase projects and skills.
            </p>
            <p>
              Applied responsive design principles for optimal viewing across
              devices and screen sizes.
            </p>
            <p>
              <button
                className="view-source-code"
                onClick={() =>
                  window.open("https://github.com/nidhxi24/Portfolio", "_blank")
                }
              >
                View Source Code
              </button>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Lemon Restro Website
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <b>Tech:</b> React, Node.js, Firebase, .NET
            </h4>
            <p>
            Implemented secure authentication using Firebase Auth with Google, Apple, and Facebook OAuth integration.
            </p>
            <p>
            Integrated frontend with a .NET backend API for live order management and dynamic content updates, ensuring a seamless
            user experience.
            </p>
            <p>
            Automated communication workflows using Nodemailer for instant email confirmations.
            </p>
            <p>
            Optimized performance and enhanced scalability through modular component design and API-driven architecture.
            </p>
            {/* <p>
              Added key features such as online reservations, dynamic menu
              display, and a customer review section.
            </p> */}

            <p>
              <button
                className="view-source-code"
                onClick={() =>
                  window.open(
                    "https://github.com/nidhxi24/little-lemon-restaurant",
                    "_blank"
                  )
                }
              >
                View Source Code
              </button>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
          >
            <h3 className="vertical-timeline-element-title">2048 game</h3>
            <h4 className="vertical-timeline-element-subtitle"><b>Tech:</b> Python, tkinter</h4>
            <p>
              It’s a python based game project, players have to swipe the
              numbered tiles using arrow keys of the keyboard and combining the
              tiles to create a tile with number 2048. And by combining scores
              get increase.
            </p>
            <p>
              The project works on python programming language and tkinter (for
              GUI).
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
export default Project;
