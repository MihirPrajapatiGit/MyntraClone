import "./styles/Header.css";
import "./App.css";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main first";

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
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
