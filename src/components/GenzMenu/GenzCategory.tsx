import "../../styles/Main.css";
import ShopByCategory from "../ShopByCategory";
import { categoryImages1, categoryImages2 } from "./GenzCategoryData";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <section className="flat500off">
        <img
          src="../../../GENZ-Menu/10001.jpeg"
          alt="Flat 500 Off"
          className="flat500off-img"
        />
      </section>

      <section className="flat100-200off">
        <div>
          <img
            src="/GENZ-Menu/10002.jpeg"
            alt="Flat 100 Off"
            className="flat100off"
          />
        </div>
        <div>
          <img
            src="/GENZ-Menu/10003.jpg"
            alt="Flat 200 Off"
            className="flat200off"
          />
        </div>
      </section>
      <section>
        <h4 className="heading_2">BIGGEST DEALS ON TOP DRIPS</h4>
      </section>

      {/* Shop By Category Sections */}
      <Link to="/GenzMenu/products">
        <ShopByCategory images={categoryImages1} />
      </Link>

      <Link to="/GenzMenu/products">
        <ShopByCategory images={categoryImages2} />
      </Link>

      <section className="More">
        <img src="/GENZ-Menu/More.jpg" alt="More Offers" className="More-img" />
      </section>
    </main>
  );
};

export default Main;
