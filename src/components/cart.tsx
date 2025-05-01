import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store"; // Adjust path to your store
import { updateCartCount } from "../store/cartSlice"; // Adjust path as well
import "../styles/order-summary.css";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
  quantity?: number;
};

const cleanPrice = (priceStr: string) => {
  const match = priceStr.match(/(\d+(?:\.\d{1,2})?)/);
  return match ? parseFloat(match[1]) : 0;
};

// Custom event to trigger cart updates
const dispatchCartUpdateEvent = () => {
  const event = new Event("storage");
  window.dispatchEvent(event);
};

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showProgress, setShowProgress] = useState(false);
  const cartCount = useSelector((state: RootState) => state.cart.count);

  useEffect(() => {
    const storedCart: Product[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCartItems(storedCart);

    // Update Redux store cart count
    const totalCount = storedCart.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    dispatch(updateCartCount(totalCount));

    // Optionally, sync with backend
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        localStorage.setItem("cart", JSON.stringify(data));
      })
      .catch((err) => console.error("Error loading cart:", err));
  }, [dispatch]);

  const updateCart = (updatedItems: Product[]) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));

    // Trigger cart count update
    const totalCount = updatedItems.reduce(
      (sum, item) => sum + (item.quantity || 1),
      0
    );
    dispatch(updateCartCount(totalCount));

    // Save updated cart to backend
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItems),
    }).catch((err) => console.error("Error updating cart:", err));

    dispatchCartUpdateEvent();
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
      updated.splice(index, 1);
    }
    updateCart(updated);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + cleanPrice(item.price) * (item.quantity || 1);
  }, 0);

  const shippingCharge = cartItems.length > 0 ? 50 : 0;
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + shippingCharge + tax;

  const handleBuy = () => {
    setShowProgress(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="product-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.imageSrc} alt={item.name} />
                <div className="product-name">{item.name}</div>
                <div className="product-review">{item.review}</div>
                <div className="product-price">{item.price}</div>
                <div className="product-quantity">
                  Quantity: {item.quantity || 1}
                </div>
                <div className="cart-buttons">
                  <button onClick={() => increaseQuantity(index)}>➕</button>
                  <button onClick={() => decreaseQuantity(index)}>➖</button>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            {cartItems.map((item, i) => (
              <div key={i} className="summary-item">
                <span>
                  {item.name} x {item.quantity || 1}
                </span>
                <span>
                  ₹{(cleanPrice(item.price) * (item.quantity || 1)).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="summary-detail">Shipping: ₹{shippingCharge}</div>
            <div className="summary-detail">Tax (10%): ₹{tax.toFixed(2)}</div>
            <div className="summary-total">Total: ₹{grandTotal.toFixed(2)}</div>
            <button className="buy-button" onClick={handleBuy}>
              BUY
            </button>
          </div>

          {showProgress && (
            <div className="order-progress">
              <div className="dot">Order Placed</div>
              <div className="dot">Order Dispatched</div>
              <div className="dot">Order Successfully Placed</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
