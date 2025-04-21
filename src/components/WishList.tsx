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
  useEffect(() => {
    fetch("http://localhost:5000/wishlist")
      .then((res) => res.json())
      .then((data) => setWishListItems(data))
      .catch((err) => console.error("Error fetching wishlist:", err));
  }, []);

  // Send updated wishlist to backend
  const updateWishList = (updatedItems: Product[]) => {
    setWishListItems(updatedItems);

    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItems),
    }).catch((err) => console.error("Error updating wishlist:", err));
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
