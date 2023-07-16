import React from 'react';

const PizzaCard = ({photo,pizza}) => {
    return(
        <div className='movie'>
            <div>
            </div>

            <div>
            <img src={photo} alt={pizza.name} />
            </div>

            <div>
                <h3> {pizza.name} </h3>
                <span>{pizza.description}</span>
            </div>
        </div>

    );
};

export default PizzaCard;