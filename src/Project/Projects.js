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
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Developed a personal portfolio website using ReactJS, JavaScript,
              HTML, CSS, and vari- ous libraries to showcase my projects and
              skills.
            </p>
            <p>
              Integrated responsive design for optimal viewing across various
              devices.
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
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Developed a fully functional restaurant website using React,
              Node.js.
            </p>
            <p>
              Integrated Firebase Authentication for secure login using Google,
              Apple, and Facebook.
            </p>
            <p>
              Implemented Nodemailer for email notifications and order
              confirmations.
            </p>
            <p>
              Built API integrations with a .NET backend for handling dynamic
              data
            </p>
            <p>
              Added key features such as online reservations, dynamic menu
              display, and a customer review section.
            </p>

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
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
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
