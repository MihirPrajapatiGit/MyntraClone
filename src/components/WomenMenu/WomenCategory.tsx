import "../../styles/Main.css";
import ShopByCategory from "../ShopByCategory";
import data from "./WomenCategoryData.json";
import { Link } from "react-router-dom";

const Main = () => {
  const { categoryImages1, categoryImages2, categoryImages3 } = data;
  return (
    <main className="main">
      <section className="flat500off">
        <img
          src="/WOMEN-Menu/flat400off.jpg"
          alt="Flat 500 Off"
          className="flat500off-img"
        />
      </section>

      <section className="flat100-200off">
        <div>
          <img
            src="/WOMEN-Menu/flat100off.jpg"
            alt="Flat 100 Off"
            className="flat100off"
          />
        </div>
        <div>
          <img
            src="/MEN-Menu/flat200off.jpg"
            alt="Flat 200 Off"
            className="flat200off"
          />
        </div>
      </section>

      <section className="discount-container">
        <img
          src="/MEN-Menu/cashback.gif"
          alt="Discount Offers"
          className="discount"
        />
      </section>

      <section className="shopbycat-container">
        <img
          src="/WOMEN-Menu/sky-high.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      <section className="shopbycat-container">
        <img
          src="/WOMEN-Menu/ExeploreByCat.jpg"
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
          src="/WOMEN-Menu/More.jpg"
          alt="More Offers"
          className="More-img"
        />
      </section>
    </main>
  );
};

export default Main;
