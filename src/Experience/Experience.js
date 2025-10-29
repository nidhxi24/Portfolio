import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
function Experience() {
  return (
    <div className="exp-main" id="experience">
      <div className="exp-heading">EXPERIENCE</div>
      <div className="exp-box-main">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="June 2024 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">SoftTech Engr.</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Developer
            </h4>
            <p>
              Contribute to the development of various tenant UI screens for a
              key project, enhancing user experience and reducing support
              queries by 15%.
            </p>
            <p>
              Design and deliver interactive, browser-compatible pages using
              React and Redux, resulting in a 20% faster load time across
              applications.
            </p>
            <p>
              Integrate RESTful API on the frontend for real-time data exchange,
              reducing data refresh delays by 40%.
            </p>
            <p>
              Engineer multiple reusable UI components using JSON configuration
              to enhance flexibility and maintainability, reducing code
              duplication by 25%.
            </p>
            <p>
              Architect and deploy scalable UI components and user interfaces,
              leveraging Nx framework within a monorepo architecture, improving
              scalability and reducing build time by 30%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="June 2023 - Sept 2023"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">SoftTech Engr.</h3>
            <h4 className="vertical-timeline-element-subtitle">Internship</h4>
            <p>
              Built and maintained responsive websites using HTML, CSS, and
              JavaScript, ensuring compatibility across various browsers and
              devices.
            </p>
            <p>
              Identified and resolved performance bottlenecks, boosting website
              load speed by 20% and improving user experience metrics.
            </p>
            <p>
              Acquired practical experience with debugging tools, version
              control (e.g., Git), and code reviews in a collaborative
              development environment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
