import React from 'react';

const CartItem = ({ id, name, price, quantity }) => (
  <div className="cart-item">
    <p>{name}</p>
    <p>${price} x {quantity}</p>
    {/* Implement buttons for quantity adjustments */}
    <button>+</button>
    <button>-</button>
    <button>Remove</button>
  </div>
);

const Cart = () => (
  <div className="cart">
    {/* Map through items in the cart and render CartItem components */}
    {/* Implement logic for updating quantities and removing items */}
    {/* Display total price */}
    <div>Total: $100.00</div>
    <button>Complete Purchase</button>
  </div>
);

export default Cart;