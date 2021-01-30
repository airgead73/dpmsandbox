import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Resources from ENG121 and ENG122</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/links">links</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/activities">activities</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videos">videos</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>    
   );
}
 
export default Navbar;