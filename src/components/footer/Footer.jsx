import logo from "../../assets/images/logo/logo_white.png";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="logo kasa" />
            <span className="footer__text">© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;