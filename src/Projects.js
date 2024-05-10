import './Project.css';
import img_1 from './portfolio_img_1.jpeg';
function Project() {
    return (
        <div className='project-main'>
            <div className='project-heading'>
                Projects
            </div>

            <div className='all-project'>

                <div className='box box-1'>

                    <div className='box-heading'>React space</div>
                    <div className='box-img'><img src={img_1} alt='project -1' /></div>
                    <div className='box-content'>Handy tool belt to create amazing AR components in a React app, with redux intergration via middleware</div>

                </div>

                <div className='box box-2'>

                    <div className='box-heading'>React Infinte scroll</div>
                    <div className='box-img'><img src={img_1} alt='project -1' /></div>
                    <div className='box-content'>a scrollable bottom sheet with virtualization support, native animation at 60 fps and fully implemented in JS land</div>

                </div>

                <div className='box box-3'>

                    <div className='box-heading'>photo gallery</div>
                    <div className='box-img'><img src={img_1} alt='project -1' /></div>
                    <div className='box-content'>A one- stop shop for photographs to share and monetize their photos, allowing them to have a second source of income</div>

                </div>

                <div className='box box-4'>

                    <div className='box-heading'>Event Planner</div>
                    <div className='box-img'><img src={img_1} alt='project -1' /></div>
                    <div className='box-content'>A mobile application for leisure seekers to discover unique events and activities in thier city with a few steps</div>

                </div>
            </div>
        </div>
    );
}

export default Project;