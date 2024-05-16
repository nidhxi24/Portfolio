import React from "react";
import './Education.css';
function Education() {
    return (
        <div className="edu-main">
            <div className="edu-heading">
                Education

            </div>
            <div className="edu-box-main">
                <div className="edu-box" >

                    <div >
                        <div className='edu-box-heading'>
                            Bachelor of Technology
                        </div>
                        <div className='edu-box-heading-sub'>
                            Jodhpur Institute of Engineering and Technology
                        </div>
                    </div>
                    {/* <div className='edu-box-heading'>Bachelor of Technology</div> */}
                    {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
                    <div className='edu-box-content'>
                        {/* Jodhpur Institute of Engineering and Technology */}
                        Graduated in 2023
                        GPA 6.2/7

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Education;