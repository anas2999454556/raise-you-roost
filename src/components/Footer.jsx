import FadeContent from '../react-bits/FadeContent';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FadeContent>
          <div className="footer__top">
            <div className="footer__brand">
              <img src="/images/roost-white-logo.svg" alt="Raise The Roost" width="32" height="32" />
              <span className="footer__brand-name">Raise The Roost</span>
            </div>

            <div className="footer__links">
              <div className="footer__col">
                <h4 className="footer__col-title">Navigate</h4>
                <a href="#menu">Menu</a>
                <a href="#about">About</a>
                <a href="#locations">Locations</a>
                <a href="#sauces">Sauces</a>
              </div>
              <div className="footer__col">
                <h4 className="footer__col-title">Connect</h4>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
              <div className="footer__col">
                <h4 className="footer__col-title">Contact</h4>
                <a href="#">Careers</a>
                <a href="#">Franchise Info</a>
                <a href="#">Press</a>
              </div>
            </div>
          </div>
        </FadeContent>

        <div className="footer__bottom">
          <p className="footer__copy">&copy; {new Date().getFullYear()} Raise The Roost Chicken & Biscuits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
