import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/pictures" className="nav-link">
            Pictures
          </Link>
        </li>
      </ul>
    </nav>
  );
}
