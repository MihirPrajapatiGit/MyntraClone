import "../styles/Main.css";
import ShopByCategory from "../components/ShopByCategory";
import {
  categoryImages1,
  categoryImages2,
  categoryImages3,
  categoryImages4,
  categoryImages5,
  categoryImages6,
} from "../components/categoryData";

const Main = () => {
  return (
    <main className="main">
      <section className="flat500off">
        <img
          src="/flat500off.jpg"
          alt="Flat 500 Off"
          className="flat500off-img"
        />
      </section>

      <section className="kiara-ranbir">
        <div className="container">
          <a href="#">
            <img src="/kiara.jpg" alt="Kiara" className="kiara" />
          </a>
        </div>
        <div className="container">
          <a href="#">
            <img src="/ranvir.jpg" alt="Ranbir" className="ranbir" />
          </a>
        </div>
      </section>

      <section className="discount-container">
        <img src="/discount.gif" alt="Discount Offers" className="discount" />
      </section>

      <section className="omg-container">
        <img src="/OMG.jpg" alt="OMG Deals" className="omg" />
      </section>

      <section className="flat100-200off">
        <div>
          <img
            src="/flat100off.webp"
            alt="Flat 100 Off"
            className="flat100off"
          />
        </div>
        <div>
          <img
            src="/flat200off.jpg"
            alt="Flat 200 Off"
            className="flat200off"
          />
        </div>
      </section>

      <section className="shopbycat-container">
        <img
          src="/shopbycat.jpg"
          alt="Shop by Category"
          className="shopbycat"
        />
      </section>

      {/* Shop By Category Sections */}
      <ShopByCategory images={categoryImages1} />
      <ShopByCategory images={categoryImages2} />
      <ShopByCategory images={categoryImages3} />
      <ShopByCategory images={categoryImages4} />
      <ShopByCategory images={categoryImages5} />
      <ShopByCategory images={categoryImages6} />

      <section className="More">
        <img src="/More.jpg" alt="More Offers" className="More-img" />
      </section>
    </main>
  );
};

export default Main;
