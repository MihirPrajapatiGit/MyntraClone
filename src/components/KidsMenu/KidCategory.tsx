import "../../styles/Main.css";
// import ShopByCategory from "../ShopByCategory";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="main">
      <div className="heading_div">
        <h2 className="fav">FAVOURITE BRANDS</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="favourite-brands">
          <img src="/KIDS-Menu/10001.jpg" />
          <img src="/KIDS-Menu/10002.jpg" />
          <img src="/KIDS-Menu/10003.jpg" />
          <img src="/KIDS-Menu/10004.jpg" />
          <img src="/KIDS-Menu/10005.jpg" />
          <img src="/KIDS-Menu/10006.jpg" />
          <img src="/KIDS-Menu/10007.jpg" />
          <img src="/KIDS-Menu/10008.jpg" />
          <img src="/KIDS-Menu/10009.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">TOP PICKS</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="top-picks">
          <img src="/KIDS-MENU/10010.jpg" />
          <img src="/KIDS-MENU/10011.jpg" />
          <img src="/KIDS-MENU/10012.jpg" />
          <img src="/KIDS-MENU/10013.jpg" />
          <img src="/KIDS-MENU/10014.jpg" />
          <img src="/KIDS-MENU/10015.jpg" />
          <img src="/KIDS-MENU/10016.jpg" />
          <img src="/KIDS-MENU/10017.jpg" />
          <img src="/KIDS-MENU/10018.jpg" />
          <img src="/KIDS-MENU/10019.jpg" />
          <img src="/KIDS-MENU/10020.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">ICONIC BRANDS</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="iconic-brands">
          <img src="/KIDS-MENU/10021.jpg" />
          <img src="/KIDS-MENU/10022.jpg" />
          <img src="/KIDS-MENU/10023.jpg" />
          <img src="/KIDS-MENU/10024.jpg" />
          <img src="/KIDS-MENU/10025.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">FASHION & ESSENTIALS</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="fashion-essentials">
          <img src="/KIDS-MENU/10026.jpg" />
          <img src="/KIDS-MENU/10027.jpg" />
          <img src="/KIDS-MENU/10028.jpg" />
          <img src="/KIDS-MENU/10029.jpg" />
          <img src="/KIDS-MENU/10030.jpg" />
        </section>
        <section className="fashion-essentials">
          <img src="/KIDS-MENU/10031.jpg" />
          <img src="/KIDS-MENU/10032.jpg" />
          <img src="/KIDS-MENU/10033.jpg" />
          <img src="/KIDS-MENU/10034.jpg" />
          <img src="/KIDS-MENU/10035.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">EXPLORE MORE</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="explore-more">
          <img src="/KIDS-MENU/10036.jpg" />
          <img src="/KIDS-MENU/10037.jpg" />
        </section>
        <section className="explore-more">
          <img src="/KIDS-MENU/10038.jpg" />
          <img src="/KIDS-MENU/10039.jpg" />
        </section>
        <section className="explore-more">
          <img src="/KIDS-MENU/10040.jpg" />
          <img src="/KIDS-MENU/10041.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">THE KIDS SPACE</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="kids-space">
          <img src="/KIDS-MENU/10042.jpg" />
          <img src="/KIDS-MENU/10043.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">BUDGET BUY</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="budget-buy">
          <img src="/KIDS-MENU/10044.jpg" />
          <img src="/KIDS-MENU/10045.jpg" />
          <img src="/KIDS-MENU/10046.jpg" />
          <img src="/KIDS-MENU/10047.jpg" />
          <img src="/KIDS-MENU/10048.jpg" />
          <img src="/KIDS-MENU/10049.jpg" />
        </section>
      </Link>
      <div className="heading_div">
        <h2 className="heading_2">SHOP MORE BRANDS</h2>
      </div>
      <Link to="/KIDS-Menu/products">
        <section className="shop-more-brands">
          <img src="/KIDS-MENU/10050.jpg" />
          <img src="/KIDS-MENU/10051.jpg" />
          <img src="/KIDS-MENU/10052.jpg" />
          <img src="/KIDS-MENU/10053.jpg" />
          <img src="/KIDS-MENU/10054.jpg" />
        </section>
      </Link>
    </main>
  );
};

export default Main;
