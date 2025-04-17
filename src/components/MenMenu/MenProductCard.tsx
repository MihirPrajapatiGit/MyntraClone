import React from "react";
import "../../styles/productCard.css";
// import products from "./MenProductData";
import products from "./MenProductData.json";
import { ProductCard } from "../ProductCard";

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
