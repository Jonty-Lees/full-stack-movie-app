import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-logo">Tasty TV</div>
      <h2>Watch Later</h2>
      <button>Logout</button>

      <ul role="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/watchlater">Watch Later</Link></li>
      </ul>

    </header>
  );
}

export default Header;