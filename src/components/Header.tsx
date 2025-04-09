import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src="../../../public/logo.png" alt="Logo" className="logo-img" />
      </div>

      <nav className="navigation-menu">
        <button
          onClick={() => navigate("/MEN-Menu")}
          className="nav-buttons-men"
        >
          MEN
        </button>
        <button
          onClick={() => navigate("/WOMEN-Menu")}
          className="nav-buttons-women"
        >
          WOMEN
        </button>
        <button className="nav-buttons-kids">KIDS</button>
        <button className="nav-buttons-Home">HOME</button>
        <button
          onClick={() => navigate("/BeautyMenu/products")}
          className="nav-buttons-beauty"
        >
          BEAUTY
        </button>
        <button className="nav-buttons-beauty">GENZ</button>
        <button className="nav-buttons-studio">
          STUDIO
          <div className="new-badge">NEW</div>
        </button>
      </nav>

      <div className="search-bar-container">
        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="search-bar"
        />
      </div>

      <div className="user-action-controls-container">
        <button className="user-profile-icon">
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </button>
        <button className="user-wishlist-icon">
          <FontAwesomeIcon icon={faHeart} />
          <span>Wishlist</span>
        </button>
        <button className="user-cart-icon" onClick={() => navigate("/cart")}>
          <FontAwesomeIcon icon={faBagShopping} />
          <span>Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
