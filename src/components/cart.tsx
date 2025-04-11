import React, { useEffect, useState } from "react";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
  quantity?: number;
};

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  const updateCart = (updatedItems: Product[]) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const increaseQuantity = (index: number) => {
    const updated = [...cartItems];
    updated[index].quantity = (updated[index].quantity || 1) + 1;
    updateCart(updated);
  };

  const decreaseQuantity = (index: number) => {
    const updated = [...cartItems];
    if ((updated[index].quantity || 1) > 1) {
      updated[index].quantity = (updated[index].quantity || 1) - 1;
    } else {
      updated.splice(index, 1); // remove item if quantity is 1
    }
    updateCart(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-grid">
          {cartItems.map((item, index) => {
            const unitPrice = Number(item.price.replace(/[^\d]/g, ""));
            const quantity = item.quantity || 1;
            const totalItemPrice = unitPrice * quantity;

            return (
              <div key={index} className="product-card">
                <img src={item.imageSrc} alt={item.name} />
                <div className="product-name">{item.name}</div>
                <div className="product-review">{item.review}</div>
                <div className="product-price">
                  Price per unit: {item.price}
                </div>
                <div className="product-quantity">Quantity: {quantity}</div>
                <div className="product-total">Total: ₹{totalItemPrice}</div>
                <div className="cart-buttons">
                  <button onClick={() => increaseQuantity(index)}>➕</button>
                  <button onClick={() => decreaseQuantity(index)}>➖</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
