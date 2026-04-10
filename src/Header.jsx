import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2>Student Portal</h2>

      <nav className="nav-buttons">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Registration</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/fetch">Fetch Data</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
    </header>
  );
};

export default Header;