import React from "react";

const Navbar = () => {
  return (
    <div className="navCont">
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container-fluid">
          <a className="navbar-brand colorvoilet fw-bolder" href="#Jillion">
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
                <a className="nav-link colorvoilet fw-semibold" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link colorvoilet fw-semibold"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link colorvoilet fw-semibold"
                  href="#products"
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link colorvoilet fw-semibold"
                  href="#testimonals"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link colorvoilet fw-semibold"
                  href="#contactus"
                >
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
