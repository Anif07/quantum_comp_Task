import React from "react";

const Contactus = () => {
  return (
    <div className="mx-5 px-4 " id="contactus">
      <h1 className="text-center my-5">Contact Us</h1>
      <div className="d-flex justify-content-center gap-3 me-5 pe-3 flex-wrap contactBox">
        <div className="flex-grow-1">
          <img
            src="./assets/contactus.png"
            alt="contactus"
            className="contactimg"
          />
        </div>
        <div className="flex-grow-1 ">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button className="btn voiletbtn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
