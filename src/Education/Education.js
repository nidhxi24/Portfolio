import React from "react";
import "./Education.css";
// import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import StarsIcon from "@material-ui/icons/Stars";
function Education() {
  return (
    <div className="edu-main" id="education">
      <div className="edu-heading">Education</div>
      <div className="edu-box-main">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2024"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">B. Tech (CSE)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jodhpur Institute of Engineering and Technologies
            </h4>
            <p><b>Overall CGPA: </b> 8.9</p>
            <p>
              <b>Computer Science:- </b> Data Structures and Algorithms, Machine
              Learning, Object-Oriented Programming, Database Management System,
              Web development, Data analysis, Design and Analysis of Algorithms,
              Operating System, Android Development, Computer Organization and
              Architecture, Discrete Structures, System Programming, Digital
              Logic and Design, Computer Networks.
            </p>

            <p>
              <b>Mathematics:- </b> Linear Algebra and Optimization, Calculus,
              Differential Equations, Numerical Analysis, Statistics and
              Probability Theory
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<StarsIcon />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
