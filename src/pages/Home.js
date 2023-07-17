import React from "react";
import pizza1 from '../pizzas/affumicata.png';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className="App">
            <section className="showcase-area"  id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Via Carvagio</h1>
                    <p>Classic Neopolitan pizza</p>
                    <p>Located in the Paso market from 10-6</p>
                    <p>phone</p>
                    <Link to='/menu' className="btn btn-primary">Menu</Link>
                </div>
            </section>
            <div className='container'>
                <h1>About us</h1>
                <p> E.R. doc turned pizza chief </p>
            </div>
        </div>
    );

    
};

export default Home;