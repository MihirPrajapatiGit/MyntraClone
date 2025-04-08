import "../../styles/Main.css";
import ShopByCategory from "../ShopByCategory";
import {
  categoryImages1,
  categoryImages2,
  categoryImages3,
} from "./WomenCategoryData";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <section className="flat500off">
        <img
          src="src/assets/WOMEN-Menu/flat400off.jpg"
          alt="Flat 500 Off"
          className="flat500off-img"
        />
      </section>

      <section className="flat100-200off">
        <div>
          <img
            src="src/assets/WOMEN-Menu/flat100off.jpg"
            alt="Flat 100 Off"
            className="flat100off"
          />
        </div>
        <div>
          <img
            src="src/assets/MEN-Menu/flat200off.jpg"
            alt="Flat 200 Off"
            className="flat200off"
          />
        </div>
      </section>

      <section className="discount-container">
        <img
          src="src/assets/MEN-Menu/cashback.gif"
          alt="Discount Offers"
          className="discount"
        />
      </section>

      <section className="shopbycat-container">
        <img
          src="src/assets/WOMEN-Menu/sky-high.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      <section className="shopbycat-container">
        <img
          src="src/assets/WOMEN-Menu/ExeploreByCat.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      <Link to="/WOMEN-Menu/products">
        <ShopByCategory images={categoryImages1} />
      </Link>

      <Link to="/WOMEN-Menu/products">
        <ShopByCategory images={categoryImages2} />
      </Link>

      <Link to="/WOMEN-Menu/products">
        <ShopByCategory images={categoryImages3} />
      </Link>

      <section className="More">
        <img
          src="src/assets/WOMEN-Menu/More.jpg"
          alt="More Offers"
          className="More-img"
        />
      </section>
    </main>
  );
};

export default Main;
