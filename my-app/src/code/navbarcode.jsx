import { Link } from "react-router-dom";

export default function Navbarcode() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow">
      
      {/* Logo */}
      <Link className="navbar-brand fw-bold" to="/">
        ⚡ CodeLab
      </Link>

      {/* Toggle button (mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto gap-2">

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/beginner">
              <p className="r">Beginner</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/advanced">
              Advanced
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}