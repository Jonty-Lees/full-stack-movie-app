import React from "react";
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="nav">
      <ul role="nav">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/watchlater">Watch Later</Link></span>
      </ul>
    </div>
  );
}

export default Navigation;