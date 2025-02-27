import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
  return <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Panelist
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Job Description</a>
            </li>
          </ul>
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
  </div>;


};

export default Navbar;
