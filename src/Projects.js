import "./Project.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';

function Project() {
  return (
    <div className="project-main">
      <div className="project-heading">Projects</div>
      <div className="all-project">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
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
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
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
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
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
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
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
            contentStyle={{ background: "rgb(52, 58, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(5, 99, 187)", color: "#fff" }}
            icon={<CodeIcon />}
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

         
        </VerticalTimeline>
      </div>
    </div>
  );
}
export default Project;

// import './Project.css';
// // import img_1 from './portfolio_img_1.jpeg';
// function Project() {
//     return (
//         <div className='project-main'>
//             <div className='project-heading'>
//                 Projects
//             </div>

//             <div className='all-project'>

//                 <button className='box box-1'  onClick={() => window.open('https://github.com/nidhxi24', '_blank')}>
//                     {/* <a href='https://github.com/nidhxi24'> */}
//                 {/* <div className='box box-1' onClick={() => window.open('https://github.com/nidhxi24', '_blank')}> */}
//                     {/* <a href='github.com'> */}

//                     <div className='box-heading'>React space</div>
//                     {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
//                     <div className='box-content'>Handy tool belt to create amazing AR components in a React app, with redux intergration via middleware</div>
//                     {/* </a> */}
//                 </button>

//                 <button className='box box-2' onClick={() => window.open('https://github.com/nidhxi24', '_blank')}>

//                     <div className='box-heading'>React Infinte scroll</div>
//                     {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
//                     <div className='box-content'>a scrollable bottom sheet with virtualization support, native animation at 60 fps and fully implemented in JS land</div>

//                 </button>

//                 <button className='box box-3' onClick={() => window.open('https://github.com/nidhxi24', '_blank')}>

//                     <div className='box-heading'>Photo Gallery</div>
//                     {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
//                     <div className='box-content'>A one- stop shop for photographs to share and monetize their photos, allowing them to have a second source of income</div>

//                 </button>

//                 <button className='box box-4' onClick={() => window.open('https://github.com/nidhxi24', '_blank')}>

//                     <div className='box-heading'>Event Planner</div>
//                     {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
//                     <div className='box-content'>A mobile application for leisure seekers to discover unique events and activities in thier city with a few steps</div>

//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Project;
