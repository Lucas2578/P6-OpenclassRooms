import logo from "../../assets/images/logo/logo_white.webp";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="logo kasa" />
            <span className="footer__text">© 2024 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;