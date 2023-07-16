import React from "react";
import PizzaCard from "../components/pizzacard";
import photo from "../pizzas/marinara.png";

const Menu = () => {
    const pizza1 = {
        "photo": {photo},
        "name": "The Best",
        "description": "All the pizza in the world"
    }

    return(
        <div className="body">
            <PizzaCard photo= {photo} pizza = {pizza1}/>
            <img src={pizza1.photo} alt="this"/>
            <h1>The Best</h1>
        </div>
    );
};
export default Menu;