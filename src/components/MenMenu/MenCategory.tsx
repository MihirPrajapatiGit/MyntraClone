import "../styles/main.css";
import ShopByCategory from "../ShopByCategory";
import {
  categoryImages1,
  categoryImages2,
  categoryImages3,
} from "./MenCategoryData";

const Main = () => {
  return (
    <main className="main">
      <section className="flat500off">
        <img
          src="src/assets/MEN-Menu/flat400off.jpg"
          alt="Flat 500 Off"
          className="flat500off-img"
        />
      </section>

      <section className="flat100-200off">
        <div>
          <img
            src="src/assets/MEN-Menu/flat100off.jpg"
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

      <section className="shopbycat-container">
        <img
          src="src/assets/MEN-Menu/sky-high.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      <section className="shopbycat-container">
        <img
          src="src/assets/MEN-Menu/shopByCat.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      {/* Shop By Category Sections */}
      <ShopByCategory images={categoryImages1} />
      <ShopByCategory images={categoryImages2} />
      <ShopByCategory images={categoryImages3} />

      <section className="More">
        <img
          src="src/assets/MEN-Menu/More.jpg"
          alt="More Offers"
          className="More-img"
        />
      </section>
    </main>
  );
};

export default Main;
