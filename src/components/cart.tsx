import React, { useEffect, useState } from "react";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
};

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-grid">
          {cartItems.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.imageSrc} alt={item.name} />
              <div className="product-name">{item.name}</div>
              <div className="product-review">{item.review}</div>
              <div className="product-price">{item.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
