import React, { useState, useEffect } from "react";
import "./Cartpage.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    // Remove the item at the specified index
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    sessionStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "100px", marginRight: "10px" }}
              />
              <span>{item.alt}</span>
              <span>{item.Amount}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div>
          <button className="Cart-clearcart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
