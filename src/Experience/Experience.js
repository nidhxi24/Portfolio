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
              Developed various tenant UI screens for a
              key project, enhancing user interface and experience using
              Javascript and modern web technologies.
            </p>
            <p>
              Designed mutiple dynamic and browser compatible pages using HTML,
              CSS, Javascript (React, Redux)
            </p>
            <p>Integrated RESTfull API on Frontend</p>
            <p>
              Developed dynamic components using JSON configuration to enhance
              UI flexibility and maintainability.
            </p>
            <p>
              Designing and implementing dynamic user interface and components,
              leveraging Nx framework within a monorepo architecture,
              empphasizing modular and scalable codebase management
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
            Developed and maintained responsive websites using HTML, CSS, and JavaScript, ensuring compatibility across
            multiple browsers and devices.
            </p>
            <p>Assisted in debugging and troubleshooting technical issues to improve website performance and user experience.</p>
            <p>Collaborated with senior developers to implement new features and enhance existing functionalities.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
