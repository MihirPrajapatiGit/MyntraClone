import React from "react";
import "../../styles/productCard.css";
import products from "./BeautyProductData";
import { ProductCard } from "../ProductCard";

const BeautyProductGrid: React.FC = () => (
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

export default BeautyProductGrid;
