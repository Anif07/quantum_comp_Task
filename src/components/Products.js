import React from "react";

const Products = () => {
  return (
    <>
      <div className="products my-5 py-5">
        <h1 className="text-center my-4">Products</h1>
        <div className="d-flex gap-4 justify-content-center prodBoxes">
          <div class="card cardwidth">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card cardwidth">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card cardwidth">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials my-5 pt-5">
        <h1 className="text-center mb-5">Testimonals</h1>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              class="carousel-item active carouselBox"
              data-bs-interval="10000"
            >
              <img
                src="./assets/person1.jpg"
                class="d-block w-10 h-50 rounded-circle mx-auto mb-4 object-fit-cover"
                alt="person1"
              />
              <div class="carousel-caption d-none d-md-block mt-5">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item carouselBox" data-bs-interval="2000">
              <img
                src="./assets/person2.jpg"
                class="d-block w-10 h-50 rounded-circle mx-auto mb-4 object-fit-cover"
                alt="person2"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item carouselBox">
              <img
                src="./assets/person3.jpg"
                class="d-block w-10 h-50 rounded-circle mx-auto mb-4 object-fit-cover"
                alt="person3"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
