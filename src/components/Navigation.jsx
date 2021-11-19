import React from "react";
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="nav">
        <span><Link to="/" className="nav-link">Home</Link></span>
        <span><Link to="/watchlater" className="nav-link" >Watch Later</Link></span>
    </div>
  );
}

export default Navigation;