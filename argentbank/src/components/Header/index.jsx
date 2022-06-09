import { Link } from "react-router-dom";

import SignInOutButtons from "../SignInOutButtons";

import logo from "../../assets/img/argentBankLogo.png";
import "./index.css";

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <SignInOutButtons />
      </div>
    </nav>
  );
}

export default Header;
