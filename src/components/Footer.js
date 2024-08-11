import React from "react";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-around bgViolet my-5 py-3 flex-wrap align-content-between gap-3 px-3">
      <div className="text-center ">
        <h4 className="mb-3">CONTACT US</h4>
        <h5>E mail</h5>
        <p>contact@JILLIONTECHNOLOGIES.com</p>
        <h5>Phone</h5>
        <p>123456789</p>
        <h5>Address</h5>
        <p>c-260, sector-63, Noida, UP-201301</p>
      </div>
      <div className="text-center">
        <h4 className="mb-3">COMPANY</h4>
        <p>About Us</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>Development Process</p>
        <p>Career</p>
      </div>
      <div className="text-center">
        <h4 className="mb-3">SERVICES</h4>
        <p>Website Development</p>
        <p>Mobile App Development</p>
        <p>E-commerce Development</p>
        <p>Customer software Development</p>
      </div>
      <div className="text-center">
        <h4 className="mb-3">SUPPORT</h4>
        <p>Contact</p>
        <p>Terma & Policy</p>
      </div>
    </div>
  );
};

export default Footer;
