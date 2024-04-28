import './About.css'
import profile from './img.jpeg';
function About() {
    return (

        <div className='about-main'>

            <div className='about'>

                <div className='intro'>
                    <div className='name'>
                        Hello! I'm Nidhi Rajpurohit
                    </div>
                    A Frontend Developer
                    specialiezed in React
                </div>
                <div className='about-button'>
                    <div>github</div>
                    <div>linkedin</div>
                </div>
            </div>

            <div className='profile'>
                <img
                    src={profile}
                    alt="my pic"

                />
            </div>



        </div>
    );
}
export default About;