import "./styles/Header.css";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
// import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import MenCategory from "./components/MenMenu/MenCategory";
import WomenCategory from "./components/WomenMenu/WomenCategory";
import MenProductGrid from "./components/MenMenu/MenProductCard";
import Cart from "./components/cart";
import BeautyProductGrid from "./components/BeautyMenu/BeautyProductCard";
import WomenProductGrid from "./components/WomenMenu/WomenProductCard";
import Wishlist from "./components/WishList";
import KidCategory from "./components/KidsMenu/KidCategory";
import KidProductGrid from "./components/KidsMenu/KidProductCard";

function App() {
  return (
    // <>
    //   <Header />
    //   <Main />
    //   <Footer />
    //   {/* <ShopByCategory /> */}
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/MEN-Menu" element={<MenCategory />}></Route>
          <Route path="/MEN-Menu/products" element={<MenProductGrid />} />
          <Route path="/WOMEN-Menu" element={<WomenCategory />}></Route>
          <Route path="/WOMEN-Menu/products" element={<WomenProductGrid />} />
          <Route path="/KIDS-Menu" element={<KidCategory />}></Route>
          <Route path="/KIDS-Menu/products" element={<KidProductGrid />} />
          <Route path="/BeautyMenu/products" element={<BeautyProductGrid />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/WishList" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
