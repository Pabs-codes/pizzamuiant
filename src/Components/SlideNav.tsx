import React, { useState } from 'react';
import './style.css';
// import ArrowRightIcon from './ArrowRightIcon';
// import ArrowLeftIcon from './ArrowLeftIcon'; 

const Tabs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const container = document.querySelector('.scrollable-tabs-container ul');
    if (container) {
      setScrollPosition(container.scrollLeft);
    }
  };

  const handleScrollLeft = () => {
    const container = document.querySelector('.scrollable-tabs-container ul');
    if (container) {
      container.scrollLeft -= 200;
      setScrollPosition(container.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    const container = document.querySelector('.scrollable-tabs-container ul');
    if (container) {
      container.scrollLeft += 200;
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div className="scrollable-tabs-container">
      <div className={`left-arrow ${scrollPosition >= 20 ? 'active' : ''}`} onClick={handleScrollLeft}>
      LL  {/* <ArrowLeftIcon /> */} 
      </div>



      














      <ul onScroll={handleScroll}>
        <li><a href="#" className="active">All</a></li>
        <li><a href="#">BURGER</a></li>
        <li><a href="#">Pizzaboy Asia</a></li>
        <li><a href="#">ASIA</a></li>
        <li><a href="#">Pizzaboy Vegetarisch</a></li>
        <li><a href="#">Pizzaboy Beilagen</a></li>
        <li><a href="#">Pizzaboy Dips+Saucen</a></li>
        <li><a href="#">DIPS+SAUCEN</a></li>
        <li><a href="#">Pizzaboy Kids</a></li>
        <li><a href="#">KIDS</a></li>
        <li><a href="#">Pizzaboy Getränke</a></li>
        <li><a href="#">GETRÄNKE</a></li>
        <li><a href="#">Pizzaboy Dessert</a></li>
        <li><a href="#">DESSERT</a></li>

      </ul>

      <div className={`right-arrow ${scrollPosition <= 1000 ? 'active' : ''}`} onClick={handleScrollRight}>
        {/* <ArrowRightIcon /> */} RR
      </div>
    </div>
  );
};

export default Tabs;
