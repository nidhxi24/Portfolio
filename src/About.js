import './About.css'
import Navbar from './Navbar';
import profile from './img.jpeg';
function About() {
    return (

        <div className='main'>
            <Navbar />
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
                        <div>
                            <a href='https:/github.com'>github</a>
                        </div>
                        
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
        </div>
    );
}
export default About;