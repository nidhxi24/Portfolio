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

                    <div className='exp-box-heading'>React Infinte scroll</div>
                    {/* <div className='box-img'><img src={img_1} alt='project -1' /></div> */}
                    <div className='exp-box-content'>a scrollable bottom sheet with virtualization support, native animation at 60 fps and fully implemented in JS land</div>

                </div>
            </div>
        </div>
    );
}

export default Experience;