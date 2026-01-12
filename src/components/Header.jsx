import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <h1>JOHN DOE</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/portefolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/mentions">MENTIONS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
