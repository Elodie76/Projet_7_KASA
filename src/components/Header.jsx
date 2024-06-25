import logoKasa from "../assets/logo/LOGO_desktop.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img className="logo-header" src={logoKasa} alt="logo kasa" />
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "underline" : "")}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={(nav) => (nav.isActive ? "underline" : "")}>
                        <li>A propos</li>
                    </NavLink>
                      
                </ul>
            </nav>
        </div>
    );
};

export default Header;