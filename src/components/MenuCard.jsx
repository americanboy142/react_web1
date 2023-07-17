import React from 'react';
import '../pages/menu.css';
import '../App.css';

const MenuCard = ({item}) => {
    return(
        <div className='food-menu-item'>
            <img src={item.Photo} alt={item.Name} />

            <div className='food-description'>
                <div className='font-title'> {item.Name} </div>
                <div className='food-price'>{item.Price}</div>
                <p>{item.Description}</p>
            </div>
        </div>
    );
};

export default MenuCard;