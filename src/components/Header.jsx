import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="header-logo">Tasty TV</div>
      <h2>Watch Later</h2>
      <button>Logout</button>
    </header>
  );
}

export default Header;