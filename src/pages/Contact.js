import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const constactStyle = {
        justifyContent: 'center'
    }

    return(
        <div className="container" style={constactStyle}>
            <div className="container" >
                <h1>Contact us</h1>
                <Link to='https://www.instagram.com/viacaravaggio147/' >@viacaravaggio147</Link>
                <p>Phone: (805) 452-5688</p>
                <p>Address: passo walk</p>
            </div>
        </div>
    );
};

export default Contact;
