import React from "react";
import "../../styles/productCard.css";
import products from "./WomenProductData";

type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
};

const addToCart = (product: Product) => {
  const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
  existingCart.push(product);
  localStorage.setItem("cart", JSON.stringify(existingCart));
};

const ProductCard: React.FC<Product> = ({ imageSrc, name, review, price }) => (
  <div className="product-card">
    <img src={imageSrc} alt={name} />
    <div className="product-review">{review}</div>
    <div className="product-name">{name}</div>
    <div className="product-price">{price}</div>
    <button onClick={() => addToCart({ imageSrc, name, review, price })}>
      ADD TO CART
    </button>
  </div>
);

const WomenProductGrid: React.FC = () => (
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

export default WomenProductGrid;
