import React from "react";
import PizzaCard from "../components/MenuCard";
import photo from "../pizzas/marinara.png";
import './menu.css';
import MenuList from "../components/Menu.json";

import { Link } from "react-scroll"; 

import MenuCard from "../components/MenuCard";


const Menu = () => {
    const h2Style = {
        'text-align': 'center',
        'font-size': '30px'
    }

    const starterArray = MenuList.starter;
    const pizzaArray = MenuList.pizza;
    const dessertArray = MenuList.dessert;
    const wineArray = MenuList.wine;

    return(
        <div className="body">
             <section className="showcase-area"  id="showcase">
                <div className="showcase-container">
                    <h1 className="main-title" id="home">Menu</h1>
                    <div className="inline-button">
                        <div className="menu-buttons">
                    <Link to='pizza' smooth={true} duration={500} className="menu-button">Pizza</Link>
                    <Link to='dessert' smooth={true} duration={500} className="menu-button">Dessert</Link>
                    <Link to='wine' smooth={true} duration={500} className="menu-button">Wine</Link>
                    </div>
                    </div>
                </div>
            </section>
            <div className='food'>
                <div id='starter'><h2 style={h2Style}>Starters</h2></div>
                <div className='food-menu-container'>
                {starterArray.map((starter) => (
                    <MenuCard item={starter} />
                ))}
                </div>

                <div id='pizza'><h2 style={h2Style}>Pizzas</h2></div>
                <div className='food-menu-container'>
                {pizzaArray.map((pizza) => (
                    <MenuCard item = {pizza} />
                ))}
                </div>

                <div id='dessert'><h2 style={h2Style}>Desserts</h2></div>
                <div className='food-menu-container'>
                {dessertArray.map((dessert) => (
                    <MenuCard item = {dessert} />
                ))}
                </div>

                <div id='wine'><h2 style={h2Style}>Wine</h2></div>
                <div className='food-menu-container'>
                {wineArray.map((wine) => (
                    <MenuCard item = {wine} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;