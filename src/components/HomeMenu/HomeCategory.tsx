import "../../styles/Home-menu.css";
// import ShopByCategory from "../ShopByCategory";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="home_main">
      <Link to="/Home-Menu/products">
        <section className="your_home">
          <img src="/HOME-Menu/10001.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">NICE TO SEE YOU, COME ON IN!</h2>
      </div>
      <Link to="/Home-Menu/products">
        <section className="category_1">
          <img src="/HOME-Menu/10002.jpg" />
          <img src="/HOME-Menu/10003.jpg" />
        </section>
        <section className="category_1">
          <img src="/HOME-Menu/10004.jpg" />
          <img src="/HOME-Menu/10005.jpg" />
        </section>
        <section className="category_1">
          <img src="/HOME-Menu/10006.jpg" />
          <img src="/HOME-Menu/10007.jpg" />
        </section>
      </Link>
      <Link to="/HOME-Menu/products">
        <section className="get_inspired">
          <img src="/HOME-Menu/10008.jpg" />
        </section>
      </Link>
      <Link to="/HOME-Menu/products">
        <section className="get_inspired_type">
          <img src="/HOME-Menu/10009.jpg" />
          <img src="/HOME-Menu/10010.jpg" />
          <img src="/HOME-Menu/10011.jpg" />
        </section>
      </Link>
      <Link to="/HOME-Menu/products">
        <section className="Featured_brands">
          <img src="/HOME-Menu/10012.jpg" />
        </section>
      </Link>
      <Link to="/HOME-Menu/products">
        <section className="Featured_brands_type">
          <img src="/HOME-Menu/10013.jpg" />
          <img src="/HOME-Menu/10014.jpg" />
          <img src="/HOME-Menu/10015.jpg" />
          <img src="/HOME-Menu/10016.jpg" />
          <img src="/HOME-Menu/10017.jpg" />
        </section>
      </Link>
    </main>
  );
};

export default Main;
