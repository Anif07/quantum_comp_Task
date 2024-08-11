import React from "react";

const Features = () => {
  return (
    <>
      <div className="mt-5" id="features">
        <div className="my-5">
          <h1 className="text-center mb-5">Features</h1>
        </div>
        <div className="d-flex gap-5 my-5 justify-content-center featurewrap">
          <div>
            <img
              src="./assets/features1.png"
              className="featureImg"
              alt="features1"
            />
          </div>
          <div className="mt-5">
            <p>
              <strong>Card Title</strong>
            </p>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>{" "}
        <div className="d-flex gap-5 my-5  justify-content-center flex-row-reverse middle featurewrap">
          <div className="flex-grow-1">
            <img
              src="./assets/features2.png.jpg"
              className="featureImg"
              alt="feature2"
            />
          </div>
          <div className="mt-5  flex-grow-1">
            <p>
              <strong>Card Title</strong>
            </p>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="d-flex gap-5 my-5  justify-content-center featurewrap">
          <div>
            <img
              src="./assets/features3.png"
              className=" featureImg"
              alt="feature3"
            />
          </div>
          <div className="mt-5">
            <p>
              <strong>Card Title</strong>
            </p>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
