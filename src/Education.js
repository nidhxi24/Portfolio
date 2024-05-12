import React from "react";
import './Education.css';
function Education(){
    return(
        <div className="edu-main">
            <div className="edu-heading">
                Education

            </div>
            <div className="edu-box-main">
                <div className="edu-box" >

                    <div className='edu-box-heading'>React Infinte scroll</div>
                    {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
                    <div className='edu-box-content'>a scrollable bottom sheet with virtualization support, native animation at 60 fps and fully implemented in JS land</div>

                </div>
            </div>
        </div>
    );
}

export default Education;