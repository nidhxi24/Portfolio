import './ContactMe.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!email.trim()) {
            formErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!msg.trim()) {
            formErrors.msg = "Message is required";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //emailjs -> service id, template id, public key 
        const serviceId = 'service_d99npzl';
        const templateId = 'template_zijo7vk';
        const publiKey = 'GF3xMjA6qhMNGAve-';

        //create a new object that contains dynamic params
        const templateParams = {
            from_email: email,
            to_name: 'nidhi',
            message: msg,
        };

        emailjs.send(serviceId, templateId, templateParams, publiKey)
            .then((response) => {
                console.log("email sent successfully! ", response);
                // setName('');
                setEmail('');
                setMsg('');
            })
            .catch((error) => {
                console.error("error sending email", error);
            })

        if (validateForm()) {
            alert("message sent to Nidhi successfully!");
            // Reset form fields
            // setName("");
            setEmail("");
            // setSubject("");
            setMsg("");
            setErrors({});
        }
    };

    return (
        <div className="contact-main">
            <div className='contact'>
                <div className='contact-heading'>
                    {/* <div > */}
                        {/* Contact Me */}
                        Get In Touch
                    {/* </div> */}

                    {/* <div className='contact-heading-sub'>
                        Please contact me directly at <b>rajp.nidhi@gmail.com</b> or through this form.
                    </div> */}
                </div>

                <div className='form'>
                    <form onSubmit={handleSubmit} style={{height: "100%", width: "100%"}}>

                    {/* <div className='contact-heading-sub'> */}
                        Please contact me directly at <b>rajp.nidhi@gmail.com</b> or through this form.

                        <br/>
                        <br/>
                    {/* </div> */}

                        {/* <div className='form-div'> */}
                            {/* <label>Email Address</label> */}
                            <input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        {/* </div> */}

                        {/* <div className='form-div'> */}
                            {/* <label>Your Message</label> */}
                            <textarea
                            placeholder='Message'
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                            />
                            {errors.msg && <p className="error">{errors.msg}</p>}
                        {/* </div> */}

                        {/* <div className='form-div'> */}
                            <button type="submit">SUBMIT</button>
                        {/* </div> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
