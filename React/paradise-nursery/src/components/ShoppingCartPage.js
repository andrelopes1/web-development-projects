// ShoppingCartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/actions';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart.cart); // Ensure you're accessing the correct state
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(incrementItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0); // Ensure cart is an array

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => handleDecrement(item)}>-</button>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total: ${totalPrice}</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;




