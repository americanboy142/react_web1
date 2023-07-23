import React from "react";
import { Link } from "react-router-dom";
import '../components/contact.css';


const Contact = () => {


    return(
        <div className="App">
            <div className="contact">
                <div className="contact-container">
                    <h1 className="main-title" id="home">Contact us</h1>
                    <p>Phone: (805) 452-5688</p>
                    <p>Address: passo walk</p>
                    <p>Instagram: <Link to='https://www.instagram.com/viacaravaggio147/'>@viacaravaggio147</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
