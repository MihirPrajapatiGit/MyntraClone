import React, { useEffect, useState } from "react";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
};

const Wishlist: React.FC = () => {
  const [WishListItems, setWishListItems] = useState<Product[]>([]);

  // Fetch wishlist from backend
  const fetchWishlist = async () => {
    try {
      const res = await fetch("http://localhost:5000/wishlist");
      const data = await res.json();
      setWishListItems(data);
      localStorage.setItem("WishList", JSON.stringify(data));
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  // Update wishlist in backend and localStorage
  const updateWishList = async (updatedItems: Product[]) => {
    try {
      setWishListItems(updatedItems);
      localStorage.setItem("WishList", JSON.stringify(updatedItems));
      await fetch("http://localhost:5000/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItems),
      });
    } catch (err) {
      console.error("Error updating wishlist:", err);
    }
  };

  const removeItem = (index: number) => {
    const updated = [...WishListItems];
    updated.splice(index, 1);
    updateWishList(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Wishlist Items</h2>
      {WishListItems.length === 0 ? (
        <p>Your WishList is empty.</p>
      ) : (
        <div className="product-grid">
          {WishListItems.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.imageSrc} alt={item.name} />
              <div className="product-name">{item.name}</div>
              <div className="product-review">{item.review}</div>
              <div className="product-price">{item.price}</div>
              <div>
                <button
                  className="product-remove"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
