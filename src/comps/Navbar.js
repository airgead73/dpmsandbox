import React from 'react';

const Navbar = () => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#top">Resources from ENG121 and ENG122</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#linkList">links</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#activityList">activities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#videoList">video</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#top" tabIndex="-1" aria-disabled="true">back to top</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>    
   );
}
 
export default Navbar;