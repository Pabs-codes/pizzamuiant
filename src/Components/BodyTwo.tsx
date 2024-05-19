// BodyTwo.tsx
import React from 'react';
import './BodyTwo.css';
import Topimg from './OtherMedia/banner_720x360_plus_pannacotta (1).png';
import ShoppingCart from './ShopingCart';
import { CartProvider, useCart } from './CartContext';

const MenuItem: React.FC<{ name: string; description: string; price: string }> = ({ name, description, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price });
  };

  return (
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCart}>{price}</button>
    </div>
  );
};

const BodyTwo = () => {
  return (
    <CartProvider>
      <div className="body-container">
        <div className="left-panel">
          <h1 className='delclass'> Delicious stir-fries </h1>
          <div className="menu-itemTop">
            <img src={Topimg} alt='TopOffer' />
          </div>
          <MenuItem name="Veggie Pan" description="Fried potatoes, fresh vegetables, lemongrass, ginger, coconut milk, in spicy red curry sauce, with rice" price="€9.90" />
          <MenuItem name="Fitness Pan" description="Fried chicken breast fillet, fresh vegetables, lemongrass, ginger, natural yogurt, with rice" price="€11.90" />
          <MenuItem name="Red Curry Pan" description="Fried chicken breast fillet, lemongrass, ginger, coconut milk, in spicy curry sauce, with rice" price="€12.90" />
          {/* Add more menu items as needed */}

          <h1 className='delclass'> Delicious stir-fries </h1>
          <div className="menu-itemTop">
           
          </div>
          <MenuItem name="Veggie Pan" description="Fried potatoes, fresh vegetables, lemongrass, ginger, coconut milk, in spicy red curry sauce, with rice" price="€9.90" />
          <MenuItem name="Fitness Pan" description="Fried chicken breast fillet, fresh vegetables, lemongrass, ginger, natural yogurt, with rice" price="€11.90" />
          <MenuItem name="Red Curry Pan" description="Fried chicken breast fillet, lemongrass, ginger, coconut milk, in spicy curry sauce, with rice" price="€12.90" />
          <MenuItem name="Red papadan Pan" description="Fried chicken breast fillet, lemongrass, ginger, coconut milk, in spicy curry sauce, with rice" price="€12.90" />

          {/* Add more menu items as needed */}
        </div>
        <div className="right-panel">
          <div className='right-card'>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default BodyTwo;
