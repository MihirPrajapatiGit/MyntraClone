import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section - Company Info */}
      <div className="footer-left">
        <h3>UniqueVision</h3>
        <p>Delivering quality and style to your doorstep.</p>
        <p>&copy; 2025 YourCompany. All rights reserved.</p>
      </div>

      {/* Middle Section - Quick Links */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Right Section - Customer Support & Social Media */}
      <div className="footer-right">
        <h4>Customer Support</h4>
        <p>Email: prajapatimihir502@gmail.com</p>
        <p>Phone: +91 8780719561</p>

        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
