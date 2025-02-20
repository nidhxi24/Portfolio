import "./About.css";
import profile from '../assests/img.jpeg';

function About() {
  return (
    <div id="about" className="about-section-main">
      <div className="about-section-heading">ABOUT</div>

      <div className="about-content-boby">
        <div className="about-img-container">
          <img src={profile} className="about-img"></img>
        </div>
        <div className="about-content">
          <br />
          <h3>Software Developer</h3>
          <br />
          <br />
          <p>
            A passionate Full Stack Developer, Competitive Programmer, ML
            enthusiast and Table player
          </p>

          <br />
          <br />
          <p>
            Always seeking challenging position in and organization where my
            skills find ample of oppurtunities for upgradation and growth of the
            company.
          </p>
          <br />
          <br />

          <div className="about-content-rows">
            <div className="about-content-row">
              <div className="about-content-row-column-one">
                <i class="bx bx-chevron-right" className="content-row-head"></i>
                <b>Phone: </b>
                <span>7878230852</span>
              </div>
              <div className="about-content-row-column-two">
                <i class="bx bx-chevron-right" className="content-row-head"></i>
                <b>City:</b>
                <span>Pune</span>
              </div>
            </div>

            <div className="about-content-row">
              <div className="about-content-row-column-two">
                <i class="bx bx-chevron-right" className="content-row-head"></i>
                <b>Degree: </b> <span> B.Tech (Computer Science Engr.)</span>
              </div>
              <div className="about-content-row-column-two">
                <i class="bx bx-chevron-right" className="content-row-head"></i>
                <b>Email:</b>
                <span className="about-email">rajp.nidhi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
