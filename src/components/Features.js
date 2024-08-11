import React from "react";

const Features = () => {
  return (
    <>
      <div className="mt-5">
        <div className="my-5">
          <h1 className="text-center mb-5">Features</h1>
        </div>
        <div className="d-flex gap-5 my-5 flex-wrap justify-content-center">
          <div>
            <img src="./assets/features1.png" className="featureImg" />
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
        <div className="d-flex gap-5 my-5 flex-wrap justify-content-center flex-row-reverse middle flex-wrap">
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
        <div className="d-flex gap-5 my-5 flex-wrap justify-content-center">
          <div>
            <img src="./assets/features3.png" className=" featureImg" />
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
