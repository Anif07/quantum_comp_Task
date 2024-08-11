import React from "react";

const Banner = () => {
  return (
    <div
      className="banner d-flex mt-5 flex-wrap gap-3 justify-content-center"
      id="home"
    >
      <div className="mt-5" id="Jillion">
        <h1 className="colorvoilet">WE MAKE YOUR IDEA'S</h1>
        <h1 className="colorOrange">INTO REALITY</h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's
          <br /> content Some quick example text to build on the card title and
          make up the bulk of
          <br /> the card's content.
        </p>
        <div>
          <button className="btn voiletbtn me-4">Get Started</button>
          <button className=" btn colorVioletBtn">Contact Us</button>
        </div>
      </div>
      <div>
        <img src="assets/image.png" alt="img" className="bannerImg" />
      </div>
    </div>
  );
};

export default Banner;
