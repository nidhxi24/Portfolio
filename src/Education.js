import React from "react";
import "./Education.css";
import "./Experience.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import SchoolIcon from '@material-ui/icons/School';
//   import WorkIcon from '@material-ui/icons/Work';
  import StarsIcon from '@material-ui/icons/Stars';
function Education() {
  return (
    <div className="edu-main">
      <div className="edu-heading">Education</div>
      <div className="edu-box-main">

      <VerticalTimeline>
      <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "1.75rem", fontWeight: "500"}}>
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: "rgb(126, 136, 144)", fontWeight: "350", fontSize: "1.2rem"}}>Miami, FL</h4>
            <p style={{color: "rgb(116, 128, 138", fontWeight: "350", fontSize: "1rem"}}>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<StarsIcon />}
          >
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* <div className="edu-box">
          <div>
            <div className="edu-box-heading">Bachelor of Technology</div>
            <div className="edu-box-heading-sub">
              Jodhpur Institute of Engineering and Technology
            </div>
          </div>
          <div className='edu-box-heading'>Bachelor of Technology</div>
          <div className='box-img'><img src={img_1} alt='project -1' /></div>
          <div className="edu-box-content">
            Jodhpur Institute of Engineering and Technology
            Graduated in 2023 GPA 6.2/7
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Education;
