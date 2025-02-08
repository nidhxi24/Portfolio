// import "./Experience.css";
import "./About.css";
import profile from "./img.jpeg";

function About() {
  return (
    <div className="exp-main">
      <div className="exp-heading">ABOUT</div>

      <div
        style={{ display: "flex", color: "white", height: "80%", width: "80%" }}
      >
        <div style={{ display: "flex", height: "100%", width: "30%" }}>
          <img
            src={profile}
            style={{ height: "55%", width: "65%", borderRadius: "50%" }}
          ></img>
        </div>
        <div
          className="about-content"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   width: "60%",
          //   height: "100%",
          // }}
        >
          <br />
          <h3>Software Developer</h3>
          <br />
          <br />
          <p style={{ color: "rgb(114, 131, 148)" }}>
            A passionate Full Stack Developer, Competitive Programmer, ML
            enthusiast and Table player
          </p>

          <br />
          <br />
          <p style={{ color: "rgb(114, 131, 148)" }}>
            Always seeking challenging position in and organization where my
            skills find ample of oppurtunities for upgradation and growth of the
            company.
          </p>
          <br />
          <br />

          {/* <div>Software Developer</div>
          <div>
            A passionate Full Stack Developer, Competitive Programmer, ML
            enthusiast and Table player
          </div>
          <div>
            Always seeking challenging position in and organization where my
            skills find ample of oppurtunities for upgradation and growth of the
            company.
          </div> */}

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              color: "rgb(114, 131, 148)",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <div style={{ marginBottom: "1rem", alignItems: "center"}}>
              <i class='bx bx-chevron-right' style={{fontSize: "1.5rem", color: "#0563bb"}} ></i>
                <b>Phone: </b>7878230852
              </div>
              <div style={{ marginBottom: "1rem"}}>
              <i class='bx bx-chevron-right' style={{fontSize: "1.5rem", color: "#0563bb"}} ></i>
                <b>City:</b> Pune
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <div style={{ marginBottom: "1rem"}}>
              <i class='bx bx-chevron-right' style={{fontSize: "1.5rem", color: "#0563bb"}}></i>
                <b>Degree: </b>B.Tech (Computer Science Engr.)
              </div>
              <div style={{ marginBottom: "1rem"}}>
              <i class='bx bx-chevron-right' style={{fontSize: "1.5rem", color: "#0563bb"}} ></i>
                <b>Email:</b><span style={{color: "#0563bb"}}>rajp.nidhi@gmail.com</span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
