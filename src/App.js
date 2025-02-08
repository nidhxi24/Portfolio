import Home from "./Home";
// import Navbar from './Navbar';
import Project from "./Projects";
import ContactMe from "./ContactMe";
import "./App.css";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import MainComp from "./MainComp";
import Navbar from "./Navbar";
import { Routers, Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgb(46, 45, 43)",
          // flexDirection: "column"
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(46, 45, 43)",
            //  width: "95%"
            paddingLeft: "7rem",
            width: "100%",
            height: "100%",
          }}
        >
          <MainComp />
        </div>
      </div>

      {/* <Routes>
          <Route path = "/" element= {<About/>}/>
          <Route path = "/project" element= {<Project/>}/>
          <Route path = "/skills" element= {<Skills/>}/>
          <Route path = "/experience" element= {<Experience/>}/>
          <Route path = "/education" element= {<Education/>}/>
          <Route path = "/contactme" element= {<ContactMe/>}/>
      </Routes> */}
    </>
  );
}

export default App;
