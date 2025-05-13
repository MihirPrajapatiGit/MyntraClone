import React from "react";
import { useDispatch } from "react-redux";
import { updateCartCount } from "../store/cartSlice"; // Adjust path accordingly
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
  quantity?: number;
};

const dispatchCartUpdateEvent = () => {
  const event = new Event("storage");
  window.dispatchEvent(event);
};

const saveToBackend = async (endpoint: string, data: Product[]) => {
  try {
    await fetch(`http://localhost:5000/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error(`Error saving to ${endpoint}:`, err);
  }
};

const addToCart = async (
  product: Product,
  dispatch: Dispatch<UnknownAction>
) => {
  const existingCart: Product[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  const productIndex = existingCart.findIndex(
    (item) => item.imageSrc === product.imageSrc
  );

  if (productIndex !== -1) {
    existingCart[productIndex].quantity =
      (existingCart[productIndex].quantity || 1) + 1;
  } else {
    existingCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  await saveToBackend("cart", existingCart);

  // Update Redux store with new cart count
  const totalCount = existingCart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  dispatch(updateCartCount(totalCount));

  // Trigger cart count update in header
  dispatchCartUpdateEvent();
};

const addToWishList = async (product: Product) => {
  const existingWishList: Product[] = JSON.parse(
    localStorage.getItem("WishList") || "[]"
  );

  const productExists = existingWishList.some(
    (item) => item.imageSrc === product.imageSrc
  );

  if (productExists) {
    alert("Product is already added to the wishlist.");
    return;
  }

  existingWishList.push(product);
  localStorage.setItem("WishList", JSON.stringify(existingWishList));
  await saveToBackend("wishlist", existingWishList);
};

export const ProductCard: React.FC<Product> = ({
  imageSrc,
  name,
  review,
  price,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} />
      <div className="product-review">{review}</div>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
      <button
        className="product-add-to-cart"
        onClick={() => addToCart({ imageSrc, name, review, price }, dispatch)}
      >
        ADD TO CART
      </button>
      <button
        className="product-add-to-WishList"
        onClick={() => addToWishList({ imageSrc, name, review, price })}
      >
        ADD TO WishList
      </button>
    </div>
  );
};
