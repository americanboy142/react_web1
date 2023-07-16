import React from "react";
import pizza1 from '../pizzas/affumicata.png';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className="App">
            <section className="showcase-area"  id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Eat Right Food</h1>
                    <p>Eat Healty, it is good for our health.</p>
                    <Link to='/menu' className="btn btn-primary">Menu</Link>
                </div>
    </section>
            <h1>
                TITLE
            </h1>
            <img src={pizza1} alt="Affumicata"/>

        </div>
    );

    
};

export default Home;