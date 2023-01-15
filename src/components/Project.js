import React, { useState } from "react";
import About from "./About";
import Project from "./Project";

function renderProjects() {
  return (
    <div className="bg-light">
      <div id="my-work" className="container py-5">
        <div className="row">
          <h1 className="display-4 fw-bold">My Work</h1>
          <div className="row">
            <p className=" fs-4">
              Below, you'll find several applications I've enjoyed building: Pet
              2 Vet is a full-stack application using JavaScript, Node.js,
              MySQL, and other technologies; Smoothie Math is a front-end app
              utilizing third-party API data; and the Social Network API and
              Ecommerce Backend are both fully backend apps that utlize MySQL,
              NoSQL, Sequelize, and Mongoose.
            </p>
          </div>
          <div className="row py-3">
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./golden.jpg"
                alt="golden retriever"
              />

              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#petModal"
              >
                Pet 2 Vet
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="petModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header d-flex">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Pet 2 Vet
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      Pet 2 Vet is a full-stack application utilizing a dynamic
                      frontend using JavaScript, Node.js, Handlebars, and a
                      MySQL database using Sequelize models. It also uses
                      Express.js to efficiently use routes and utlize session
                      information for login and user data.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://damp-forest-39395.herokuapp.com/">
                          View App
                        </a>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/pet-to-vet">
                          View GitHub Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./smoothie2.jpg"
                alt="smoothie in a glass"
              />
              {/*<!-- Button trigger modal -->*/}
              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#smoothieModal"
              >
                Smoothie Math
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="smoothieModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Smoothie Math
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      Smoothie Math is a frontend application utilizing a
                      third-party API and fetch requests to populate nutritional
                      data so the user can see the nutrition facts of the
                      smoothie they’re making.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://allenmurfee.github.io/smoothie-math/">
                          View App
                        </a>
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/smoothie-math">
                          View GitHub Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./social-media.jpg"
                alt="social media"
              />
              {/*<!-- Button trigger modal -->*/}
              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#socialModal"
              >
                Social Network API
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="socialModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Social Network API
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      The Social Network API is a fully backend application
                      using NoSQL (MongoDB, Mongoose) to create a database for a
                      hypothetical social media site that needs to store data on
                      users, thoughts, and reactions.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/social-network-api">
                          View App
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <img
                className="img-fluid rounded"
                src="./ecommerce.jpg"
                alt="Allen Murfee profile picture"
              />
              {/*<!-- Button trigger modal -->*/}
              <button
                type="button"
                className="btn btn-secondary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#ecommerceModal"
              >
                Ecommerce Backend
              </button>

              {/*<!-- Modal -->*/}
              <div
                className="modal fade"
                id="ecommerceModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-3" id="exampleModalLabel">
                        Ecommerce Application - Backend
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body left-align">
                      This Ecommerce Backend Application is a fully backend app
                      using MySQL (Sequelize) to create a database for a
                      hypothetical Ecommerce site that includes data on
                      products, categories, price, the number in stock, etc.
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary justify-content-center w-33 m-3"
                        data-bs-dismiss="modal"
                      >
                        <a href="https://github.com/allenmurfee/ecommerce-backend">
                          View App
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default renderProjects;
