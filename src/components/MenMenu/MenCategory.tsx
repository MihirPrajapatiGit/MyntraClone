import "../../styles/Main.css";
import ShopByCategory from "../ShopByCategory";
import {
  categoryImages1,
  categoryImages2,
  categoryImages3,
} from "./MenCategoryData";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <section className="flat500off">
        <img
          src="../../../public/MEN-Menu/flat400off.jpg"
          alt="Flat 500 Off"
          className="flat500off-img"
        />
      </section>

      <section className="flat100-200off">
        <div>
          <img
            src="../../../public/MEN-Menu/flat100off.jpg"
            alt="Flat 100 Off"
            className="flat100off"
          />
        </div>
        <div>
          <img
            src="../../../public/MEN-Menu/flat200off.jpg"
            alt="Flat 200 Off"
            className="flat200off"
          />
        </div>
      </section>

      <section className="discount-container">
        <img
          src="../../../public/MEN-Menu/cashback.gif"
          alt="Discount Offers"
          className="discount"
        />
      </section>

      <section className="shopbycat-container">
        <img
          src="../../../public/MEN-Menu/sky-high.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      <section className="shopbycat-container">
        <img
          src="../../../public/MEN-Menu/shopByCat.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      {/* Shop By Category Sections */}
      <Link to="/MEN-Menu/products">
        <ShopByCategory images={categoryImages1} />
      </Link>

      <Link to="/MEN-Menu/products">
        <ShopByCategory images={categoryImages2} />
      </Link>

      <Link to="/MEN-Menu/products">
        <ShopByCategory images={categoryImages3} />
      </Link>

      <section className="More">
        <img
          src="../../../public/MEN-Menu/More.jpg"
          alt="More Offers"
          className="More-img"
        />
      </section>
    </main>
  );
};

export default Main;
