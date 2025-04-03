import "./styles/Header.css";
import "./App.css";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
// import Dashboard from "./components/Dashboard";
import Main from "./components/Main first";
import MenCategory from "./components/MenMenu/MenCategory";
import WomenCategory from "./components/WomenMenu/WomenCategory";

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
          <Route path="/WOMEN-Menu" element={<WomenCategory />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
