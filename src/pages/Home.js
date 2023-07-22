import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    const pStyle = {
        'text-indent': '50px'
    }
    return(
        <div className="App">
            <section className="showcase-area"  id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Via Carvagio</h1>
                    <p>51 Pizzas Left</p>
                    <Link to='/menu' className="btn btn-primary">Menu</Link>
                </div>
            </section>
            <div className='container'>
                <h1>About us</h1>
                <p style={pStyle}> Welcome to our authentic Neapolitan pizza restaurant nestled 
                    in the heart of Paso Robles, California. At Via Caravaggio, we pride 
                    ourselves on crafting mouthwatering pizzas using traditional recipes and 
                    the finest ingredients imported from Naples, Italy.</p>
                <br></br>
                <p style={pStyle}> Immerse yourself in the flavors of Italy as our skilled pizzaiolos 
                    expertly hand-stretch the dough, layer it with rich San Marzano 
                    tomato sauce, and top it with fresh mozzarella cheese. Each pizza 
                    is then wood-fired in our authentic Neapolitan oven, resulting in a 
                    perfect combination of crispy yet chewy crust, savory toppings, and a 
                    hint of smoky aroma. </p>
                    <br></br>
                <p style={pStyle}> Our commitment to quality extends beyond our pizzas. From the warm 
                    and inviting ambiance to the attentive service, we strive to create 
                    an exceptional dining experience for every guest. Whether you're enjoying 
                    a classic Margherita pizza or exploring our unique specialty combinations,
                     every bite is a culinary journey to Naples. </p>
                     <br></br>
                <p style={pStyle}> Join us at Via Caravaggio to savor the true essence of Neapolitan 
                    pizza, right here in Paso Robles. Experience the flavors, traditions, 
                    and passion that make our restaurant a beloved destination for pizza 
                    enthusiasts and Italian food lovers alike. Buon appetito!"</p>
            </div>
        </div>
    );

    
};

export default Home;