import React from "react";
import PizzaCard from "../components/MenuCard";
import photo from "../pizzas/marinara.png";
import './menu.css';
import MenuList from "../components/Menu.json";

import { Link } from "react-scroll"; 

import MenuCard from "../components/MenuCard";


const Menu = () => {
    const pizza1 = {
        "photo": {photo},
        "name": "The Best",
        "description": "All the pizza in the world"
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
                    <Link to='starter' smooth={true} duration={500} className="btn btn-primary">Starters</Link>
                    <Link to='pizza' smooth={true} duration={500} className="btn btn-primary">Pizza</Link>
                    <Link to='dessert' smooth={true} duration={500} className="btn btn-primary">Desserts</Link>
                    <Link to='wine' smooth={true} duration={500} className="btn btn-primary">Wine</Link>
                    </div>
                </div>
            </section>
            <div className='food'>
                <div id='starter'><h2>Starters</h2></div>
                <div className='food-menu-container'>
                {starterArray.map((starter) => (
                    <MenuCard item={starter} />
                ))}
                </div>

                <div id='pizza'><h2>Pizzas</h2></div>
                <div className='food-menu-container'>
                {pizzaArray.map((pizza) => (
                    <MenuCard item = {pizza} />
                ))}
                </div>

                <div id='dessert'><h2>Desserts</h2></div>
                <div className='food-menu-container'>
                {dessertArray.map((dessert) => (
                    <MenuCard item = {dessert} />
                ))}
                </div>

                <div id='wine'><h2>Wine</h2></div>
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