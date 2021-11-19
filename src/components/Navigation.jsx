import React from "react";
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="nav">
      <ul role="nav">
        <span><Link to="/" id="nav-link">Home</Link></span>
        <span><Link to="/watchlater" id="nav-link" >Watch Later</Link></span>
      </ul>
    </div>
  );
}

export default Navigation;