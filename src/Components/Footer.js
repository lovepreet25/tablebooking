import { Link } from "react-router-dom";
import Logo from '../Assests/logo.png';
export default function Footer() {

    return (
      <footer>
        <img src= {Logo} alt="little lemon"/>
        <div className="footer-content">
            <div className="footer-nav">
                <p className="footer-head">Navigtion</p>
                <Link to="/" className="footer-item">Home</Link>
                <a href="/about" className="footer-item">About</a>
                <a href="/menu" className="footer-item">Menu</a>
                <Link to="/booking" className="footer-item">Reservations</Link>
                <a href="/online" className="footer-item">Order Online</a>
                <a href="/login" className="footer-item">Login</a>
            </div>
            <div className="footer-contact">
                <p className="footer-head">Contact</p>
                <a href="contact" className="footer-item">Address</a>
                <a href="contact" className="footer-item">Phone Number</a>
                <a href="contact" className="footer-item">Email</a>
            </div>
            <div className="footer-social">
                <p className="footer-head">Social Media</p>
                <a href="/social" className="footer-item">Facebook</a>
                <a href="/social" className="footer-item">Instagram</a>
                <a href="/social" className="footer-item">TikTok</a>
                <a href="/social" className="footer-item">Twitter</a>
            </div>
        </div>
      </footer>
    )
  }