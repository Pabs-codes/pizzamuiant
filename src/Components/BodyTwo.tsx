
import './BodyTwo.css';
import Topimg from './OtherMedia/banner_720x360_plus_pannacotta (1).png';

const BodyTwo = () => {
  return (
    <div className="body-container">
      <div className="left-panel">

        <h1 className='delclass'> Delicious stir-fries </h1>
     
        <div className="menu-itemTop">
        <img src={Topimg} alt='TopOffer' />
        </div>

        <div className="menu-item">
          <h3>Veggie Pan</h3>
          <p>Fried potatoes, fresh vegetables, lemongrass, ginger, coconut milk, in spicy red curry sauce, with rice</p>
          <p>€9.90</p>
        </div>
        <div className="menu-item">
          <h3>Fitness Pan</h3>
          <p>Fried chicken breast fillet, fresh vegetables, lemongrass, ginger, natural yogurt, with rice</p>
          <p>€11.90</p>
        </div>
        <div className="menu-item">
          <h3>Red Curry Pan</h3>
          <p>Fried chicken breast fillet, lemongrass, ginger, coconut milk, in spicy curry sauce, with rice</p>
          <p>€12.90</p>
        </div>
        {/* Add more menu items as needed */}
      </div>
      <div className="right-panel">
        <div className='right-card'>
        <div className="shopping-cart">
      <header className="cart-header">
        <i className="header-icon">📱</i>
        <div className="header-title">
          <h2>SHOPPING CART</h2>
        
         
        </div>
      </header>

      <div className='second'>
      <p>Pizza boy Leverkusen-Manfort</p>
          <p>0214 42200</p>
      </div>
      <div className="branch-info">
        <span>Further branch information</span>
        <i className="dropdown-icon">⬇️</i>
      </div>
      <div className="coupon-section">
        <span>Earn 1,500 points</span>
        <button className="redeem-button">Redeem</button>
      </div>
      <div className="total-section">
        <span>Total</span>
        <span>€0.00</span>
      </div>
      <button className="checkout-button">To checkout</button>
    </div>

        </div>
        
      </div>
    </div>
  );
};

export default BodyTwo;