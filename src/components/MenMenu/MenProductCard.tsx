import React from "react";
import "../../styles/productCard.css";
import products from "./MenProductData";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
  quantity?: number;
};

const addToCart = (product: Product) => {
  const existingCart: Product[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  const productIndex = existingCart.findIndex(
    (item) => item.name === product.name
  );

  if (productIndex !== -1) {
    existingCart[productIndex].quantity =
      (existingCart[productIndex].quantity || 1) + 1;
  } else {
    existingCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
};

const ProductCard: React.FC<Product> = ({ imageSrc, name, review, price }) => (
  <div className="product-card">
    <img src={imageSrc} alt={name} />
    <div className="product-review">{review}</div>
    <div className="product-name">{name}</div>
    <div className="product-price">{price}</div>
    <button
      className="product-add-to-cart"
      onClick={() => addToCart({ imageSrc, name, review, price })}
    >
      ADD TO CART
    </button>
  </div>
);

const MenProductGrid: React.FC = () => (
  <div className="product-grid-wrapper">
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageSrc={product.imageSrc}
          name={product.name}
          review={product.review}
          price={product.price}
        />
      ))}
    </div>
  </div>
);

export default MenProductGrid;
