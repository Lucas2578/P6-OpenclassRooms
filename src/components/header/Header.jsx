import logo from "../../assets/images/logo/logo_colored.png";
import Nav from "../nav/Nav";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo kasa" />
            <Nav />
        </header>
    );
};

export default Header;