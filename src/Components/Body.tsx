
// import './Body.css';

function Bodyy() {
  return (
    <div className="container">
      <header className="header">
        <h1>Delicious stir-fries</h1>
        <div className="cart">
          <p>SHOPPING CART</p>
        </div>
      </header>
      <main className="main">
        <div className="restaurant-info">
          <h2>Pizzaboy Leverkusen-Manfort</h2>
          <p>0214 42200</p>
          <img src="plus.png" alt="tplus" />
          <p>further branch information</p>
        </div>
        <div className="order-details">
          <div className="item">
            <p>501 VEGGIE PAN</p>
            <p>
              fried potatoes, fresh vegetables, lemongrass, ginger, coconut
              milk, in spicy red curry sauce, with rice
            </p>
            <p>€9.90</p>
            <div className="quantity">
              <p>Je €1,00</p>
              <p>2</p>
              <p>Earn 1,500 points</p>
              <p>(ca. 180g)</p>
            </div>
            <div className="coupon">
              <p>Coupon Code</p>
              <button>Redeem</button>
            </div>
          </div>
          <div className="total">
            <p>Total</p>
            <p>€0.00</p>
          </div>
          <button className="checkout">To checkout</button>
          <p>PANNA COTTA is nut taken into account in the minimum prder value</p>
          <p>is-out eligible for discount.</p>
          <p>Pro Gericht ist nur eine pizzaboy-Plus-Bestellung möglich. Solange der Vorrat reicht.</p>
        </div>
      </main>
    </div>
  );
}

export default Bodyy;
