import React, { useEffect, useState } from "react";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
};

const Wishlist: React.FC = () => {
  const [WishListItems, setWishListItems] = useState<Product[]>([]);

  useEffect(() => {
    const wishListData = localStorage.getItem("WishList");
    if (wishListData) {
      setWishListItems(JSON.parse(wishListData));
    }
  }, []);

  const updateWishList = (updatedItems: Product[]) => {
    setWishListItems(updatedItems);
    localStorage.setItem("WishList", JSON.stringify(updatedItems));
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
              <div className="cart-buttons">
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
