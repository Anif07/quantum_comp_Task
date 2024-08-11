import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand colorvoilet fw-bolder" href="#">
            Jillion Technologies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="mx-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link colorvoilet fw-semibold" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link colorvoilet fw-semibold" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link colorvoilet fw-semibold" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link colorvoilet fw-semibold" href="#">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link colorvoilet fw-semibold" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
