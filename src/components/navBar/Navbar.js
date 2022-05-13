import { Link } from 'react-router-dom';

import './navBar.css';

const NavBar = () => (
  <div className="navContainer">
    <h2>Bookstore CMS</h2>
    <ul className="nav">
      <li>
        <Link to="/" className="link">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories" className="link">CATEGORIES</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
