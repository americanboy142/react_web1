import React from "react";
import { Link } from "react-router-dom";
import '../components/contact.css';

const Contact = () => {


    return(
        <div className="App">
            <section className="showcase-area"  id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Contact us</h1>
                    <p>Phone: (805) 452-5688</p>
                    <p>Address: passo walk</p>
                    <Link to='https://www.instagram.com/viacaravaggio147/' className="btn btn-primary">Instagram</Link>
                </div>
            </section>
        </div>
    );
};

export default Contact;
