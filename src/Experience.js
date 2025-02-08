import React from "react";
import "./Experience.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import WorkIcon from '@material-ui/icons/Work';
function Experience() {
  return (
    <div className="exp-main">
      <div className="exp-heading">EXPERIENCE</div>
      <div className="exp-box-main">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="May 2024 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "1.75rem", fontWeight: "500"}}>
            SoftTech Engr.
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: "rgb(126, 136, 144)", fontWeight: "350", fontSize: "1.2rem"}}>Software Developer</h4>
            <p style={{color: "rgb(116, 128, 138", fontWeight: "350", fontSize: "1rem"}}>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
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
            <h3 className="vertical-timeline-element-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "1.75rem", fontWeight: "500"}}>
              SoftTech Engr.
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: "rgb(126, 136, 144)", fontWeight: "350", fontSize: "1.2rem"}}>Internship</h4>
            <p style={{color: "rgb(116, 128, 138", fontWeight: "350", fontSize: "1rem"}}>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        {/* <div className="exp-box" >

                    <div >
                        <div className='exp-box-heading'>
                            Front End Developer
                        </div>
                        <div className = 'exp-box-heading-sub'>
                            SoftTech Engr ltd. (Intern)
                        </div>
                    </div>
                    <div className='exp-box-content'>
                        Developed and maintained responsive websites using HTML, CSS, and JavaScript, en-
                        suring compatibility across multiple browsers and devices.
                        Assisted in debugging and troubleshooting technical issues to improve website performance and user experience.
                        Collaborated with senior developers to implement new features and enhance existing
                        functionalities.
                    </div>

                </div> */}
      </div>
    </div>
  );
}

export default Experience;
