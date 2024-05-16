import React from "react";
import './Experience.css';
function Experience() {
    return (
        <div className="exp-main">
            <div className="exp-heading">
                Experience

            </div>
            <div className="exp-box-main">
                <div className="exp-box" >

                    <div >
                        <div className='exp-box-heading'>
                            Front End Developer
                        </div>
                        <div className = 'exp-box-heading-sub'>
                            SoftTech Engr ltd. (Intern)
                        </div>
                    </div>
                    {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
                    <div className='exp-box-content'>
                        {/* <ul> */}
                        Developed and maintained responsive websites using HTML, CSS, and JavaScript, en-
                        suring compatibility across multiple browsers and devices.
                        Assisted in debugging and troubleshooting technical issues to improve website performance and user experience.
                        Collaborated with senior developers to implement new features and enhance existing
                        functionalities.
                        {/* </ul> */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Experience;