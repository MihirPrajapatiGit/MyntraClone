import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Adjust path accordingly

const Header: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.count);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 1000);
    if (window.innerWidth > 1000) {
      setIsSidebarOpen(false); // Close sidebar when switching to desktop view
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="header">
        <div className="left-section">
          {isMobileView && (
            <button className="hamburger" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
          <Link to="/" className="logo-link">
            <div className="logo">
              <img src="/logo.png" alt="Logo" />
            </div>
          </Link>
        </div>

        {!isMobileView && (
          <>
            <nav className="navigation-menu">
              <button onClick={() => navigate("/MEN-Menu")}>MEN</button>
              <button onClick={() => navigate("/WOMEN-Menu")}>WOMEN</button>
              <button onClick={() => navigate("/KIDS-Menu")}>KIDS</button>
              <button onClick={() => navigate("/HOME-Menu")}>HOME</button>
              <button onClick={() => navigate("/BeautyMenu/products")}>
                BEAUTY
              </button>
              <button onClick={() => navigate("/GENZ-Menu")}>GENZ</button>
              <button
                className="nav-buttons-studio"
                onClick={() => navigate("/STUDIO-Menu")}
              >
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
          </>
        )}

        <div className="user-action-controls-container">
          <button className="user-profile-icon">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </button>
          <button
            className="user-wishlist-icon"
            onClick={() => navigate("/WishList")}
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>Wishlist</span>
          </button>
          <button className="user-cart-icon" onClick={() => navigate("/cart")}>
            <FontAwesomeIcon icon={faBagShopping} />
            <span>Cart</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </header>

      {isMobileView && (
        <div className="search-bar-wrapper">
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
        </div>
      )}

      {isSidebarOpen && (
        <>
          <nav className="sidebar">
            <button
              onClick={() => {
                navigate("/MEN-Menu");
                closeSidebar();
              }}
            >
              MEN
            </button>
            <button
              onClick={() => {
                navigate("/WOMEN-Menu");
                closeSidebar();
              }}
            >
              WOMEN
            </button>
            <button
              onClick={() => {
                navigate("/KIDS-Menu");
                closeSidebar();
              }}
            >
              KIDS
            </button>
            <button
              onClick={() => {
                navigate("/HOME-Menu");
                closeSidebar();
              }}
            >
              HOME
            </button>
            <button
              onClick={() => {
                navigate("/BeautyMenu/products");
                closeSidebar();
              }}
            >
              BEAUTY
            </button>
            <button
              onClick={() => {
                navigate("/GENZ-Menu");
                closeSidebar();
              }}
            >
              GENZ
            </button>
            <button
              className="nav-buttons-studio"
              onClick={() => {
                navigate("/STUDIO-Menu");
                closeSidebar();
              }}
            >
              STUDIO
              <div className="new-badge">NEW</div>
            </button>
          </nav>
          <div className="backdrop" onClick={closeSidebar}></div>
        </>
      )}
    </>
  );
};

export default Header;
