import React, { useState } from 'react';
import Menu from './MenuAPI';
import Card from './Card.js';
import Navbar from './Navbar';
import './Restaurant.css';

// getting the unique categories from MenuAPI 
const uniqueList = [
    ...new Set(Menu.map((curElem) => {
            return curElem.category;
    })),
];

console.log(uniqueList);

const Restaurant = () =>{
    const [menuData, setMenuData] = useState(Menu); //created to send entire menu data to the card component
    const [menuList, setMenuList] = useState(uniqueList); //created to send the unique menu category list to the Navbar component
  
//function to show items of selected category. function called in the navbar component
const filterItem = (category) => {

    const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
    });
    setMenuData(updatedList);

};

//returning this component (important)
    return(
    <>

    {/* Title or hero section */}
    
    <section className='hero'>
    <header>
    <h1 id='rname'>Restaurant</h1>
    <span className="material-symbols-outlined">menu</span>
    </header>
    <div className='hero-title'>Relish the taste of India</div>
    <div className='hero-sub-title'>Thousands of flavors in one place</div>
    </section>
    
    <h2>Our Menu</h2>

    {/* Sending props to navbar component. filterItem is the fuction and menuList is a string array */}
    <Navbar filterItem = {filterItem} menuList={menuList}></Navbar>

    {/* Sending props to card component */}
    <div className='card-section'>
     <Card menuData={menuData}></Card> 
    </div>

    </>);

};

export default Restaurant;