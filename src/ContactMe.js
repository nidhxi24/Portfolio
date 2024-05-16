import './ContactMe.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        // if (!name.trim()) {
        //     formErrors.name = "Name is required";
        //     isValid = false;
        // }

        if (!email.trim()) {
            formErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid";
            isValid = false;
        }

        // if (!subject.trim()) {
        //     formErrors.subject = "Subject is required";
        //     isValid = false;
        // }

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
                    <div >
                        Contact Me
                    </div>

                    <div className='contact-heading-sub'>
                        Please contact me directly at rajp.nidhi@gmail.com or through this form.
                    </div>
                </div>

                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        {/* <div className='form-div'>
                            <label>Name </label>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div> */}

                        <div className='form-div'>
                            <label>Email Address</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        {/* <div className='form-div'>
                            <label>Type of Enquiry</label>
                            <input
                                type='text'
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            {errors.subject && <p className="error">{errors.subject}</p>}
                        </div> */}

                        <div className='form-div'>
                            <label>Your Message</label>
                            <textarea
                                value={msg}
                                onChange={(e) => setMsg(e.target.value)}
                            />
                            {errors.msg && <p className="error">{errors.msg}</p>}
                        </div>

                        <div className='form-div'>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
